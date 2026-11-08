import { createContext, useContext, useState, useEffect } from 'react'
import { products } from '../data/products'

const SelectionContext = createContext(null)

const STORAGE_KEY = 'egcp_selection'

export function SelectionProvider({ children }) {
  const [selection, setSelection] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selection))
    } catch {
      // storage unavailable
    }
  }, [selection])

  const isInSelection = (slug) => selection.includes(slug)

  const toggleItem = (slug) => {
    setSelection((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug)
      } else {
        return [...prev, slug]
      }
    })
  }

  const removeItem = (slug) => {
    setSelection((prev) => prev.filter((s) => s !== slug))
  }

  const clearSelection = () => {
    setSelection([])
  }

  const selectedProducts = selection
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean)

  const openDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)
  const toggleDrawer = () => setIsOpen((v) => !v)

  return (
    <SelectionContext.Provider
      value={{
        selection,
        selectedProducts,
        count: selection.length,
        isInSelection,
        toggleItem,
        removeItem,
        clearSelection,
        isOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
      }}
    >
      {children}
    </SelectionContext.Provider>
  )
}

export function useSelection() {
  const ctx = useContext(SelectionContext)
  if (!ctx) {
    throw new Error('useSelection must be used within a SelectionProvider')
  }
  return ctx
}


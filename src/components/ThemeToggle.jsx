import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'} ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon-wrap" aria-hidden="true">
        {isDark ? (
          <Sun size={18} className="theme-toggle__icon theme-toggle__icon--sun" />
        ) : (
          <Moon size={18} className="theme-toggle__icon theme-toggle__icon--moon" />
        )}
      </span>
      {showLabel && (
        <span className="theme-toggle__label">
          {isDark ? 'Mode clair' : 'Mode sombre'}
        </span>
      )}
    </button>
  )
}

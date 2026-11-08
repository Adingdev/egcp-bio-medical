import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, X, Trash2, MessageCircle, ArrowRight, Check } from 'lucide-react'
import { useSelection } from '../context/SelectionContext'
import { company, whatsappLink } from '../data/site'
import ProductImage from './ProductImage'

export default function SelectionDrawer() {
  const {
    isOpen,
    closeDrawer,
    toggleDrawer,
    count,
    selectedProducts,
    removeItem,
    clearSelection,
  } = useSelection()

  const [customerInfo, setCustomerInfo] = useState('')

  if (count === 0 && !isOpen) return null

  const generateWhatsAppMessage = () => {
    const list = selectedProducts.map((p, i) => `${i + 1}. *${p.name}*`).join('\n')
    const customer = customerInfo.trim() ? `\n👤 *Client :* ${customerInfo.trim()}\n` : ''

    const message = [
      `Bonjour ${company.name}, je souhaite avoir un devis et les disponibilités pour les produits suivants de ma sélection :`,
      customer,
      list,
      `\nPouvez-vous me confirmer les tarifs et les modalités de livraison ? Merci !`,
    ].join('\n')

    return whatsappLink(message)
  }

  return (
    <>
      {/* Bouton déclencheur flottant (en bas à gauche) */}
      <button
        type="button"
        className={`selection-float ${count > 0 ? 'is-active' : ''}`}
        onClick={toggleDrawer}
        aria-label={`Ma sélection (${count} produit${count > 1 ? 's' : ''})`}
        aria-expanded={isOpen}
      >
        <span className="selection-float__icon">
          <ShoppingBag size={22} aria-hidden="true" />
          {count > 0 && <span className="selection-float__badge">{count}</span>}
        </span>
        <span className="selection-float__label">
          Ma sélection <strong>({count})</strong>
        </span>
      </button>

      {/* Volet / Drawer latéral */}
      {isOpen && (
        <div className="selection-overlay" onClick={closeDrawer} aria-hidden="true">
          <div
            className="selection-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="selection-title"
          >
            <div className="selection-drawer__header">
              <div className="selection-drawer__title">
                <ShoppingBag size={22} className="text-green" aria-hidden="true" />
                <h2 id="selection-title">
                  Ma sélection <span>({count})</span>
                </h2>
              </div>
              <button
                type="button"
                className="selection-drawer__close"
                onClick={closeDrawer}
                aria-label="Fermer le panneau de sélection"
              >
                <X size={22} />
              </button>
            </div>

            {count === 0 ? (
              <div className="selection-drawer__empty">
                <div className="empty-icon">
                  <ShoppingBag size={48} strokeWidth={1.5} />
                </div>
                <h3>Votre sélection est vide</h3>
                <p>
                  Parcourez nos produits et cliquez sur le bouton « + Sélectionner » pour préparer votre devis ou commande groupée.
                </p>
                <Link to="/produits" className="btn btn--primary" onClick={closeDrawer}>
                  Explorer les produits <ArrowRight size={18} />
                </Link>
              </div>
            ) : (
              <>
                <div className="selection-drawer__body">
                  <div className="selection-drawer__subbar">
                    <span>{count} produit{count > 1 ? 's' : ''} sélectionné{count > 1 ? 's' : ''}</span>
                    <button
                      type="button"
                      className="selection-drawer__clear"
                      onClick={clearSelection}
                    >
                      <Trash2 size={14} aria-hidden="true" /> Tout vider
                    </button>
                  </div>

                  <ul className="selection-list">
                    {selectedProducts.map((p) => (
                      <li key={p.slug} className="selection-item">
                        <div className="selection-item__media">
                          <ProductImage product={p} />
                        </div>
                        <div className="selection-item__info">
                          <Link
                            to={`/produits/${p.slug}`}
                            onClick={closeDrawer}
                            className="selection-item__title"
                          >
                            {p.name}
                          </Link>
                          <span className="selection-item__cat">{p.short}</span>
                        </div>
                        <button
                          type="button"
                          className="selection-item__remove"
                          onClick={() => removeItem(p.slug)}
                          aria-label={`Retirer ${p.name}`}
                          title="Retirer de la sélection"
                        >
                          <Trash2 size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="selection-drawer__note-input">
                    <label htmlFor="selection-customer">
                      Votre nom ou ville de livraison <span className="optional">(optionnel)</span>
                    </label>
                    <input
                      id="selection-customer"
                      type="text"
                      placeholder="Ex : Aminata — Cocody Angré"
                      value={customerInfo}
                      onChange={(e) => setCustomerInfo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="selection-drawer__footer">
                  <a
                    className="btn btn--whatsapp btn--lg selection-drawer__submit"
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={20} aria-hidden="true" />
                    <span>Demander un devis sur WhatsApp</span>
                  </a>
                  <p className="selection-drawer__footnote">
                    Un message WhatsApp récapitulant vos {count} produit{count > 1 ? 's' : ''} sera automatiquement préparé.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}


import { useState, useRef, useEffect } from 'react'
import { getNode, getResponse } from './chatData'
import styles from './ChatModal.module.css'

const WELCOME_MESSAGE = '¡Hola! Soy el asistente virtual de la Residencia Vivencias. Estoy aquí para ayudarlo. ¿En qué puedo asistirlo?'
 + '\n\nEscribe:\n**1** Información sobre servicios\n'
 + '**2** Actividades y eventos\n'
 + '**3** Contacto con los responsables\n'
 + '**4** Información sobre medicación o insumos\n'
 + '**5** Otros'

function formatMessage(text) {
  if (!text) return ''
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    )
}

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [currentNodeId, setCurrentNodeId] = useState('root')
  const [isLoading, setIsLoading] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ type: 'bot', text: WELCOME_MESSAGE }])
      setCurrentNodeId('root')
    }
  }, [isOpen])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    const text = input.trim()
    if (!text || isLoading) return

    setMessages((prev) => [...prev, { type: 'user', text }])
    setInput('')
    setIsLoading(true)

    const response = getResponse(text, currentNodeId)
    const botMessage = response
      ? response.message
      : 'No reconozco esa opción. Por favor escribe el número de la opción que deseas.'

    if (response) {
      setCurrentNodeId(response.nextNodeId)
    }

    setMessages((prev) => [...prev, { type: 'loading' }])

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.type === 'loading' ? { type: 'bot', text: botMessage } : msg))
      )
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setMessages([])
    setCurrentNodeId('root')
    setInput('')
  }

  const WHATSAPP_NUMBER = '5491137735700'
  const WHATSAPP_MESSAGE = 'Hola, me gustaría hacer una consulta sobre la Residencia Vivencias.'

  return (
    <>
      <div className={styles.fabContainer}>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fabWhatsapp}
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.fabIcon}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <button
          type="button"
          className={styles.fab}
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.fabIcon}>
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"/>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={handleClose}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Chat"
          >
            <header className={styles.header}>
              <div className={styles.headerInfo}>
                <span className={styles.headerTitle}>Chat de ayuda</span>
                <span className={styles.headerStatus}>En línea</span>
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={handleClose}
                aria-label="Cerrar chat"
              >
                ×
              </button>
            </header>

            <ul className={styles.messageList} ref={listRef}>
              {messages.map((msg, i) => (
                <li
                  key={i}
                  className={msg.type === 'user' ? styles.messageUser : styles.messageBot}
                >
                  <span className={styles.bubble}>
                    {msg.type === 'user' && msg.text}
                    {msg.type === 'bot' && formatMessage(msg.text)}
                    {msg.type === 'loading' && (
                      <span className={styles.spinner} aria-hidden="true" />
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <input
                type="text"
                className={styles.input}
                placeholder="Escribe un número..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <button
                type="button"
                className={styles.sendBtn}
                onClick={handleSend}
                aria-label="Enviar"
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

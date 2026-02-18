import ChatModal from './ChatModal'
import imagen from './assets/imagen-perfil.png'

function App() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ color: '#fff', marginBottom: '0.5rem' }}>Chat Widget</h1>
      <p style={{ color: 'rgba(255,255,255,0.8)' }}>
        Hola Magui! Haz clic en el icono verde para abrir el chat.
      </p>
      <img src={imagen} alt="" style={{ maxWidth: '100%', display: 'block', marginBottom: '1rem' }} />
      <ChatModal />
    </div>
  )
}

export default App

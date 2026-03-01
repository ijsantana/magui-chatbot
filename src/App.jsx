import ChatModal from './ChatModal'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navegación */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#inicio" className="nav-logo">
            Vivencias
          </a>
          <ul className="nav-menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#instalaciones">Instalaciones</a></li>
            <li><a href="#nosotros">Quiénes Somos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bienvenidos a Vivencias</h1>
          <p>Residencia para adultos mayores en el centro de San Fernando</p>
          <p className="hero-subtitle">
            Instalaciones modernas y de alta calidad. Sin barreras arquitectónicas, 
            con baños adaptados, espacios amplios y climatizados.
          </p>
          <a href="#contacto" className="hero-btn">Contactanos</a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="services">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios y Actividades</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Atención Médica</h3>
              <p>Control médico periódico y seguimiento personalizado</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👩‍⚕️</div>
              <h3>Enfermería 24 Horas</h3>
              <p>Personal de enfermería disponible las 24 horas</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💪</div>
              <h3>Kinesiología</h3>
              <p>Sesiones de rehabilitación y mantenimiento físico</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚑</div>
              <h3>Emergencias 24 Horas</h3>
              <p>Servicio de emergencias disponible todo el día</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🥗</div>
              <h3>Nutricionista</h3>
              <p>Planes alimenticios personalizados</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🍽️</div>
              <h3>Servicio de Comida</h3>
              <p>Comidas balanceadas y adaptadas a cada necesidad</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👕</div>
              <h3>Lavandería</h3>
              <p>Servicio completo de lavado y planchado</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎂</div>
              <h3>Festejos y Eventos</h3>
              <p>Celebración de cumpleaños y festividades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades */}
      <section className="activities">
        <div className="container">
          <h2 className="section-title">Actividades Semanales</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">🎨</div>
              <h3>Arte y Manualidades</h3>
              <p>Lunes y Miércoles</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🧘</div>
              <h3>Yoga</h3>
              <p>Martes</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🏃</div>
              <h3>Gimnasia</h3>
              <p>Lunes a Sábado</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">💆</div>
              <h3>Estética</h3>
              <p>Servicio de cuidado personal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section id="instalaciones" className="facilities">
        <div className="container">
          <h2 className="section-title">Nuestras Instalaciones</h2>
          <div className="facilities-content">
            <div className="facility-text">
              <ul className="facility-list">
                <li>✓ Sin barreras arquitectónicas</li>
                <li>✓ Baños adaptados</li>
                <li>✓ Espacios amplios y climatizados</li>
                <li>✓ Sala de estar con TV</li>
                <li>✓ Áreas exteriores</li>
                <li>✓ Habitaciones individuales y compartidas</li>
                <li>✓ Timbre de emergencia en cada habitación</li>
                <li>✓ Mantenimiento continuo</li>
              </ul>
            </div>
            <div className="facility-image">
              <div className="image-placeholder">
                <span>Galería de Fotos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="about">
        <div className="container">
          <h2 className="section-title">Quiénes Somos</h2>
          <div className="about-content">
            <p>
              <strong>Vivencias</strong> es una residencia para adultos mayores ubicada en el centro de San Fernando, 
              dedicada a brindar cuidado integral y de calidad a nuestros residentes.
            </p>
            <p>
              Nuestro equipo de profesionales está comprometido con el bienestar físico, 
              emocional y social de cada persona que nos elige. Ofrecemos un ambiente cálido, 
              seguro y familiar donde los adultos mayores pueden disfrutar de su día a día 
              con la atención que merecen.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contact">
        <div className="container">
          <h2 className="section-title">¡Gracias por Confiar en Nosotros!</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p>+54 9 11 3773-5700</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>info@vivenciasresidencia.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Ubicación</strong>
                  <p>San Fernando, Buenos Aires</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <h3>Organizá una entrevista</h3>
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Teléfono" />
              <textarea placeholder="Mensaje" rows="4"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Vivencias</h3>
              <p>Residencia de Adultos Mayores</p>
              <p>San Fernando, Buenos Aires</p>
            </div>
            <div className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#instalaciones">Instalaciones</a>
              <a href="#contacto">Contacto</a>
            </div>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📷
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                📘
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Vivencias Residencia de Adultos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatModal />
    </div>
  )
}

export default App

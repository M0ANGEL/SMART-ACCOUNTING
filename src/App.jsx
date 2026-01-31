import React from 'react';
import './App.css';

function App() {
  const handleInscription = (e) => {
    e.preventDefault();
    // Redirigir al link de Wompi
    window.open('https://checkout.wompi.co/l/etHnm3', '_blank');
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <i className="fas fa-chart-line text-primary text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-800">SMART ACCOUNTING</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#beneficios" className="text-gray-700 hover:text-primary">Beneficios</a>
              <a href="#pago" className="text-gray-700 hover:text-primary">Inscripción</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <span className="bg-[#00AEEF] px-4 py-1 rounded-full text-sm mb-4 inline-block">PRE-LANZAMIENTO</span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Masterclass en vivo:<br />
                <span className="text-primary">Auditoría Analítica y Power BI</span>
              </h1>
              <p className="text-lg mb-6 text-gray-300">Domina las herramientas más demandadas del mercado</p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-calendar-check text-primary mr-2"></i>
                  <span>Inicio: <strong>7 Febrero</strong></span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-primary mr-2"></i>
                  <span>Duración: <strong>8 horas</strong></span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users text-primary mr-2"></i>
                  <span>Cupos: <strong>Limitados</strong></span>
                </div>
              </div>
              
              <button
                onClick={handleInscription}
                className="btn-pago text-white font-bold py-4 px-8 rounded-lg inline-block hover:shadow-lg transition-all"
              >
                <i className="fas fa-lock mr-2"></i> Reservar ahora
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">¡ÚLTIMOS CUPOS!</h3>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Cupos disponibles:</span>
                    <span className="font-bold">15/15</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$150.000 COP</div>
                  <div className="text-sm text-gray-300 mb-4">Precio especial de lanzamiento</div>
                  <div className="flex items-center justify-center text-sm">
                    <i className="fas fa-shield-alt text-green-400 mr-2"></i>
                    <span>Pago 100% seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Inscripción Directa */}
      <section id="pago" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Inscripción <span className="text-primary">Directa</span></h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Información del Curso */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Información del curso</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <i className="fas fa-calendar-alt text-primary mt-1 mr-3"></i>
                    <div>
                      <span className="font-medium">Fecha de inicio:</span>
                      <p className="text-gray-600">7 de Febrero 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-video text-primary mt-1 mr-3"></i>
                    <div>
                      <span className="font-medium">Modalidad:</span>
                      <p className="text-gray-600">100% Online en vivo</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">¿Qué incluye?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>8 horas de clase en vivo</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Acceso a grupo whatsapp</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Material descargable</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Resumen y Botón de Pago */}
              <div className="bg-primary text-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Reserva tu cupo</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/20">
                    <div>
                      <span className="font-medium">Masterclass Auditoría Analítica</span>
                      <p className="text-sm text-gray-300">Acceso completo + materiales</p>
                    </div>
                    <span className="font-bold text-lg">$150.000 COP</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sesiones en vivo</span>
                      <span className="text-green-300 font-medium">INCLUIDO</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Grabaciones</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Materiales</span>
                      <span className="text-green-300 font-medium">DESCARGABLE</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold">TOTAL A PAGAR</div>
                      <div className="text-sm text-gray-300">IVA incluido</div>
                    </div>
                    <div className="text-2xl font-bold">$150.000 COP</div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-shield-alt text-blue-300 mt-1 mr-3"></i>
                    <span className="text-sm">Pago seguro mediante Wompi</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-credit-card text-blue-300 mt-1 mr-3"></i>
                    <span className="text-sm">Aceptamos todas las tarjetas y PSE</span>
                  </div>
                </div>
                
                <button
                  onClick={handleInscription}
                  className="btn-pago w-full text-white font-bold py-4 rounded-lg text-lg hover:shadow-lg transition-all"
                >
                  <i className="fas fa-lock mr-2"></i> Proceder al pago seguro
                </button>
                
                <div className="mt-4 text-center text-sm text-gray-300">
                  <i className="fas fa-info-circle text-blue-300 mr-1"></i>
                  Serás redirigido a Wompi para completar el pago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-chart-line text-primary text-2xl mr-2"></i>
            <span className="text-xl font-bold">SMART ACCOUNTING</span>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Masterclass Auditoría Analítica</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
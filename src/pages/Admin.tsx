// src/components/Admin/Admin.jsx
import React, { useState } from 'react';
import '../components/ui/css/admin.css'
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

const Admin = () => {
  const [seccionActiva, setSeccionActiva] = useState('pedidos');
  
  // Datos de pedidos (existente)
  const [pedidos, setPedidos] = useState([
    { id: 1, numero: '001', cliente: 'Juan Pérez', producto: 'Blusa Roja', estado: 'pendiente', fecha: '2024-01-15' },
    { id: 2, numero: '002', cliente: 'María García', producto: 'Vestido Azul', estado: 'pendiente', fecha: '2024-01-15' },
    { id: 3, numero: '003', cliente: 'Carlos López', producto: 'Pantalon Negro', estado: 'pendiente', fecha: '2024-01-14' },
    { id: 4, numero: '004', cliente: 'Ana Martínez', producto: 'Playera Verde', estado: 'pendiente', fecha: '2024-01-14' }
  ]);

  // Nuevos datos para las secciones
  const [solicitudesVendedores, setSolicitudesVendedores] = useState([
    { id: 1, nombre: 'Laura Rodríguez', email: 'laura@email.com', telefono: '+1234567890', fecha: '2024-01-15', estado: 'pendiente' },
    { id: 2, nombre: 'Roberto Sánchez', email: 'roberto@email.com', telefono: '+1234567891', fecha: '2024-01-14', estado: 'pendiente' }
  ]);

  const [solicitudesPublicaciones, setSolicitudesPublicaciones] = useState([
    { id: 1, producto: 'Abrigo de Invierno', vendedor: 'Carlos López', precio: '$450', categoria: 'Abrigos', fecha: '2024-01-15', estado: 'pendiente' },
    { id: 2, producto: 'Zapatos Deportivos', vendedor: 'Ana Martínez', precio: '$380', categoria: 'Calzado', fecha: '2024-01-14', estado: 'pendiente' }
  ]);

  const [solicitudesDonaciones, setSolicitudesDonaciones] = useState([
    { id: 1, organizacion: 'Fundación Esperanza', producto: 'Ropa de niños', cantidad: '50 piezas', fecha: '2024-01-15', estado: 'pendiente' },
    { id: 2, organizacion: 'Casa Hogar Alegría', producto: 'Abrigos usados', cantidad: '30 piezas', fecha: '2024-01-14', estado: 'pendiente' }
  ]);

  // Funciones para pedidos (existentes)
  const eliminarPedido = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este pedido?')) {
      setPedidos(pedidos.filter(pedido => pedido.id !== id));
    }
  };

  const aceptarPedido = (id) => {
    setPedidos(pedidos.map(pedido => 
      pedido.id === id ? { ...pedido, estado: 'aceptado' } : pedido
    ));
  };

  // Nuevas funciones para las secciones
  const aceptarSolicitudVendedor = (id) => {
    setSolicitudesVendedores(solicitudesVendedores.map(solicitud => 
      solicitud.id === id ? { ...solicitud, estado: 'aceptado' } : solicitud
    ));
  };

  const rechazarSolicitudVendedor = (id) => {
    if (window.confirm('¿Estás seguro de que quieres rechazar esta solicitud?')) {
      setSolicitudesVendedores(solicitudesVendedores.filter(solicitud => solicitud.id !== id));
    }
  };

  const aceptarSolicitudPublicacion = (id) => {
    setSolicitudesPublicaciones(solicitudesPublicaciones.map(solicitud => 
      solicitud.id === id ? { ...solicitud, estado: 'aceptado' } : solicitud
    ));
  };

  const rechazarSolicitudPublicacion = (id) => {
    if (window.confirm('¿Estás seguro de que quieres rechazar esta publicación?')) {
      setSolicitudesPublicaciones(solicitudesPublicaciones.filter(solicitud => solicitud.id !== id));
    }
  };

  const aceptarSolicitudDonacion = (id) => {
    setSolicitudesDonaciones(solicitudesDonaciones.map(solicitud => 
      solicitud.id === id ? { ...solicitud, estado: 'aceptado' } : solicitud
    ));
  };

  const rechazarSolicitudDonacion = (id) => {
    if (window.confirm('¿Estás seguro de que quieres rechazar esta solicitud de donación?')) {
      setSolicitudesDonaciones(solicitudesDonaciones.filter(solicitud => solicitud.id !== id));
    }
  };

  // Funciones auxiliares
  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'pendiente': return 'estado-pendiente';
      case 'aceptado': return 'estado-aceptado';
      default: return 'estado-pendiente';
    }
  };

  const getEstadoTexto = (estado) => {
    switch(estado) {
      case 'pendiente': return 'Pendiente';
      case 'aceptado': return 'Aceptado';
      default: return 'Pendiente';
    }
  };

  // Estadísticas
  const pedidosPendientes = pedidos.filter(p => p.estado === 'pendiente').length;
  const pedidosAceptados = pedidos.filter(p => p.estado === 'aceptado').length;
  const vendedoresPendientes = solicitudesVendedores.filter(v => v.estado === 'pendiente').length;
  const publicacionesPendientes = solicitudesPublicaciones.filter(p => p.estado === 'pendiente').length;
  const donacionesPendientes = solicitudesDonaciones.filter(d => d.estado === 'pendiente').length;

  // Renderizado condicional de secciones
  const renderSeccion = () => {
    switch(seccionActiva) {
      case 'vendedores':
        return renderSolicitudesVendedores();
      case 'publicaciones':
        return renderSolicitudesPublicaciones();
      case 'donaciones':
        return renderSolicitudesDonaciones();
      default:
        return renderPedidos();
    }
  };

  const renderPedidos = () => (
    <div className="pedidos-section">
      <div className="section-header">
        <h2>Gestión de Pedidos</h2>
        <div className="filtros">
          <button className="filtro-btn active">Todos</button>
          <button className="filtro-btn">Pendientes</button>
          <button className="filtro-btn">Aceptados</button>
        </div>
      </div>
      
      {pedidos.length === 0 ? (
        <div className="sin-pedidos">
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>No hay pedidos pendientes</h3>
            <p>Todos los pedidos han sido procesados</p>
          </div>
        </div>
      ) : (
        <div className="pedidos-grid">
          {pedidos.map(pedido => (
            <div key={pedido.id} className={`pedido-card ${pedido.estado === 'aceptado' ? 'aceptado' : ''}`}>
              <div className="pedido-header">
                <div className="pedido-info-principal">
                  <h3>Pedido #{pedido.numero}</h3>
                  <span className="pedido-fecha">{pedido.fecha}</span>
                </div>
                <span className={`estado-badge ${getEstadoColor(pedido.estado)}`}>
                  {getEstadoTexto(pedido.estado)}
                </span>
              </div>
              
              <div className="pedido-content">
                <div className="cliente-info">
                  <div className="info-item">
                    <span className="info-label">Cliente:</span>
                    <span className="info-value">{pedido.cliente}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Producto:</span>
                    <span className="info-value producto">{pedido.producto}</span>
                  </div>
                </div>
                
                <div className="pedido-acciones">
                  <button 
                    className="btn btn-eliminar"
                    onClick={() => eliminarPedido(pedido.id)}
                    disabled={pedido.estado === 'aceptado'}
                  >
                    <span className="btn-icon">🗑️</span>
                    <span className="btn-text">Eliminar</span>
                  </button>
                  
                  <button 
                    className="btn btn-aceptar"
                    onClick={() => aceptarPedido(pedido.id)}
                    disabled={pedido.estado === 'aceptado'}
                  >
                    <span className="btn-icon">
                      {pedido.estado === 'aceptado' ? '✅' : '✓'}
                    </span>
                    <span className="btn-text">
                      {pedido.estado === 'aceptado' ? 'Aceptado' : 'Aceptar'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSolicitudesVendedores = () => (
    <div className="solicitudes-section">
      <div className="section-header">
        <h2>Solicitudes de Vendedores</h2>
        <div className="filtros">
          <button className="filtro-btn active">Todos</button>
          <button className="filtro-btn">Pendientes</button>
          <button className="filtro-btn">Aceptados</button>
        </div>
      </div>
      
      {solicitudesVendedores.length === 0 ? (
        <div className="sin-pedidos">
          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <h3>No hay solicitudes pendientes</h3>
            <p>Todas las solicitudes han sido procesadas</p>
          </div>
        </div>
      ) : (
        <div className="solicitudes-grid">
          {solicitudesVendedores.map(solicitud => (
            <div key={solicitud.id} className={`solicitud-card ${solicitud.estado === 'aceptado' ? 'aceptado' : ''}`}>
              <div className="solicitud-header">
                <div className="solicitud-info-principal">
                  <h3>{solicitud.nombre}</h3>
                  <span className="solicitud-fecha">{solicitud.fecha}</span>
                </div>
                <span className={`estado-badge ${getEstadoColor(solicitud.estado)}`}>
                  {getEstadoTexto(solicitud.estado)}
                </span>
              </div>
              
              <div className="solicitud-content">
                <div className="solicitud-info">
                  <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value">{solicitud.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Teléfono:</span>
                    <span className="info-value">{solicitud.telefono}</span>
                  </div>
                </div>
                
                <div className="solicitud-acciones">
                  <button 
                    className="btn btn-eliminar"
                    onClick={() => rechazarSolicitudVendedor(solicitud.id)}
                    disabled={solicitud.estado === 'aceptado'}
                  >
                    <span className="btn-icon">✕</span>
                    <span className="btn-text">Rechazar</span>
                  </button>
                  
                  <button 
                    className="btn btn-aceptar"
                    onClick={() => aceptarSolicitudVendedor(solicitud.id)}
                    disabled={solicitud.estado === 'aceptado'}
                  >
                    <span className="btn-icon">
                      {solicitud.estado === 'aceptado' ? '✅' : '✓'}
                    </span>
                    <span className="btn-text">
                      {solicitud.estado === 'aceptado' ? 'Aceptado' : 'Aceptar'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSolicitudesPublicaciones = () => (
    <div className="solicitudes-section">
      <div className="section-header">
        <h2>Solicitudes de Publicación</h2>
        <div className="filtros">
          <button className="filtro-btn active">Todos</button>
          <button className="filtro-btn">Pendientes</button>
          <button className="filtro-btn">Aceptados</button>
        </div>
      </div>
      
      {solicitudesPublicaciones.length === 0 ? (
        <div className="sin-pedidos">
          <div className="empty-state">
            <div className="empty-icon">📢</div>
            <h3>No hay publicaciones pendientes</h3>
            <p>Todas las publicaciones han sido revisadas</p>
          </div>
        </div>
      ) : (
        <div className="solicitudes-grid">
          {solicitudesPublicaciones.map(solicitud => (
            <div key={solicitud.id} className={`solicitud-card ${solicitud.estado === 'aceptado' ? 'aceptado' : ''}`}>
              <div className="solicitud-header">
                <div className="solicitud-info-principal">
                  <h3>{solicitud.producto}</h3>
                  <span className="solicitud-fecha">{solicitud.fecha}</span>
                </div>
                <span className={`estado-badge ${getEstadoColor(solicitud.estado)}`}>
                  {getEstadoTexto(solicitud.estado)}
                </span>
              </div>
              
              <div className="solicitud-content">
                <div className="solicitud-info">
                  <div className="info-item">
                    <span className="info-label">Vendedor:</span>
                    <span className="info-value">{solicitud.vendedor}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Precio:</span>
                    <span className="info-value precio">{solicitud.precio}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Categoría:</span>
                    <span className="info-value categoria">{solicitud.categoria}</span>
                  </div>
                </div>
                
                <div className="solicitud-acciones">
                  <button 
                    className="btn btn-eliminar"
                    onClick={() => rechazarSolicitudPublicacion(solicitud.id)}
                    disabled={solicitud.estado === 'aceptado'}
                  >
                    <span className="btn-icon">✕</span>
                    <span className="btn-text">Rechazar</span>
                  </button>
                  
                  <button 
                    className="btn btn-aceptar"
                    onClick={() => aceptarSolicitudPublicacion(solicitud.id)}
                    disabled={solicitud.estado === 'aceptado'}
                  >
                    <span className="btn-icon">
                      {solicitud.estado === 'aceptado' ? '✅' : '✓'}
                    </span>
                    <span className="btn-text">
                      {solicitud.estado === 'aceptado' ? 'Aceptado' : 'Aceptar'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSolicitudesDonaciones = () => (
    <div className="solicitudes-section">
      <div className="section-header">
        <h2>Solicitudes de Donación</h2>
        <div className="filtros">
          <button className="filtro-btn active">Todos</button>
          <button className="filtro-btn">Pendientes</button>
          <button className="filtro-btn">Aceptados</button>
        </div>
      </div>
      
      {solicitudesDonaciones.length === 0 ? (
        <div className="sin-pedidos">
          <div className="empty-state">
            <div className="empty-icon">❤️</div>
            <h3>No hay solicitudes de donación</h3>
            <p>Todas las donaciones han sido procesadas</p>
          </div>
        </div>
      ) : (
        <div className="solicitudes-grid">
          {solicitudesDonaciones.map(solicitud => (
            <div key={solicitud.id} className={`solicitud-card ${solicitud.estado === 'aceptado' ? 'aceptado' : ''}`}>
              <div className="solicitud-header">
                <div className="solicitud-info-principal">
                  <h3>{solicitud.organizacion}</h3>
                  <span className="solicitud-fecha">{solicitud.fecha}</span>
                </div>
                <span className={`estado-badge ${getEstadoColor(solicitud.estado)}`}>
                  {getEstadoTexto(solicitud.estado)}
                </span>
              </div>
              
              <div className="solicitud-content">
                <div className="solicitud-info">
                  <div className="info-item">
                    <span className="info-label">Producto:</span>
                    <span className="info-value">{solicitud.producto}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Cantidad:</span>
                    <span className="info-value cantidad">{solicitud.cantidad}</span>
                  </div>
                </div>
                
                <div className="solicitud-acciones">
                  <button 
                    className="btn btn-eliminar"
                    onClick={() => rechazarSolicitudDonacion(solicitud.id)}
                    disabled={solicitud.estado === 'aceptado'}
                  >
                    <span className="btn-icon">✕</span>
                    <span className="btn-text">Rechazar</span>
                  </button>
                  
                  <button 
                    className="btn btn-aceptar"
                    onClick={() => aceptarSolicitudDonacion(solicitud.id)}
                    disabled={solicitud.estado === 'aceptado'}
                  >
                    <span className="btn-icon">
                      {solicitud.estado === 'aceptado' ? '✅' : '✓'}
                    </span>
                    <span className="btn-text">
                      {solicitud.estado === 'aceptado' ? 'Aceptado' : 'Aceptar'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="admin-page">
      <Header />
      
      <div className="admin-container">
        {/* SubHeader*/}
        <div className="admin-header">
          <div className="header-content">
            <h1>Panel de Administración</h1>
            <p>Gestiona todos los aspectos de tu tienda de ropa</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{pedidos.length}</span>
                <span className="stat-label">Total Pedidos</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">{pedidosPendientes}</span>
                <span className="stat-label">Por Atender</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menú de Navegación */}
        <div className="admin-navigation">
          <button 
            className={`nav-btn ${seccionActiva === 'pedidos' ? 'active' : ''}`}
            onClick={() => setSeccionActiva('pedidos')}
          >
            <span className="nav-icon">📦</span>
            <span className="nav-text">Pedidos</span>
            {pedidosPendientes > 0 && <span className="nav-badge">{pedidosPendientes}</span>}
          </button>
          
          <button 
            className={`nav-btn ${seccionActiva === 'vendedores' ? 'active' : ''}`}
            onClick={() => setSeccionActiva('vendedores')}
          >
            <span className="nav-icon">👥</span>
            <span className="nav-text">Solicitudes Vendedores</span>
            {vendedoresPendientes > 0 && <span className="nav-badge">{vendedoresPendientes}</span>}
          </button>
          
          <button 
            className={`nav-btn ${seccionActiva === 'publicaciones' ? 'active' : ''}`}
            onClick={() => setSeccionActiva('publicaciones')}
          >
            <span className="nav-icon">📢</span>
            <span className="nav-text">Publicaciones</span>
            {publicacionesPendientes > 0 && <span className="nav-badge">{publicacionesPendientes}</span>}
          </button>
          
          <button 
            className={`nav-btn ${seccionActiva === 'donaciones' ? 'active' : ''}`}
            onClick={() => setSeccionActiva('donaciones')}
          >
            <span className="nav-icon">❤️</span>
            <span className="nav-text">Donaciones</span>
            {donacionesPendientes > 0 && <span className="nav-badge">{donacionesPendientes}</span>}
          </button>
        </div>


        <div className="estadisticas-grid">
          <div className="estadistica-card total">
            <div className="estadistica-icon">📦</div>
            <div className="estadistica-content">
              <h3>Total Pedidos</h3>
              <span className="numero">{pedidos.length}</span>
            </div>
          </div>
          
          <div className="estadistica-card pendientes">
            <div className="estadistica-icon">⏳</div>
            <div className="estadistica-content">
              <h3>Pendientes</h3>
              <span className="numero">{pedidosPendientes}</span>
            </div>
          </div>
          
          <div className="estadistica-card aceptados">
            <div className="estadistica-icon">✅</div>
            <div className="estadistica-content">
              <h3>Aceptados</h3>
              <span className="numero">{pedidosAceptados}</span>
            </div>
          </div>
        </div>

        {/* Sección Dinámica */}
        {renderSeccion()}
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
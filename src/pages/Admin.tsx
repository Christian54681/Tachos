// src/components/Admin/Admin.jsx
import React, { useState } from 'react';
import './Admin.css'; // Ruta corregida
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

const Admin = () => {
  const [pedidos, setPedidos] = useState([
    { id: 1, numero: '001', cliente: 'Juan Pérez', producto: 'Blusa Roja', estado: 'pendiente', fecha: '2024-01-15' },
    { id: 2, numero: '002', cliente: 'María García', producto: 'Vestido Azul', estado: 'pendiente', fecha: '2024-01-15' },
    { id: 3, numero: '003', cliente: 'Carlos López', producto: 'Pantalon Negro', estado: 'pendiente', fecha: '2024-01-14' },
    { id: 4, numero: '004', cliente: 'Ana Martínez', producto: 'Playera Verde', estado: 'pendiente', fecha: '2024-01-14' }
  ]);

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

  const pedidosPendientes = pedidos.filter(p => p.estado === 'pendiente').length;
  const pedidosAceptados = pedidos.filter(p => p.estado === 'aceptado').length;

  return (
    <div className="admin-page"> {/* Clase actualizada */}
      <Header />
      
      <div className="admin-container">
        {/* Header Mejorado */}
        <div className="admin-header">
          <div className="header-content">
            <h1>Panel de Administración</h1>
            <p>Gestiona los pedidos de tu tienda de ropa</p>
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

        {/* Estadísticas Mejoradas */}
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

        {/* Sección de Pedidos */}
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
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
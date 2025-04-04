import React, { useState } from 'react'
import './Servico.css'

const Servico = () => {
  const [status, setStatus] = useState('aberto')

  const getStatusStyle = () => {
    switch (status) {
      case 'aberto':
        return { backgroundColor: 'green', color: 'white' }
      case 'em_andamento':
        return { backgroundColor: 'orange', color: 'white' }
      case 'fechado':
        return { backgroundColor: 'red', color: 'white' }
      default:
        return {}
    }
  }

  return (
    <div className="servico-container">
      <h1>Sistema de Ordem de Serviço</h1>

      <div className="status-display" style={getStatusStyle()}>
        Status: {status.replace('_', ' ')}
      </div>

      <div className="button-group">
        <button 
          onClick={() => setStatus('aberto')}
          className={status === 'aberto' ? 'active' : ''}
        >
          Abrir
        </button>
        <button 
          onClick={() => setStatus('em_andamento')}
          className={status === 'em_andamento' ? 'active' : ''}
        >
          Em Andamento
        </button>
        <button 
          onClick={() => setStatus('fechado')}
          className={status === 'fechado' ? 'active' : ''}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

export default Servico


// do professor
// import { useState } from 'react';
// import './StatusServico.css';
 
// export default function StatusServico(props) {
//   const [status, setStatus] = useState(props.status);
 
//   return (
//     <div>
//       <div className={`status ${status}`}>Status: {status}</div>
//       <button onClick={() => setStatus('aberto')}>Abrir</button>
//       <button onClick={() => setStatus('em-andamento')}>Em Andamento</button>
//       <button onClick={() => setStatus('fechado')}>Fechar</button>
//     </div>
//   );
// }
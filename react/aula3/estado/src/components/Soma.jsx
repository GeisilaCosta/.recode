import React, { useState } from 'react';

const Soma = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSoma = () => {
    const valor1 = num1 === '' ? 0 : Number(num1);
    const valor2 = num2 === '' ? 0 : Number(num2);
    setResultado(valor1 + valor2);
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setResultado(null);
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <h1 style={{ textAlign: 'center' }}>Calculadora de Soma</h1>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Primeiro número"
          style={{ padding: '8px' }}
        />
        
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Segundo número"
          style={{ padding: '8px' }}
        />
      </div>
      
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center'
      }}>
        <button 
          onClick={handleSoma}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            flex: 1
          }}
        >
          Calcular Soma
        </button>
        
        <button 
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            flex: 1
          }}
        >
          Zerar Tudo
        </button>
      </div>
      
      {resultado !== null && (
        <h2 style={{ 
          textAlign: 'center',
          marginTop: '20px',
          padding: '10px',
          border: '1px solid #ccc',
          backgroundColor: '#4f04fd',
          borderRadius: '4px'
        }}>
          Resultado: {resultado}
        </h2>
      )}
    </div>
  );
};

export default Soma;
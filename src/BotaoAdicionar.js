import React, { useState } from 'react';

function BotaoAdicionar({ onAdd }) {
  const [input, setInput] = useState('');

  const handleClick = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
        placeholder="Adicione um item"
      />
      <button onClick={handleClick} style={styles.button}>Adicionar</button>
    </div>
  );
}

const styles = {
  input: {
    padding: '10px',
    fontSize: '16px',
    width: 'calc(100% - 24px)',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default BotaoAdicionar;

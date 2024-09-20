import React, { useState } from 'react';
import ListaDeCompras from './ListaDeCompras';
import BotaoAdicionar from './BotaoAdicionar';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (item.trim() !== '') {
      setItems([...items, item]);
    }
  };

  const removeItem = (index) => {
    const newItems = [items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Compras</h1>
      <BotaoAdicionar onAdd={addItem} />
      <ListaDeCompras items={items} onRemove={removeItem} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
};

export default App;

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ListaDeCompras from './ListaDeCompras';
import BotaoAdicionar from './BotaoAdicionar';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = Cookies.get('listaDeCompras');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const addItem = (item) => {
    if (item.trim() !== '') {
      const newItems = [...items, item];
      setItems(newItems);
      Cookies.set('listaDeCompras', JSON.stringify(newItems), { expires: 7 });
    }
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    Cookies.set('listaDeCompras', JSON.stringify(newItems));
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

import React from 'react';

function ListaDeCompras({ items, onRemove }) {
  return (
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={index} style={styles.listItem}>
          {item}
          <button onClick={() => onRemove(index)} style={styles.removeButton}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd',
  },
  removeButton: {
    padding: '5px 10px',
    fontSize: '12px',
    cursor: 'pointer',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
  },
};

export default ListaDeCompras;

import React from 'react';

const Table = ({ item }) => {
    return (
      <tr key={item.id} className="table">
        <td>{item.song}</td>
        <td>{item.artist}</td>
        <td>{item.genre}</td>
        <td>{item.rating}</td></tr>
    );
  };

export default Table
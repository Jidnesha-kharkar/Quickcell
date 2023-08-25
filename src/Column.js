import React from 'react';
import CardList from './CardList';

function Column({ title, tickets }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {/* Render cards */}
      {tickets.map(ticket => (
        <CardList key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
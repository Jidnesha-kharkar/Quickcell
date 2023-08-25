import React from 'react';

function Board({ tickets }) {
  return (
    <div className="board">
      <div className="column">
        <h2>To Do</h2>
        {tickets.map((tickets, index) => (
          <div key={index} className="tickets">
            {tickets.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;

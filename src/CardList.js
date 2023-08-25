import React, { useState, useEffect } from 'react';

function CardList() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [filterStatus, setFilterStatus] = useState(''); // Change this based on your condition

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        if (data.tickets && Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        } else {
          console.error('API response does not contain valid ticket data.');
        }
      })
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);

  useEffect(() => {
    if (filterStatus) {
      const filteredData = tickets.filter(tickets => tickets.status === filterStatus);
      setFilteredTickets(filteredData);
    } else {
      setFilteredTickets(tickets);
    }
  }, [filterStatus, tickets]);

  return (
    <div className="card-list">
      <div className="filter">
        <label>Filter by Status:</label>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="Todo">TODO</option>
          <option value="In progress">In Progress</option>
          <option value="Backlog">Backlog</option>
        </select>
      </div>
      {filteredTickets.map((tickets, index) => (
        <div key={index} className="ticket">
        <table>
          <trow>
          <h2>{tickets.title}</h2>
          <p>Id: {tickets.id}</p>
          <p>Title: {tickets.title}</p>
          <p>Tag: {tickets.tag}</p>
          <p>User Id: {tickets.userId}</p>
          <p>Status: {tickets.status}</p>
          <p>Priority: {tickets.priority}</p>
          </trow>
        </table>  
        </div>
      ))}
    </div>
  );
}

export default CardList;

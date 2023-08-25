// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Dropdown from './Dropdown';

// import CardList from './CardList';



// function App() {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [tickets, setCards] = useState([]);

//   useEffect(() => {
//     // Fetch cards from API based on selectedCategory
//     if (selectedCategory) {
//       fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
//         .then(response => response.json())
//         .then(data => setCards(data))
//         .catch(error => console.error('Error fetching cards:', error));
//     }
//   }, [selectedCategory]);
  
  
//   return (
//     <div className="app">
//       <h1>Kanban Board App</h1>
//       <Dropdown setSelectedCategory={setSelectedCategory} />
//       {/* <Board /> */}
//       <CardList />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import CardList from './CardList';
// import Board from './Board';

function App() {
  return (
    <div className="app">
      <h1>Kanban Board App</h1>
      <Dropdown />
      <CardList />
      {/* <Board /> */}
    </div>
  );
}

export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';

// Define a functional component
const Navbar = () => {
  return (
    <nav>
      <h1>Rhymes Coding</h1>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </nav>
  );
};

// Select the element where the React application will attach
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the Navbar component
root.render(<Navbar />);

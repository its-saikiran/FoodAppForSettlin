import React from 'react'
import './App.css';
import Login from './log';
import NavBar from './NavBar';
import Register from './reg';
// import Register from './Register';

function App() { 

  const [display, setDisplay] = React.useState(true);

  return (
    <div className="App">
      {/* <Register /> */}

      <NavBar />

      {
        display? <Login /> : <Register />
      }
      
      
    </div>
  );
}

export default App;

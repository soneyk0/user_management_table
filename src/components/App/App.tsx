import React from 'react';
import './App.css';
import UsersList from "../Users/UsersList/UsersList";


function App() {
    return (
        <div className="App">
            <h1>User Management Table</h1>
            <div><UsersList/></div>
        </div>
    );
}

export default App;

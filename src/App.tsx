import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CitiesTable from './components/CitiesTable';
import DisplayWeather from './components/DisplayWeather';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <main>
          <Route path="/" element={<CitiesTable />} />
          <Route path="/weather/:cityName" Component={DisplayWeather} />
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
};

export default App;
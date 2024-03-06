import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchRockets } from './services/spaceXService';
import RocketWidget from './components/RocketWidget';

const App: React.FC = () => {
  const [rockets, setRockets] = useState<any[]>([]);

  useEffect(() => {
    const getRockets = async () => {
      const data = await fetchRockets();
      setRockets(data);
    };

    getRockets();
  }, []);

  return (
    <div className="app">
      <h1>SpaceX Rockets</h1>
      <div className="rocket-list">
        {rockets.map((rocket) => (
          <RocketWidget key={rocket.rocket_id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default App;

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
    <div className="App w-full flex flex-col justify-center items-center bg-neutral-200">
      <header className="w-full bg-stone-950 flex justify-center items-center shadow-md">
        <h1 className='text-3xl font-bold py-3 text-white'>SpaceXplore</h1>
      </header>
      <div className='p-10'>
      <div className="rocket-list flex flex-col gap-10">
        {rockets.map((rocket) => (
          <RocketWidget key={rocket.id} rocket={rocket} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default App;

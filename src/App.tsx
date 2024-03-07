import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchRockets } from './services/spaceXService';
import RocketWidget from './components/RocketWidget';

import { fetchLaunches } from './services/spaceXService';
import LaunchWidget from './components/LaunchWidget';

const App: React.FC = () => {
  const [rockets, setRockets] = useState<any[]>([]);
  const [launches, setLaunches] = useState<any[]>([]);
  const [displayRockets, setDisplayRockets] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const rocketData = await fetchRockets();
      setRockets(rocketData);
      const launchData = await fetchLaunches();
      setLaunches(launchData);
    };

    fetchData();
  }, []);

  const toggleDisplay = () => {
    setDisplayRockets(!displayRockets);
  };

  return (
    <div className="App w-full h-screen">
      <header className="w-full bg-stone-950 flex justify-center items-center shadow-md">
        <h1 className='text-3xl font-bold py-3 text-white'>SpaceXplore</h1>
      </header>
      <div className='p-10 max-w-[1440px] w-full mx-auto'>
        <div className='flex justify-center items-center mb-10'>
        <button className="px-4 py-2 font-semibold text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-sm" onClick={toggleDisplay}>SEE THE {displayRockets ? 'LAUNCHES' : 'ROCKETS'}</button>
        </div>
        <div className="rocket-list flex flex-col lg:grid lg:grid-cols-2 gap-10">
          {displayRockets ? (
            rockets.map((rocket) => (
              <RocketWidget key={rocket.id} rocket={rocket} />
            ))
          ) : (
            launches.map((launch) => (
              <LaunchWidget key={launch.id} launch={launch} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

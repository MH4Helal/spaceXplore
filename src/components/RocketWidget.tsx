import React, { useState } from 'react';

interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
}

interface RocketWidgetProps {
  rocket: Rocket;
}

const RocketWidget: React.FC<RocketWidgetProps> = ({ rocket }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  
  const descriptionClass = showFullDescription ? 'expanded' : 'collapsed';
  const readMoreText = showFullDescription ? 'Read Less' : 'Read More';

  return (
    <div className="rocket-widget flex flex-col sm:flex-row w-full justify-center items-center bg-white p-4 rounded-lg gap-4 shadow-lg">
      <img className="w-full sm:w-[170px] lg:w-[312px] h-auto sm:h-[150px] lg:h-[200px] rounded-md" src={rocket.flickr_images[0]} alt={rocket.name} />
      
      <div className='flex flex-col sm:max-w-[300px] w-full'>
        <h2 className='text-xl font-bold'>{rocket.name}</h2>
        <p className={`description ${descriptionClass}`} >{rocket.description}</p>
        <button className="text-blue-500" onClick={toggleDescription}>{readMoreText}</button>
      </div>
    </div>
  );
};

export default RocketWidget;

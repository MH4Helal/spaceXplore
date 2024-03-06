import React from 'react';

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  description: string;
  flickr_images: string[];
}

interface RocketWidgetProps {
  rocket: Rocket;
}

const RocketWidget: React.FC<RocketWidgetProps> = ({ rocket }) => {
  return (
    <div className="rocket-widget">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
    </div>
  );
};

export default RocketWidget;

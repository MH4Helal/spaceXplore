import React, { useState, useEffect } from 'react';
import { fetchRocketById } from '../services/spaceXService';

interface Launch {
    id: string;
    name: string;
    details: string;
    rocket: string;
    success: boolean;
}

interface LaunchWidgetProps {
    launch: Launch;
}

const LaunchWidget: React.FC<LaunchWidgetProps> = ({ launch }) => {
    const [rocketImage, setRocketImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchRocketImage = async () => {
            const rocketData = await fetchRocketById(launch.rocket);
            if (rocketData && rocketData.flickr_images && rocketData.flickr_images.length > 0) {
                setRocketImage(rocketData.flickr_images[0]);
            } else {
                // Set the default image from the img folder if rocket image retrieval fails
                setRocketImage('/img/kennedy.jpg');
            }
        };

        fetchRocketImage();
    }, [launch.rocket]);

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
      setShowFullDescription(!showFullDescription);
    };
    
    const descriptionClass = showFullDescription ? 'expanded' : 'collapsed';
    const readMoreText = showFullDescription ? 'Read Less' : 'Read More';

    return (
        <div className="launch-widget flex flex-col lg:flex-row w-full justify-center items-center bg-neutral-100 p-4 rounded-lg gap-4 shadow-lg">
            <img className="w-full lg:w-[170px] xl:w-[312px] h-auto lg:h-[150px] xl:h-[200px] rounded-md" src={rocketImage || '/img/kennedy.jpg'} alt={launch.name} />
            <div className='flex flex-col lg:max-w-[300px] w-full'>
                <h3 className='text-xl font-bold'>{launch.name}</h3>
                <p>
                    {launch.success ? (
                        <span className='text-lg font-bold text-green-700'>Launch Successful</span>
                    ) : (
                        <span className='text-lg font-bold text-red-700'>Launch Failed</span>
                    )}
                </p>
                <p className={`description ${descriptionClass}`} >  {launch.details ? (
                        launch.details
                    ) : (
                        'No launch details found (Blame Elon)'
                    )}
                </p>
                <button className="text-blue-500" onClick={toggleDescription}>{readMoreText}</button>
            </div>
        </div>
    );
};

export default LaunchWidget;

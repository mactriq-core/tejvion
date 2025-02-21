import React from 'react';

const Hero: React.FC = () => {
    return (
        <div id='hero' className="flex justify-center items-center py-4 px-4 md:px-8 lg:px-16">
            <div className="relative w-full h-[80vh] max-w-full max-h-full">
                <video
                    className="absolute top-0 left-0 w-full rounded-lg h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/global/Hero.jpg"
               
                >
                    <source src="/home/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
             
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';

const Offering: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-start justify-between py-8 px-4 md:px-8 lg:px-16 border border-t border-b">
           
            <div className="md:w-1/2 grid grid-cols-4 gap-4">
                <img src="/home/of1.jpg" alt="Image 1" className="w-full h-auto rounded-lg" />
                <img src="/home/of2.jpg" alt="Image 2" className="w-full h-auto rounded-lg" />
                <img src="/home/of3.jpg" alt="Image 3" className="w-full h-auto rounded-lg" />
                <img src="/home/of4.jpg" alt="Image 4" className="w-full h-auto rounded-lg" />
            </div>

            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-end justify-center">
                <h2 className="text-4xl text-black font-bold mb-4 text-right">Our Offerings</h2>
                <p className="text-lg mb-6 text-black text-right">
                    Let&apos;s embody your beautiful ideas together, simplify the way you visualize your next big things.
                </p>
                <button className="bg-green-700 text-white py-2 px-4 rounded">
                    Explore More
                </button>
            </div>

        </section>
    );
};

export default Offering;
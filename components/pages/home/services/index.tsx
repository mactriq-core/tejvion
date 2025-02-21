import React from 'react';

const ServicesSection = () => {
    return (
        <section className="bg-green-900 text-white py-16 px-4 md:px-8 lg:px-16">
            <div className="">
                <div className="text-right mb-12">
                    <h2 className="text-4xl font-bold">About Us</h2>
                    <p className="mt-4 text-right">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <div className="h-full">
                        <h3 id='construction' className="text-2xl font-semibold mb-4">Construction Materials</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <img src="/services/m1.jpg" alt="Construction Material 1" className="w-full h-auto object-cover" />
                            <img src="/services/m2.jpg" alt="Construction Material 2" className="w-full h-auto object-cover" />
                            <img src="/services/m3.jpg" alt="Construction Material 3" className="w-full h-auto object-cover" />
                            <img src="/services/main1.jpg" alt="Construction Material 4" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="h-full">
                        <h3 id='agriculture' className="text-2xl text-right font-semibold mb-4">Agriculture Commodities</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <img src="/services/b1.jpg" alt="Freight Transport 1" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                            <img src="/services/b2.jpg" alt="Freight Transport 2" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                            <img src="/services/b3.jpg" alt="Freight Transport 3" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                            <img src="/services/b4.jpg" alt="Freight Transport 4" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="h-full">
                        <h3 id='transport' className="text-2xl font-semibold mb-4">Freight Transport</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <img src="/services/c1.jpg" alt="Freight Transport 1" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                            <img src="/services/c2.jpg" alt="Freight Transport 2" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                            <img src="/services/c3.jpg" alt="Freight Transport 3" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                            <img src="/services/c4.jpg" alt="Freight Transport 4" className="w-full sm:w-1/2 lg:w-full h-auto object-cover" />
                        </div>
                    </div>
                    <div className="h-full">
                        <h3 id='infrastructure' className="text-2xl text-right font-semibold mb-4">Infrastructure Construction</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <img src="/services/d1.jpg" alt="Infrastructure Construction 1" className="w-full sm:w-1/2 lg:w-full h-auto object-cover round-lg" />
                            <img src="/services/d2.jpg" alt="Infrastructure Construction 2" className="w-full sm:w-1/2 lg:w-full h-auto object-cover round-lg" />
                            <img src="/services/d3.jpg" alt="Infrastructure Construction 3" className="w-full sm:w-1/2 lg:w-full h-auto object-cover round-lg" />
                            <img src="/services/d4.jpg" alt="Infrastructure Construction 4" className="w-full sm:w-1/2 lg:w-full h-auto object-cover round-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
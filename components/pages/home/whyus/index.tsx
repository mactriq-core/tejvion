import Image from 'next/image';

const WhyUs = () => {
    return (
        <div id='about' className="flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-8 lg:px-16">
            <div className="md:w-1/2">
                <h2 className="text-4xl text-black font-bold mb-8">Why choose us ?</h2>
                <div className="mb-8">
                    <h3 className="text-2xl text-black font-semibold">Mission</h3>
                    <p className="text-black">
                        To deliver high-quality infrastructure, agriculture and road freight solutions with innovation, efficiency, and sustainability
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl text-black font-semibold">Mission</h3>
                    <p className="text-black">
                        To deliver high-quality infrastructure, agriculture and road freight solutions with innovation, efficiency, and sustainability
                    </p>
                </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                    src="/global/whyus.jpg"
                    alt="Landscape"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default WhyUs;
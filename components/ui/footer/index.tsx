import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-4 md:px-8 lg:px-16">
            <div className="container flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-green-500">Tejvion </h2>
                    <p className="text-green-500">Infra</p>
                    <p className="mt-4">Where Vision Meets Execution </p>
                    <div className="mt-4">
                        <p className="flex items-center">
                            <span className="material-icons mr-2">Locate Us</span>
                            Ground Floor , Hajipur Ward No-20 , Khagaria , Bihar -851204
                        </p>
                        <p className="flex items-center mt-2">
                            <span className="material-icons mr-2">Contact Us</span>
                            tejvion@gmail.com
                        </p>
                        {/* <p className="flex items-center mt-2">
                            <span className="material-icons mr-2">phone</span>
                            (334) 202-4792
                        </p> */}
                    </div>
                </div>
                <div className="mb-6 md:mb-0">
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Offerings</a></li>
                        {/* <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li> */}
                    </ul>
                </div>
                <div className="flex flex-col items-start md:items-end">
                    <p className="mb-4">Let&apos;s do it!</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-green-500"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-green-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-green-500"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-green-500"><i className="fab fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
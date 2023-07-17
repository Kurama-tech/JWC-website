import React from 'react';


const Contact = () => {
    return (
        <div className="relative bg-white mx-auto max-w-7xl px-5 py-1 sm:px-1 sm:py-4 lg:px-1">
            <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-4 lg:px-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-orange-600 sm:text-4xl text-center">
                    Contact Us
                </h2>
                <div className="grid px-5 mt-5 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1 mb-5">
                        <h3 className="text-2xl font-bold tracking-tight text-orange-600 sm:text-4xl text-left mb-5">
                            Address
                        </h3>
                        <p className=" text-black text-left">
                        Jai Wires & Cables Gala No. F 30 / 31, Meghdoot Estate, Sativali Road, Waliv Phata, Opp Luthria House, Vasai (East),Dist. Thane 401 208.
                        </p>
                    </div>
                    <div className="col-span-1 mb-5">
                        <div className="grid px-5 mt-5 sm:grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1 mb-5 rounded-lg bg-lightgray">
                                <p className='px-5 py-5'>
                                    Business Email
                                </p>
                                <p className='text-lg px-5 mb-5 text-orange-600 font-bold'>
                                <a href='mailto:info@jwcindia.com'>info@jwcindia.com</a>
                                </p>
                            </div>
                            <div className="col-span-1 mb-5 rounded-lg bg-lightgray">
                                <p className='px-5 py-5'>
                                    Phone
                                </p>
                                <p className='text-lg px-5 mb-5 text-orange-600 font-bold'>
                                    <a href='tel:+919820126970'>+91 9820126970</a>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

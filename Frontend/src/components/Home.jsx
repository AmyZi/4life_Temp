import { Carousel } from "flowbite-react";
import React from "react";
import life2 from "../assets/life2.png"

const Home = () => {
    return (
        <div className='bg-white '>
            <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
                <Carousel className="w-full mx-auto">
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src= {life2}  alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5x1 font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Lessons and 
                            insights <span className="text-brandPrimary leading-snug"> from 8 years </span></h1>
                            <p className="text-neutralGrey text-base mb-8"> where you meet mastery guidance from top expert from your field</p>
                            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">Get started</button>
                        </div>
                    </div>
                    {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        Slide 2
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        Slide 3
                    </div> */}
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
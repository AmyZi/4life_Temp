import React from "react";
import about from '../assets/about.png'

const About = () => {
    return(

        <div>
            {/* About page*/}
            <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src= {about} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className="text-4x1 text-neutralDGrey font-bold mb-4 md:w-4/5"> Our Company</h2>
                        <p className="md:w-3/4 text-sm text-neutralDGrey mb-8"> At 4Life, we believe that everyone has the potential to achieve greatness with the right guidance and support. 
                            Our mission is to empower individuals to reach their full potential by connecting them with experienced mentors 
                            who can provide invaluable insights, support, and direction.</p>
                    </div>

                </div> 
            </div>
        </div>

    );
};

export default About;
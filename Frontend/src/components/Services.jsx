import React from "react";

const Services = () => {

    const Services = [
        {id: 1, title: "Membership", description: " Our Memebership Management provides a One-to-One personalised trainings",
            image: "/src/assets/icons/advisor.png"},
        {id: 2, title: "Advisor", description: " Our Memebership Management provides a One-to-One personalised trainings",
            image: "/src/assets/icons/people.png"},
        {id: 3, title: "Mentorship", description: " Our Memebership Management provides a One-to-One personalised trainings",
            image: "/src/assets/icons/mentorship.png"},
    ]
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto">
            <div className="text-center my-8">
                <h2 className="text-[30px] text-neutralDGrey font-semibold mb-4"> Our Services </h2>
                <p className="text-neutralDGrey"> we have been breaking boundaries for years for varous clients</p>
            </div>

            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-[20px] text-neutralDGrey font-semibold mb-4"> Your growth is our utmost responsibility </h2>
            </div>
            {/*cards*/}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    Services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300ox] mx-auto md:h-80 rounded-md
                    shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-yellow-500 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3x1 rounded-br-3x1"><img src={service.image} alt="" className="ml-5" /></div>
                            <h4 className="'text-2x1 font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-neutralDGrey">{service.description}</p>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Services;
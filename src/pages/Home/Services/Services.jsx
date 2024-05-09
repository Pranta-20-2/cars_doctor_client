import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className=" text-center space-y-3 mt-10">
                <h3 className=" font-bold text-[#FF3811] text-xl">Services</h3>
                <h3 className=" text-3xl font-bold ">Our Service Area</h3>
                <h3 className=" w-1/2 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </h3>
            </div>
            <div>
                <p>Services: {services.length}</p>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Services;
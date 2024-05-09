import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen bg-white mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" relative lg:w-1/2">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <div className="absolute right-5 top-1/2 w-1/2 border-8 border-white ">
                        <img src={parts}/>
                    </div>
                </div>
                <div className=" lg:w-1/2 space-y-4">
                    <h3 className=" font-bold text-[#FF3811] text-xl">About Us</h3>
                    <h1 className="text-5xl font-bold md:w-2/3">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p className="">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn btn-active bg-[#FF3811] text-white mr-5 border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
import img1 from "../../../assets/images/team/1.jpg"
import img2 from "../../../assets/images/team/2.jpg"
import img3 from "../../../assets/images/team/3.jpg"
const Team = () => {
    return (
        <div>
            <div className=" text-center space-y-3 mt-10">
                <h3 className=" font-bold text-[#FF3811] text-xl">Team</h3>
                <h3 className=" text-3xl font-bold ">Meet Our Team</h3>
                <h3 className=" w-1/2 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </h3>
            </div>
            <div className=" grid grid-cols-3 gap-5 mt-10 ">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className=" text-xl" >Engine Expert</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className=" text-xl" >Engine Expert</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className=" text-xl" >Engine Expert</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
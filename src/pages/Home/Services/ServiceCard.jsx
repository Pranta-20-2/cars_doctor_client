import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold text-[#FF3811] text-xl" >Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
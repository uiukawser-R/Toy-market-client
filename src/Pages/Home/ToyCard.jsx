

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// eslint-disable-next-line react/prop-types
const ToyCard = ({ toy }) => {
  console.log(toy);
  const { _id, toyName, toyImage, price, rating } = toy;

  return (
    <div className="card w-52 bg-base-100 shadow-xl ">
      <figure className="px-5 pt-5">
        <img  src={toyImage} alt="" className="rounded-full transition duration-100 ease-in-out transform hover:scale-110" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{toyName}</h2>
        <p className="text-orange-500">Price: ${price} </p>
        <p className="">Rating: {rating} </p>
        <div>
          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        </div>
        <div className="card-actions">
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-active btn-info btn-sm hover:bg-sky-600">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

import { Link, useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
    useTitle("ToyDetails")
    const singleToy=useLoaderData();
    console.log(singleToy);
    const {  toyName, toyImage, price, rating,categoryId,toyDetails,categoryName,availableQuantity,sellerName
    } = singleToy;
    return (
        <div className="card w-2/4 bg-base-100 shadow-xl mt-10 mx-auto p-5">
        <figure className="px-5 pt-5">
            <img src={toyImage} alt="" className="rounded-xl w-72" />
        </figure>
        <div className=" ">
            <h2 className="card-title">{toyName}</h2>
            <p className=" text-orange-500">Price: ${price} </p>
            <p className=" "><span className="text-violet-600">Rating:</span> {rating} </p>
            <div>
                <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                </div>
            <p className=" "><span className="text-violet-600">Sub-Category:</span> {categoryName} </p>
            <p className=" "><span className="text-violet-600">Available-Quantity:</span> {availableQuantity} </p>
            <p className=" "><span className="text-violet-600">Seller Name:</span> {sellerName} </p>
            <p className=" "><span className="text-violet-600">toy Details:</span> {toyDetails} </p>
            <div className="card-actions">
                <Link to={`/category/${categoryId}`}>
                    <button className="btn btn-active btn-secondary">Go Back</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ToyDetails;
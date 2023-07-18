import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import useTitle from "../../hooks/useTitle";

const CategoryToy = () => {
    useTitle("CategoryToy")
    const categoryToy=useLoaderData();
    return (
        <div>
            <h1 className="font-bold   text-center mb-5">Total <span className="text-orange-500">{categoryToy.length}</span> Toys For You</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              categoryToy.map(toy=> <ToyCard
              key={toy._id}
              toy={toy}
              ></ToyCard>)  
            }
            </div>
        </div>
    );
};

export default CategoryToy;
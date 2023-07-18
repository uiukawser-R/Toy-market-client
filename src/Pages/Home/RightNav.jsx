import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://toy-market-server-neon.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        
    },[])
    // console.log(categories);
    return (
        <div>
            <h2 className="font-bold  mb-3"><span className="text-orange-500">Categories</span></h2>
            {
                categories.map(category=> <p
                key={category.id}
                className="mb-2"
                >
                    <Link to={`/category/${category.id}`}>{category.title}</Link>
                </p>)
            }
            
        </div>
    );
};

export default RightNav;
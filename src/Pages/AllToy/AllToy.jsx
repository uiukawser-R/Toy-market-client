import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import { useLoaderData } from "react-router-dom";
import './AllToy.css';
import useTitle from "../../hooks/useTitle";

const AllToy = () => {
    const [allToy, setAllToy] = useState([]);
    const [currentPage,setCurrentPage]=useState(0);
    const { totalToys } = useLoaderData();
    useTitle("AllToy")
    // const totalToys=71;

    const toysPerpage = 20;

    const totalPage = Math.ceil(totalToys / toysPerpage);

    // const pageNumber=[];
    // for (let i=1; i<=totalPage;i++){
    //     pageNumber.push(i);
    // }

    const pageNumber = [...Array(totalPage).keys()];

    console.log(totalToys);

    // const url = 'https://toy-market-server-neon.vercel.app/toys';


    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setAllToy(data))
    // }, [url])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://toy-market-server-neon.vercel.app/toy?page=${currentPage}&limit=${toysPerpage}`);

            const data = await response.json();
            setAllToy(data);
        }
        fetchData();
    }, [currentPage, toysPerpage]);

    return (
        <>
            <div>
                <h2 className="text-center mt-5">Your Toy: <span className="text-orange-500">{allToy.length}</span></h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Image</th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Sub-category</th>
                                <th>price</th>
                                <th>Available Quantity</th>
                                <th>Satatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToy.map(toy => <AllToyRow
                                    key={toy._id}
                                    toy={toy}

                                ></AllToyRow>)
                            }



                        </tbody>


                    </table>
                </div>
            </div>
            {/* Pagination */}
            <div className="pagination">
                <p>Current Page : {currentPage+1}</p>
                {
                    pageNumber.map(number => <button className="btn" 
                    key={number}
                    onClick={()=>setCurrentPage(number)}
                    >{number+1}</button>)
                }
            </div>
        </>
    );
};

export default AllToy;
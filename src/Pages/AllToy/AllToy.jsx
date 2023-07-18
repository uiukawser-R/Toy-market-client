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

    // const url = 'http://localhost:5000/toys';


    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setAllToy(data))
    // }, [url])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/toy?page=${currentPage}&limit=${toysPerpage}`);

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
                <p>Current Page : {currentPage}</p>
                {
                    pageNumber.map(number => <button className="btn" 
                    key={number}
                    onClick={()=>setCurrentPage(number)}
                    >{number}</button>)
                }
            </div>
        </>
    );
};

export default AllToy;
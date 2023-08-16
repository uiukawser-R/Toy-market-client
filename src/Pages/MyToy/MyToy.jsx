import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const MyToy = () => {
    useTitle("MyToy")
    const { user } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);

    const url = `https://toy-market-server-neon.vercel.app/toys?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [url])


    // const handleDelete = id => {
    //     const proceed = confirm('Are you want to sure want to delete')

    //     if (proceed) {
    //         fetch(`https://toy-market-server-neon.vercel.app/toys/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('Delete successful')
    //                     const remaining = myToy.filter(t => t._id !== id);
    //                     setMyToy(remaining);
    //                 }
    //             })
    //     }
    // }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-market-server-neon.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = myToy.filter(t => t._id !== id);
                            setMyToy(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <div>
            <h2 className="text-center mt-5">Your Toy: <span className="text-orange-500">{myToy.length}</span></h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>Satatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToy.map(toy => <MyToyRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}

                            ></MyToyRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;
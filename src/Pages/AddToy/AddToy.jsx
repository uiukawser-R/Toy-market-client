import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const AddToy = () => {
    const {user}=useContext(AuthContext);
    
     useTitle("AddToy")


    const handleAddToy=event=>{
        event.preventDefault();

        const form=event.target;
        const toyName=form.toyname.value;
        const toyImage=form.photo.value;
        const sellerName=form.seller.value;
        const categoryName=form.category.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const availableQuantity=form.quantity.value;
        const sellerEmail=form.email.value;
        const category=form.categoryId.value;
        const categoryId=parseInt(category);
        const toyDetails=form.detail.value;
        
        const Adding={
            toyName,
            toyImage,
            sellerName,
            categoryName,
            price,
            rating,
            availableQuantity,
            sellerEmail,
            toyDetails,
            categoryId      
        }
        console.log(Adding);

        fetch('https://toy-market-server-neon.vercel.app/toys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(Adding)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Add successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

       


    return (
        <div>
           <div>
            <h2 className="text-center text-3xl">Add A Toy</h2>
            <form  onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text"  name="toyname"  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <input type="text"  name="photo"  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text"  name="seller" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text"  name="category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text"  name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text"  name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email"  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text"  name="detail" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">CategoryId</span>
                        </label>
                        <input type="text"  name="categoryId" placeholder="L2,M3,S4,T6" className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Now" />
                </div>
            </form>
            <div className="hero min-h-screen bg-base-200">


            </div>
        </div>
        </div>
    );
};

export default AddToy;
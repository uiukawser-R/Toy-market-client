import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyUpdate = () => {
    const toy=useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const {_id,toyName,toyImage,price,availableQuantity}=toy;


    const handleUpdate=event=>{
        event.preventDefault();

        const form=event.target;
        const price=form.price.value;
        const availableQuantity=form.quantity.value;
        const toyDetails=form.detail.value;
        
        const update={
           
            price,
            availableQuantity,
            toyDetails,
        }
        console.log(update);

        fetch(`https://toy-market-server-neon.vercel.app/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Update successfully',
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
         <form  onSubmit={handleUpdate}>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 
                 
                 
                 
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text">Price</span>
                     </label>
                     <input type="text"  name="price" className="input input-bordered" />
                 </div>

                 <div className="form-control">
                     <label className="label">
                         <span className="label-text">Available quantity</span>
                     </label>
                     <input type="text" name="quantity" className="input input-bordered" />

                 </div>
                
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text">Detail description</span>
                     </label>
                     <input type="text"  name="detail" className="input input-bordered" />

                 </div>
               
             </div>
             <div className="form-control mt-6">
                 <input className="btn btn-primary btn-block" type="submit" value="Update Now" />
             </div>
         </form>
         <div className="hero min-h-screen bg-base-200">


         </div>
     </div>
     </div>
    );
};

export default MyToyUpdate;
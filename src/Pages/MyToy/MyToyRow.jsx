/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MyToyRow = ({toy,handleDelete}) => {
    const {_id,toyName,toyImage,price,availableQuantity}=toy;





    return (
        <tr>
        
        <td>

            <div className="avatar">
                <div className="rounded w-24 h-24">
                     <img src={toyImage} />
                </div>


            </div>
        </td>
        <td>
            {toyName}
        </td>
        <td>
            <p>$ {price}</p>
        </td>
        <td>{availableQuantity}</td>
        
        <th>
          
          
          <>
          <Link to={`../update/${_id}`}><button className="btn btn-primary btn-sm mb-1 w-15">Update</button></Link>
          <br />
          <button onClick={()=>handleDelete(_id)} className="btn btn-secondary btn-sm w-15">Delete!</button>
          </>
          
        </th>
    </tr>
    );
};

export default MyToyRow;
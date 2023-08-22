/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllToyRow = ({toy}) => {
    const {_id,toyName,toyImage,price,availableQuantity,sellerName,categoryName}=toy;
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
            {sellerName}
        </td>
        <td>
            {categoryName}
        </td>
        <td>
            <p>$ {price}</p>
        </td>
        <td>{availableQuantity}</td>
        
        <th>
          
          
          <>
          <Link to={`/toys/${_id}`}><button className="btn bg-sky-400 hover:bg-sky-500 btn-sm mb-1 w-15">View Details</button></Link>
          </>
          
        </th>
    </tr>
    );
};

export default AllToyRow;
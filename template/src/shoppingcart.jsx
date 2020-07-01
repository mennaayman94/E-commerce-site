import React from "react";
import App from './app'
import Product from './product';
import Home from './home';
const ShoppingCart = (props) => {
    const {onReset, onIncrement, onDelete,products, onDecrement } =props;
    return(
    <div>
       <button onClick={onReset} className="btn btn-secondary m-2">
          Reset
        </button>
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>

    </tr>
  </thead>
  <tbody>
     {products.filter(p=>p.isInCart==true).map(p=>(
    <tr>
      <td scope="row"> <img  src={p.imgurl} alt=""></img></td>
      <td>{p.name}</td>
     <td>{p.price}</td>
     <td ><div className="quantity"> <div ><span className="btn btn-primary btn-xs" onClick={()=>onDecrement(p.id)}>-</span>
       <div className="badge badge-light"> {p.count}</div>
        <span className="btn btn-primary btn-xs" onClick={()=>onIncrement(p.id)}>+</span><span className="btn btn-danger" onClick={()=>onDelete(p.id)}>Delete</span>
</div>
        

        </div>
        </td>
     
     <td>{p.count*p.price}</td>
    </tr>
 
       ) )
}
  
  </tbody>
</table>
</div>
    )
}
export default ShoppingCart;
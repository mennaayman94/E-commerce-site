import React from 'react';
import Product from './product';
const Home = (props) => {
    return (  
<div  className="row">

    {props.products.map(p=><Product key={p.id} name={p.name} price={p.price} isIncart={p.isIncart} 
        count={p.count} sale={p.sale} imgurl={p.imgurl} product={p} onToggleCart={props.onToggleCart}  handleSearch ={props.handleSearch}
        />)}

</div>
    );
}
 
export default Home;
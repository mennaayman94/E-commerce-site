import React, { Component } from 'react';
import Product from './product';
import NavBar from './navbar';
import{Route, Switch} from 'react-router-dom'
import ShoppingCart from './shoppingcart';
import Home from './home';
import Login from './login';

class App extends Component {
    state ={ 
        products:
[
    {"id":1,
    "name":"Woolscarf",
    "price":120,
    "sale":150,
    "count": 0,
    "imgurl":"img/products/product-1.jpg"
    },
    {"id":2,
    "name":"Sweater",
    "price":300,
    "sale": 350,
    "count": 0,
    "imgurl":"img/products/product-3.jpg"
    },
    {"id":3,
    "name":"Hat",
    "price":70,
    "sale": 100,
    "count": 0,
    "imgurl":"img/products/product-5.jpg"
    },
    {"id":4,
    "name":"Pullover",
    "price":200,
    "sale":230,
    "count": 0,
    "imgurl":"img/products/product-6.jpg"
    },
     {"id":5,
    "name":"Bag",
    "price":400,
    "sale":450,
    "count": 0,
    "imgurl":"img/products/product-7.jpg"
    }
     
]  
}
handleIncrement = id => {
    //Clone
    const products = [...this.state.products];
    //Using id ==> object
    const obj = products.filter(p => p.id === id)[0];
    //Using object ==> index
    const index = products.indexOf(obj);
    //Deep Clone
    products[index] = { ...products[index] };

    //Edit
    products[index].count++;

    //Set State
    this.setState({ products: products });
  };

  handleDelete = id => {
    //Clone
    const products = [...this.state.products];
    //Edit
    //Using id ==> Object
    const obj = products.filter(p => p.id === id)[0];
    //Using obj ==> index
    const index = products.indexOf(obj);
    //Using index ===> DELETE
    products.splice(index, 1);
    //Set State
    this.setState({ products: products });
  };

  handleReset = () => {
    //Clone
    const products = [...this.state.products];

    //Edit
    const newProducts = products.map(p => {
      return { ...p, count: 0 };
    });

    //set state
    this.setState({ products: newProducts });
  };
handleAddtocartto=product =>{
   //Clone
   const products = [...this.state.products];
   //Using object ==> index
   const index = products.indexOf(product);
   //Deep Clone
   products[index] = { ...products[index] };
   //Edit
   products[index].isInCart = !products[index].isInCart;
   //Set State
   this.setState({ products });
}
handleSearch =(keywords)=>{
        
  let newproducts = {...this.state.products}

  this.setState({
      searcKeyWords : keywords
  })


}
handlePost=()=>{
  const product={
          id:99,
          name:"Test",
          price:14,
          isInCart:false,
          count:0,
          typeId:4,
          imgUrl:"product-1.jpg"
  }
  };
handleDecrement = (id) => {
  //clone
  const products = [...this.state.products];

  //use id to get obj
  const obj = products.filter((p) => p.id === id)[0];
  //use obj to get index
  const minus = products.indexOf(obj);
  products[minus] = { ...products[minus] }; ///??
  //edit
  if (products[minus].count > 0) {
    products[minus].count--;
    //set state
    this.setState({
      products: products,
    });
  }
  
};

    render() { 
        return ( 
            <div>
                <NavBar/>

                <main>
                    <Switch>
                    <Route path="/login" component={Login}/>

<Route path='/shoppingcart'  render={(props)=><ShoppingCart  {...props}
                  products={this.state.products.filter(p => p.isInCart)}
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleDelete}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}/>}
                  />
<Route path='/'  render={()=><Home products={this.state.products}  handleSearch ={this.handleSearch}
  searcKeyWords= {this.state.searcKeyWords}
onToggleCart={this.handleAddtocartto}/>}/>


</Switch>
                </main>
        
        </div> );
    }
}

export default App;
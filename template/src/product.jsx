import React, { Component } from 'react'; 


class Product extends Component {
    state = { searcKeyWords: "" , }

    
    handleSearcch=(e)=>{
        
    this.setState({
        searcKeyWords:e.target.value,

    })
    

    }

    sunbmit =(e)=>{
        
        e.preventDefault();


        this.setState({
            searcKeyWords:e.target.value,
    
        })


    }
        render() { 
            return ( 
<div className="col-lg-4 col-sm-6">    
    <div className="product-item">
                        <div className="row">
            <div className="pi-pic">
            <img  src={this.props.imgurl} alt=""></img>
                <div className="icon">
                    <i className="icon_heart_alt"></i>
                </div>
                <ul>
                  
                    <li className="w-icon active" ><a onClick={()=>this.props.onToggleCart(this.props.product)} ><i className="icon_bag_alt"></i></a></li>
                    <li className="quick-view"><a href="#">+ Quick View</a></li>
                    <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                </ul>
                
                </div>
            </div>
            <div className="pi-text">
                <a href="#">
                    <h5>{this.props.name}</h5>
                </a>
                <div className="product-price">
                    {this.props.price}
        <span>{this.props.sale}</span>
                </div>
            </div>
        </div>
        
    </div>
 
        );
    }
}

export default Product ;
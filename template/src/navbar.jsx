import React from "react";
import{Link} from 'react-router-dom'
import Product from './product';
import Home from './home';
const NavBar = (props) => {
  return (
<div>
    <div className="header-section"/>
        <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope"></i>
                        hello.colorlib@gmail.com
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"></i>
                        +65 11.188.888
                    </div>
                </div>
                <div className="ht-right">
                    <Link to="/login" className="login-panel"><i className="fa fa-user"></i>Login</Link>
                    
                    <div className="top-social">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"><i className="ti-twitter-alt"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container"/>
            <div className="inner-header"/>
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                            <a href="./index.html">
                                <img src="img/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="advanced-search">
                            <button type="button" className="category-btn">All Categories</button>
                            <form method="get"  onSubmit={(e) => { this.sunbmit(e)}} className="input-group">
                                <input type="text" placeholder="What do you need?"  >
                            </input>
                            <button type="button"><i className="ti-search"></i></button>

                        </form>
                    </div>
                    
            </div>
        </div>
        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu"></i>
                        <span>All departments</span>
                        <ul className="depart-hover">
                            <li className="active"><a href="#">Women’s Clothing</a></li>
                            <li><a href="#">Men’s Clothing</a></li>
                            <li><a href="#">Underwear</a></li>
                            <li><a href="#">Kid's Clothing</a></li>
                            <li><a href="#">Brand Fashion</a></li>
                            <li><a href="#">Accessories/Shoes</a></li>
                            <li><a href="#">Luxury Brands</a></li>
                            <li><a href="#">Brand Outdoor Apparel</a></li>
                        </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">Collection</a>
                            <ul className="dropdown">
                                <li><a href="#">Men's</a></li>
                                <li><a href="#">Women's</a></li>
                                <li><a href="#">Kid's</a></li>
                            </ul>
                        </li>
                        <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                        <li><a href="#">Pages</a>
                            <ul className="dropdown">
                                <li><a href="./blog-details.html">Blog Details</a></li>
                                <li><a href="./check-out.html">Checkout</a></li>
                                <li><a href="./faq.html">Faq</a></li>
                                
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
   
    </div>
  );
};

export default NavBar;
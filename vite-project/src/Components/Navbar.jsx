import React from "react";
import logo from "../assets/img/favpng_logo-symbol-graphic-design.png"
import cart from "../assets/img/black_cart.png"

export class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
            <ul className="horizontal-list">
                <li>All Products</li>
                <li>Latest Arrivals</li>
                <li>Trending</li>
                <li></li>
            </ul>
            <div className="logo">
                <img src={logo} alt="logo" width={118} height={118}/>
            </div>
            <img className="cart-logo" src={cart} alt="shopping cart"/>
            <button>Sign up / Log In</button>
            </div>
        )
    }
}
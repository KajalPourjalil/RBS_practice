import React from "react";
import logo from "../assets/img/favpng_logo-symbol-graphic-design.png"
import cart from "../assets/img/black_cart.png"

export class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" width={58} height={58}>
                    {/* <a></a> */}
                </img>
            </div>
            <img className="cart-logo" src={cart} alt="shopping cart"/>
            <button>Sign up / Log In</button>
            </div>
        )
    }
}
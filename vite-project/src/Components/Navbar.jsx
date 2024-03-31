import React from "react";
// import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

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
                <img src="" alt="logo"/>
            </div>
            <img src="" alt="shopping cart"/>
            <button>Sign up / Log In</button>
            </div>
        )
    }
}
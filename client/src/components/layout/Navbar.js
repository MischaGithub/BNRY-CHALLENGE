import React from "react";
import PropTypes from "prop-types"

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-dark">
            <h1>
    <i className={icon}/> {title}
            </h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: "Infinite Image Slider",
    icon: "fas fa-image"
}

export default Navbar;
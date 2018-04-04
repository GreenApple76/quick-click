import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

export default Header;
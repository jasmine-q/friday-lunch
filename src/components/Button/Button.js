import React, { Component, PropTypes } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="btn btn-7 btn-7h icon-envelope">What's for lunch?</button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button
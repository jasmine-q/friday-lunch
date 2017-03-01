import React, { PropTypes } from 'react';
import './Button.css';

const Button = ({ onClick }) => (
   <button className="btn btn-7 btn-7h icon-envelope" onClick={onClick}>What's for lunch?</button>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button
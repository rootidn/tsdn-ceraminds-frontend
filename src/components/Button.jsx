// import React from 'react'
import PropTypes from "prop-types";

function Button(props) {
  Button.prototype;
  return (
    <div>
      <a
        href={props.callback}
        className={`text-white bg-gradient-to-t from-[#8778FF] to-[#A799FC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
        font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 
        ${props.size==='sm' ? 'text-sm px-5 py-2.5' : 'text-lg px-10 py-4'}`}
      >
        {props.name}
      </a>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  callback: PropTypes.string,
  size: PropTypes.string
};

export default Button;

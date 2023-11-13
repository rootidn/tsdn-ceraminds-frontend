// import React from 'react'
import PropTypes from "prop-types";

function Button(props) {
  Button.prototype;
  return (
      <a
        href={props.callback}
        className={`text-white bg-gradient-to-t from-[#8778FF] to-[#A799FC] hover:bg-gradient-to-t hover:from-[#5f80e4] hover:to-[#b1c0ff] hover:drop-shadow-[0px_10px_10px_rgba(177,192,255,0.25)] focus:ring-4 focus:ring-blue-300 
        font-medium rounded-lg focus:outline-none
        ${props.size==='sm' ? 'text-sm px-5 py-2.5' : 'text-lg px-10 py-4'}`}
      >
        {props.name}
      </a>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  callback: PropTypes.string,
  size: PropTypes.string
};

export default Button;

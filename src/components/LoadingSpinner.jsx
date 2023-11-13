// import React from "react";
import PropTypes from "prop-types";

export default function LoadingSpinner(props) {
  // const isShow = props.
  return (
    <div
        className={`flex flex-col h-[100vh] m-auto justify-center items-center bg-[#f9f9f9] absolute top-0 left-0 right-0 
        ${
          props.isShow ? "visible" : "hidden"
        }`}
      >
        <div className="w-12 h-12 border-8 border-solid border-[#f3f3f3] border-t-primary-color rounded-[50%] animate-spin"></div>
        <p className="mt-2">Loading ...</p>
      </div>
  );
}


LoadingSpinner.propTypes = {
  isShow: PropTypes.bool
};
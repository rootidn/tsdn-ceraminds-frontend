// import React from 'react'
// import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  return (
    <div>
      res page {location.state.img_id}
      <button>Back</button>
    </div>
  )
}
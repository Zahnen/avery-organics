import React from "react";
import PropTypes from "prop-types";

function Schedule(props){
  return (
    <>
      <h3>{props.day} - {props.location}</h3>
      <h3>{props.hours} - {props.booth}</h3>
      <hr/>
    </>
  )
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
  key: PropTypes.number
};

export default Schedule;
import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return(
    <>
      <h3>{props.month}</h3>
      <p>{props.selection}</p>
      <hr/>
    </>
  );
}

Product.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Product;
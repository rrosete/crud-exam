import React from "react";
import Proptypes from "prop-types";

export const Button = ({ variant, children, onClick }) => {
  const variantStyle = {
    primary: "bg-orange-500 text-white",
    secondary: "bg-white border border-orange-500  text-black ",
  };
  return (
    <button
      className={`px-3.5 py-1 cursor-pointer text-sm rounded-lg ${variantStyle[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: Proptypes.oneOf(["primary", "secondary"]),
  children: Proptypes.node.isRequired,
  onClick: Proptypes.func,
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
};

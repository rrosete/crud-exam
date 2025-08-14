import React from "react";
import Proptypes from "prop-types";

export const Button = ({
  variant = "primary",
  children,
  onClick,
  className,
}) => {
  const variantStyle = {
    primary: "bg-orange-500 text-white",
    secondary: "bg-white border border-orange-500  text-black",
    custom: "",
  };
  return (
    <button
      className={`px-3.5 py-1 cursor-pointer text-sm rounded-lg ${variantStyle[variant]} ${className}`}
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
  className: Proptypes.string,
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
  className: "",
};

import Proptypes from "prop-types";

export const Input = ({
  required = false,
  onChange,
  error,
  value,
  name,
  label,
  ...props
}) => {
  const errorStyle = error ? "border-red-500" : "border-gray-300";

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        onChange={onChange}
        required={required}
        name={name}
        className={`w-full px-4 py-2 border rounded-md bg-white text-xs ${errorStyle}`}
        value={value}
        {...props}
      />
      {error && error !== "" && (
        <label className="block text-xs font-medium text-red-500 mt-1">
          {error}
        </label>
      )}
    </div>
  );
};

Input.propTypes = {
  onChange: Proptypes.func,
  required: Proptypes.bool,
  name: Proptypes.string,
  value: Proptypes.string,
  error: Proptypes.string,
  label: Proptypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  required: false,
};

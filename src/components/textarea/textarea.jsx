import Proptypes from "prop-types";
export const Textarea = ({
  onChange,
  value,
  placeholder,
  name,
  error,
  required = false,
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
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`border rounded-md p-2 w-full text-xs  bg-white ${errorStyle}`}
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

Textarea.propTypes = {
  onChange: Proptypes.func,
  required: Proptypes.bool,
  name: Proptypes.string,
  value: Proptypes.string,
  error: Proptypes.string,
  label: Proptypes.string,
};

Textarea.defaultProps = {
  onChange: () => {},
  required: false,
};

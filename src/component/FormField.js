import React from "react";
import Errors from "./Errors";

function FormField({
  name,
  type = "text",
  value,
  className = "",
  inputClassName = "",
  values,
  errors,
  onChange,
  rows,
  ...rest
}) {
  let field = (
    <input
      type={type}
      className={"form-control " + inputClassName}
      id={name.camelize().s}
      aria-describedby={`${name.camelize().s}Help`}
      placeholder={`Enter ${name.humanize().s}`}
      value={value}
      onChange={onChange}
    />
  );

  if (values) {
    field = (
      <select
        className={"form-control " + inputClassName}
        id={name.camelize().s}
        value={value}
        onChange={onChange}
      >
        {values.map((value) => (
          <option key={value.value} value={value.value}>
            {value.caption}
          </option>
        ))}
      </select>
    );
  }

  if (rows > 1) {
    field = (
      <textarea
        value={value}
        onChange={onChange}
        className={"form-control " + inputClassName}
        id={name.camelize().s}
        rows={rows}
      />
    );
  }

  return (
    <div
      className={"form-group mb-4 " + (errors.size > 0 && "error ") + className}
    >
      <label htmlFor={name.camelize().s}>
        {name.humanize().capitalize().s}
      </label>
      {field}
      <small>
        <Errors errors={errors} />
      </small>
    </div>
  );
}

export default FormField;

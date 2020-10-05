import React from "react";
import Errors from "./Errors";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import FileInput from "./FileInput";

function FormField({
  name,
  type = "text",
  value,
  className = "",
  inputClassName = "",
  values,
  errors,
  onChange,
  onInputChange = () => {},
  inputValue = value,
  rows,
  multi = false,
  loadOptions,
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
      <Select
        isMulti={multi}
        name={name}
        options={values}
        className={`basic${multi && "-multi"}-select`}
        classNamePrefix="select"
        value={value}
        onChange={onChange}
      />
    );
  }

  if (loadOptions) {
    field = (
      <AsyncSelect
        cacheOptions
        defaultOptions={values ? values : []}
        isMulti={multi}
        name={name}
        loadOptions={loadOptions}
        className={`basic${multi && "-multi"}-select`}
        classNamePrefix="select"
        value={value}
        onChange={onChange}
      />
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

  if (type === "file") {
    field = (
      <FileInput
        value={value}
        onChange={onChange}
        className={"form-control " + inputClassName}
        id={name.camelize().s}
        name={name}
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

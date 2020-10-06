import React from "react";
import Errors from "./Errors";
import FormField from "./FormField";

function Form({
  formFields,
  errors,
  changeHandlers,
  buttonText = "Submit",
  onSubmit,
}) {
  const fields = Object.keys(formFields).map((formFieldName) => {
    const formField = formFields[formFieldName];
    return (
      <FormField
        key={formFieldName}
        name={formFieldName}
        onChange={changeHandlers[formFieldName]}
        {...formField}
      />
    );
  });

  return (
    <form onSubmit={onSubmit}>
      {fields}
      <Errors errors={errors} />
      <button type="submit" className="btn btn-outline-secondary">
        {buttonText}
      </button>
    </form>
  );
}

export default Form;

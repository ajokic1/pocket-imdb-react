import { useState } from "react";

const defaultField = {
  value: "",
  required: false,
  max: null,
  equals: null,
  errors: [],
  type: "text",
  values: null,
  rows: 1,
};

function useFormFields(config) {
  const initialValues = {};
  for (const fieldName in config) {
    initialValues[fieldName] = { ...defaultField, ...config[fieldName] };
  }
  const [formFields, setFormFields] = useState(initialValues);

  const changeHandlers = {};
  for (const fieldName in config) {
    changeHandlers[fieldName] = config[fieldName].values
      ? createSelectHandler(fieldName)
      : createChangeHandler(fieldName);
  }

  function createChangeHandler(fieldName) {
    return (event) => {
      updateFormField(fieldName, { value: event.target.value });
    };
  }

  function createSelectHandler(fieldName) {
    return (value) => {
      updateFormField(fieldName, { value });
    };
  }

  function updateFormField(fieldName, newKeyValuePair) {
    setFormFields((previousState) => {
      const updatedField = { ...previousState[fieldName], ...newKeyValuePair };
      return { ...previousState, [fieldName]: updatedField };
    });
  }

  function validateFields() {
    let hasErrors = false;
    setFormFields((prevState) => {
      const newState = { ...prevState };
      for (const fieldName in newState) {
        newState[fieldName].errors = validate(newState[fieldName], prevState);
        if (newState[fieldName].errors.length > 0) {
          hasErrors = true;
        }
      }
      return newState;
    });
    return !hasErrors;
  }

  function validate(field, prevState) {
    const errors = [];
    if (field.required && !field.value) {
      errors.push("This field is required.");
    }
    if (field.max && field.value.length > field.max) {
      errors.push(`Comments can't be longer than ${field.max} characters.`);
    }
    if (field.equals && prevState[field.equals].value !== field.value) {
      errors.push(`Value doesn't match ${field.equals}.`);
    }
    return errors;
  }

  function getFieldValues() {
    const values = {};
    for (const fieldName in formFields) {
      const field = formFields[fieldName];
      if (field.multi && field.value) {
        values[fieldName] = field.value.map((option) => option.value);
      } else if (field.values && field.value) {
        values[fieldName] = field.value.value;
      } else {
        values[fieldName] = field.value;
      }
    }
    return values;
  }

  function setFieldValues(values) {
    for (const fieldName in values) {
      updateFormField(fieldName, { value: values[fieldName] });
    }
  }

  return {
    fields: formFields,
    changeHandlers,
    data: getFieldValues(),
    validateFields,
    setFieldValues,
    updateFormField,
  };
}

export default useFormFields;

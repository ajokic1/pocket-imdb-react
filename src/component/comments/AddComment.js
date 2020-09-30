import React from "react";
import useFormFields from "../../hooks/FormFieldsHook";
import Form from "../Form";

function AddComment({ addComment, movie }) {
  const formFields = useFormFields({
    content: { required: true, rows: 3, max: 500 },
  });

  function handleAdd(event) {
    event.preventDefault();
    if (!formFields.validateFields()) return;
    addComment(movie.id, formFields.data.content);
  }

  return (
    <Form
      buttonText="Post"
      formFields={formFields.fields}
      changeHandlers={formFields.changeHandlers}
      errors={[]}
      onSubmit={handleAdd}
    />
  );
}

export default AddComment;

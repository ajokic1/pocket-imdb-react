import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { MOVIES } from "../../constants/routes";
import useFormFields from "../../hooks/FormFieldsHook";
import { movieService } from "../../services/MovieService";
import Errors from "../Errors";
import Form from "../Form";

function CreateMovie({ genres }) {
  const genre_values = genres.map(genre => ({ value: genre.id, caption: genre.name }));

  const formFields = useFormFields({
    title: { required: true, max: 255 },
    description: { required: true, rows: 5 },
    image_url: { required: true },
    genre_id: { required: true, values: genre_values }
  });

  const [status, setStatus] = useState({ done: false, errors: [] });

  async function handleCreate(event) {
    event.preventDefault();
    if (!formFields.validateFields()) return;
    const status = await movieService.create(formFields.data);
    setStatus((state) => ({ ...state, ...status }));
  }

  if (status.done) return <Redirect to={MOVIES} />;

  return (
    <div className="row py-5 px-2">
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <h1>Create movie</h1>
        <Form
          buttonText="Create"
          formFields={formFields.fields}
          changeHandlers={formFields.changeHandlers}
          errors={[]}
          onSubmit={handleCreate}
        />
        <Errors errors={status.errors} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};

export default connect(mapStateToProps)(CreateMovie);

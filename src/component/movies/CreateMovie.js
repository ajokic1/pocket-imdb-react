import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { MOVIES } from "../../constants/routes";
import useFormFields from "../../hooks/FormFieldsHook";
import { movieService } from "../../services/MovieService";
import Errors from "../Errors";
import Form from "../Form";
import { getGenres } from "../../store/actions/GenreActions";
import { omdbService } from "../../services/OmdbService";

function CreateMovie({ genres, getGenres }) {
  useEffect(() => {
    if (genres.length === 0) getGenres();
  }, []);

  const genre_values = genres.map((genre) => ({
    value: genre.name,
    label: genre.name,
  }));

  const formFields = useFormFields({
    title: { required: true, max: 255, values: [], loadOptions: omdbService.searchMovies, selectHandler: selectMovieHandler },
    description: { required: true, rows: 5 },
    genres: { required: true, values: genre_values, multi: true },
    image_url: {},
    image: { type: 'file' }
  });

  function getGenreValues(genreString) {
    return genreString.split(", ").map( genre => ({value: genre, label: genre}));
  }

  async function selectMovieHandler(value) {
    const movie = await omdbService.getMovie(value.value);
    formFields.updateFormField("description", {value: movie.Plot});
    formFields.updateFormField("image_url", {value: movie.Poster});
    formFields.updateFormField("genres", { value: getGenreValues(movie.Genre) });
  }

  useEffect(() => {
    formFields.updateFormField("genres", { values: genre_values });
  }, [genres])

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

const mapDispatchToProps = {
  getGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie);

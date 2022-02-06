import React from "react";
import { Field, reduxForm } from "redux-form";
import Users from "./Users";
const {
  DOM: { input, select, textarea },
} = React;

const ProjectForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field name="name" component={input} type="text" placeholder="Name" />
        </div>
      </div>
      <div>
        <label>User</label>
        <div>
          <Users />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field name="Description" component={textarea} />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Create
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
})(ProjectForm);

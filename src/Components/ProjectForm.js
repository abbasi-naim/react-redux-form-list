import React from "react";
import { Field, reduxForm } from "redux-form";
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
          <Field name="user" component={select}>
            <option></option>
            <option value="ff0000">user #1</option>
            <option value="00ff00">user #2</option>
            <option value="0000ff">user #3</option>
          </Field>
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

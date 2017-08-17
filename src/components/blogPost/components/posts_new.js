import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: {touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    let textField = null;
    if(field.label == 'title' || field.label == 'categories') {
      textField =  <input type="text" className={"form-control new-post-"+field.label}{...field.input}/>
    } else {
      textField = <textarea type="text" className={"form-control new-post-"+field.label}{...field.input} />
    }
    return (
      <div className={className}>
        <label>{field.label}</label>
        {textField}
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {

    this.props.createPost(values, () => {
      this.props.history.push('/blog_post');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary new-post-button ">Submit</button>
        <Link className="btn btn-danger" to="/blog_post new-post-button ">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter a content!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
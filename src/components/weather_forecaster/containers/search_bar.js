import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import '../index.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
      this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <div>
        <h3 className="title">Search the Weather</h3>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five-day forecast in your favorite cites"
            className="form-control weather_search_bar"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
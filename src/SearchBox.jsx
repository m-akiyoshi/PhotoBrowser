import React from "react";

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = { keyword: "" };
  }

  handleSearch = () => {
    const { keyword } = this.state;
    this.props.onClick(keyword);
    this.setState({ keyword: "" });
  };

  handleTextChange = event => {
    this.setState({ keyword: event.target.value });
  };

  render() {
    return (
      <div className="d-flex flex-row">
        <input
          type="text"
          className="flex-grow-1 SearchBox__searchInput"
          placeholder="Type any keyword"
          onChange={this.handleTextChange}
          value={this.state.keyword}
        ></input>
        <button
          type="button"
          className="btn SearchBox__searchButton"
          onClick={this.handleSearch}
        >
          Search
        </button>
      </div>
    );
  }
}

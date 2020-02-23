import React from "react";
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { searchMode: false };
  }

  handleSearchModeChange = () => {
    const { searchMode } = this.state;
    const currentEnableSearch = !searchMode;
    this.setState({ searchMode: currentEnableSearch });
    this.props.onModeChange(currentEnableSearch);
  };

  render() {
    const { searchMode: enableSearch } = this.state;
    return (
      <div className="Header__header d-flex justify-content-space-between align-items-center">
        <div className="Header__spacer"></div>
        <div className="ml-3 d-flex flex-row align-items-center">
          <h4 className="font-weight-bold Header__logo mr-1">Phot</h4>
          <FontAwesomeIcon color="red" icon={faHeart} size="lg" />
          <h4 className="font-weight-bold Header__logo ml-1">Browser</h4>
        </div>
        <div className="d-flex justify-content-end mr-2 align-items-center">
          <FontAwesomeIcon color="white" icon={faSearch} size="sm" />
          <label className=" ml-1 mr-2 d-none d-sm-block Header__modeButtonLabel">
            Search Mode
          </label>
          <Toggle
            id="cheese-status"
            defaultChecked={enableSearch}
            onChange={this.handleSearchModeChange}
          />
        </div>
      </div>
    );
  }
}

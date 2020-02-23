import React from "react";
import PhotoLoader from "./PhotoLoader";

export default class MainContent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 d-flex flex-column align-items-center">
          <div className="d-flex flex-column mb-4">
            <h2 className="font-weight-bold">
              Get inspired by world’s beautiful photos
            </h2>
            <p className="text-muted MainContent__subtext">
              Browse photos by photographers around the world and get
              inspiration.
            </p>
          </div>
          <div>
            <PhotoLoader />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}

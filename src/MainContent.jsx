import React from "react";
import PhotoLoader from "./PhotoLoader";
import SearchBox from "./SearchBox";

export default class MainContent extends React.Component {
  constructor() {
    super();
    this.state = { keyword: "" };
  }

  render() {
    const { searchMode, photos, onSearchClick, page, loadPhotos } = this.props;
    const { keyword } = this.state;
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
            {searchMode && (
              <div className="mt-2 mb-2">
                <SearchBox onClick={onSearchClick} />
              </div>
            )}
          </div>
          <div>
            <PhotoLoader
              photos={photos}
              keyword={keyword}
              searchMode={searchMode}
              page={page}
              loadPhotos={loadPhotos}
            />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}

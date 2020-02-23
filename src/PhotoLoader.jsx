import React from "react";
import { Lightbox } from "react-modal-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from "react-infinite-scroll-component";

import PhotoImage from "./PhotoImage";

export default class PhotoLoader extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      selectedPhoto: null
    };
  }

  toggleModalState = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  selectPhoto = photo => {
    this.setState({ selectedPhoto: photo }, this.toggleModalState());
  };

  render() {
    const { searchMode, photos, page, loadPhotos } = this.props;
    const { isModalOpen, selectedPhoto } = this.state;

    return (
      <div>
        {searchMode && photos.length === 0 && (
          <p className="font-weight-bold">Search photos you like :)</p>
        )}
        <InfiniteScroll
          dataLength={page}
          next={loadPhotos}
          className="PhotoLoader__scroll"
          hasMore={photos.length < 300}
          loader={
            photos.length !== 0 && (
              <div>
                <span className="mt-2">
                  <FontAwesomeIcon icon={faSpinner} spin={true} size="lg" />
                </span>
              </div>
            )
          }
          endMessage={
            <div className="d-flex justify-content-center">
              <p className="mt-3 mb-3">
                <b>This is the end of content :)</b>
              </p>
            </div>
          }
        >
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {photos.length !== 0 ? (
              photos.map(photo => (
                <PhotoImage
                  key={photo.id}
                  photo={photo}
                  onClick={this.selectPhoto}
                />
              ))
            ) : (
              <div></div>
            )}
          </div>
        </InfiniteScroll>

        {isModalOpen && (
          <Lightbox
            onClose={this.toggleModalState}
            large={selectedPhoto.imgUrlLg}
            hideDownload={true}
            alt={selectedPhoto.title}
          />
        )}
      </div>
    );
  }
}

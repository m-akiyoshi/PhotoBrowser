import React from "react";
import { getPhotoImages } from "./api/photoLoader";
import PhotoImage from "./PhotoImage";
import { Lightbox } from "react-modal-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from "react-infinite-scroll-component";

export default class PhotoLoader extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      isModalOpen: false,
      selectedPhoto: null,
      page: 0
    };
  }

  toggleModalState = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  selectPhoto = photo => {
    this.setState({ selectedPhoto: photo }, this.toggleModalState());
  };

  componentDidMount() {
    this.loadPhotos();
  }

  loadPhotos = async () => {
    let { page, photos } = this.state;
    page++;
    const newPhotos = await getPhotoImages(page);
    photos = photos.concat(newPhotos);
    this.setState({ photos: photos, page: page });
  };

  render() {
    const { photos, isModalOpen, selectedPhoto, page } = this.state;
    return (
      <div>
        {/* {loading && <FontAwesomeIcon icon={faSpinner} spin={true} size="lg" />} */}

        <InfiniteScroll
          dataLength={page} //This is important field to render the next data
          next={this.loadPhotos}
          hasMore={photos.length < 10}
          loader={
            <span className="mt-2">
              <FontAwesomeIcon icon={faSpinner} spin={true} size="lg" />
            </span>
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
            {photos.map(photo => (
              <PhotoImage photo={photo} onClick={this.selectPhoto} />
            ))}
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

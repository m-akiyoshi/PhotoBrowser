import React from "react";
import MainContent from "./MainContent";
import Header from "./Header";
import { getPhotoImages } from "./api/photoLoader";

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { searchMode: false, photos: [], page: 0 };
  }

  handleModeChange = searchMode => {
    if (searchMode) {
      this.setState({ photos: [], page: 0, keyword: "" });
    } else {
      this.setState({ photos: [], page: 0, keyword: "" }, this.loadPhotos);
    }
    this.setState({
      searchMode: searchMode
    });
  };

  loadPhotos = async () => {
    let { page, photos, searchMode, keyword } = this.state;
    let newPhotos;
    page++;
    if (searchMode) {
      newPhotos = await getPhotoImages(page, searchMode, keyword);
    } else {
      newPhotos = await getPhotoImages(page, searchMode);
    }
    photos = photos.concat(newPhotos);
    this.setState({ photos: photos, page: page });
  };

  handleSearchClick = keyword => {
    this.setState({ keyword, photos: [] }, this.loadPhotos);
  };

  componentDidMount() {
    const { searchMode } = this.state;
    if (searchMode) {
      this.setState({ photos: [], page: 0 });
    } else {
      this.loadPhotos();
    }
  }

  render() {
    const { searchMode, photos, page } = this.state;
    return (
      <div>
        <Header onModeChange={this.handleModeChange} />
        <div className="mt-5">
          <MainContent
            onSearchClick={this.handleSearchClick}
            searchMode={searchMode}
            photos={photos}
            page={page}
            loadPhotos={this.loadPhotos}
          />
        </div>
      </div>
    );
  }
}

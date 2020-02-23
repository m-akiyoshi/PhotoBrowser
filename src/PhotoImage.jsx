import React from "react";

export default class PhotoImage extends React.Component {
  onImageClick = photo => {
    this.props.onClick(photo);
  };

  render() {
    const { photo } = this.props;
    return (
      <div>
        <img
          className="PhotoImage__image"
          src={photo.imgUrlSq}
          alt={photo.title}
          onClick={() => this.onImageClick(photo)}
        ></img>
      </div>
    );
  }
}

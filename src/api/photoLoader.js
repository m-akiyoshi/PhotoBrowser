import { Photo } from "../model/Photo";

async function loadPhotos(page = 1, searchMode, text) {
  const url = getApiUrl(page, searchMode, text);
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

function getApiUrl(page, searchMode, text) {
  const apiKey = process.env.REACT_APP_FLICKER_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  const method = searchMode
    ? "flickr.photos.search"
    : "flickr.photos.getRecent";
  const pagingCount = 30;
  const format = "json";
  const nojsoncallback = 1;
  const url = searchMode
    ? `${apiUrl}/?method=${method}&api_key=${apiKey}&per_page=${pagingCount}&page=${page}&tags=${text}&extras=tags&format=${format}&nojsoncallback=${nojsoncallback}`
    : `${apiUrl}/?method=${method}&api_key=${apiKey}&per_page=${pagingCount}&page=${page}&format=${format}&nojsoncallback=${nojsoncallback}`;
  return url;
}

export async function getPhotoImages(page, searchMode, text) {
  const data = await loadPhotos(page, searchMode, text);
  const photos = data.photos.photo;
  const photoObj = photos.map(photo => {
    return new Photo({
      id: photo.id,
      title: photo.title,
      imgUrlSq: createGetImageUrl(photo, "sq"),
      imgUrlLg: createGetImageUrl(photo, "lg"),
      tags: photo.tags
    });
  });
  return photoObj;
}

function createGetImageUrl(photo, size) {
  let photoId = photo.id;
  let secret = photo.secret;
  let serverId = photo.server;
  let farmId = photo.farm;
  return size === "sq"
    ? `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}_q.jpg`
    : `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}_b.jpg`;
}

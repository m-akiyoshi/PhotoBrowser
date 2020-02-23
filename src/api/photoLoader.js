import { Photo } from "../model/Photo";

async function loadPhotos(page = 1) {
  const url = getLoadRecentPhotosUrl(page);
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

function getLoadRecentPhotosUrl(page) {
  const apiKey = process.env.REACT_APP_FLICKER_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  const method = process.env.REACT_APP_GET_RECENT_METHOD;
  const pagingCount = process.env.REACT_APP_PAGING_COUNT;
  const format = process.env.REACT_APP_FORMAT;
  const nojsoncallback = parseInt(process.env.REACT_APP_NOJSON_CALLBACK);
  return `${apiUrl}/?method=${method}&api_key=${apiKey}&per_page=${pagingCount}&page=${page}&format=${format}&nojsoncallback=${nojsoncallback}`;
}

export async function getPhotoImages(page) {
  const data = await loadPhotos(page);
  const photos = data.photos.photo;
  const photoObj = photos.map(photo => {
    return new Photo({
      title: photo.title,
      imgUrlSq: createGetImageUrl(photo, "sq"),
      imgUrlLg: createGetImageUrl(photo, "lg")
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

import axios from "axios";

export const requestGifs = () => ({
  type: "FETCHING_GIFS"
});

export const recieveGifs = () => ({
  type: "RECIEVE_GIFS"
});

function retrieveUrls({ data }) {
  const { data: dataArr } = data;
  const urls = dataArr.map(gif => gif.images.fixed_height.url);
  console.log(urls);
  return urls;
}

export function fetchGifs(subreddit) {
  return function(dispatch) {
    dispatch(requestGifs());

    return axios
      .get(
        "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"
      )
      .then(data => retrieveUrls(data))
      .then(urls => dispatch(recieveGifs()));
  };
}

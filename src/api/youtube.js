import axios from 'axios';

// const KEY = process.env.REACT_APP_KEY;
// console.log("KEY:", KEY);
// const data = {
//     kind: "",
//     etag: "",
//     regionCode: "",
//     totalResults: 0
// }

const youtube = axios.create({ baseURL: 'https://www.googleapis.com/youtube/v3' });

export const youtubeAPI = async (searchString) => {

    try {
        const response = await youtube.get('/search', {
            params: {
                key: 'AIzaSyD42EvSXNqbeUfN4hvcHcUn6CILBUPRc6o',
                part: 'snippet',
                q: searchString
            }
        });
        // data.kind = response.data.kind;
        // data.etag = response.data.etag;
        // data.regionCode = response.data.regionCode;
        // data.totalResults = response.data.pageInfo.totalResults;
        return response.data.pageInfo.totalResults;
    } catch (error) {
        console.log(error);
    }
}


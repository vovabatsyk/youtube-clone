import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '..';
import { parseData } from '../../utils';
import { YOUTUBE_API_URL } from '../../utils/constants';

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  'youtubeApp/homePageVideos',
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;

    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ''
      }`
    );
    const parsedData = await parseData(items);
    if (parsedData) {
      const data = { parsedData: [...videos, ...parsedData], nextPageToken };
      return data;
    }
    return [];
  }
);

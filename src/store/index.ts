import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../Types';
import { getHomePageVideos } from './reducers/getHomePageVideos';

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: '',
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getHomePageVideos.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    );
  },
});

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
  },
});

export const { clearVideos } = YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

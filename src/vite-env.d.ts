/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_YOUTUBE_DATA_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

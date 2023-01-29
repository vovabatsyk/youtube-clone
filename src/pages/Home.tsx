import { FC, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';

interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
    console.log(videos);
  }, [dispatch]);

  const showVideo = () => {
    console.log(videos);
  };

  return (
    <div className='max-h-screen overflow-hidden bg-zinc-900'>
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <div
        className='flex'
        style={{ height: '92.5vh' }}
      >
        <Sidebar />
        <button onClick={showVideo}>video</button>
      </div>
    </div>
  );
};

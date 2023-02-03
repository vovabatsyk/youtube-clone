import { FC, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from '../components/Card';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Spinner } from '../components/Spinner';
import { clearVideos } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';

interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

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
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
              {videos.map((item, index) => (
                <Card
                  video={item}
                  key={`${item.videoId} + ${index}`}
                />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

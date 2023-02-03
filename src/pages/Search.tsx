import { FC, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { SearchCard } from '../components/SearchCard';
import { Sidebar } from '../components/Sidebar';
import { Spinner } from '../components/Spinner';
import { clearVideos } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

interface ISearchProps {}

export const Search: FC<ISearchProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === '') navigate('/');
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

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
        {/* {videos === undefined && (
          <div className='flex justify-center align-middle'>
            <p className='text-2xl text-gray-400'>Not found!</p>
          </div>
        )} */}
        {videos.length ? (
          <div className='py-8 pl-8 flex flex-col gap-5 w-full'>
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={600}
            >
              {videos.map((item, index) => (
                <div
                  className='my-5'
                  key={`${item.videoId} + ${index}`}
                >
                  <SearchCard video={item} />
                </div>
              ))}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

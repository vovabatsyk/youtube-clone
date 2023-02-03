import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HomePageVideos } from '../Types';

interface ISearchCardProps {
  video: HomePageVideos;
}

export const SearchCard: FC<ISearchCardProps> = ({ video }) => {
  return (
    <div className='flex gap-3 '>
      <div className='relative'>
        <span className='absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10'>
          {video.videoDuration}
        </span>
        <Link to={`/watch/${video.videoId}`}>
          <img
            src={video.videoThumbnail}
            className='h-52 w-96'
            alt='thumbnail'
          />
        </Link>
      </div>
      <div className='flex gap-1 flex-col'>
        <h3 className='max-w-2xl'>
          <a
            href='#'
            className='line-clamp-2'
          >
            {video.videoTitle}
          </a>
        </h3>
        <div className='text-xs text-gray-400'>
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {video.videoViews} views
              </span>
              <span>{video.videoAge}</span>
            </div>
          </div>
        </div>
        <div className='min-w-fit my-2'>
          <a
            href='#'
            className='flex items-center gap-2 text-xs text-gray-400'
          >
            <img
              src={video.channelInfo.image}
              alt='chanel logo'
              className='h-9 w-9 rounded-full'
            />
            <span>{video.channelInfo.name}</span>
          </a>
          <div className='max-w-2xl line-clamp-2 text-sm text-gray-400'>
            <p>{video.videoDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

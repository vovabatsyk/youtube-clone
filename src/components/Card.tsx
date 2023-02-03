import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HomePageVideos } from '../Types';

interface ICardProps {
  video: HomePageVideos;
}

export const Card: FC<ICardProps> = ({ video }) => {
  return (
    <div className='w-64 h-60 flex gap-3 flex-col'>
      <div className='relative'>
        <span className='absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10'>
          {video.videoDuration}
        </span>
        <Link to={`/watch/${video.videoId}`}>
          <img
            src={video.videoThumbnail}
            className='h-44 w-72'
            alt='thumbnail'
          />
        </Link>
      </div>
      <div className='flex gap-2'>
        <div className='min-w-fit'>
          <a href='#'>
            <img
              src={video.channelInfo.image}
              alt='channel'
              className='h-9 w-9 rounded-full'
            />
          </a>
        </div>
        <div>
          <h3>
            <a
              href='#'
              className='line-clamp-2'
            >
              {video.videoTitle}
            </a>
          </h3>
          <div className='text-sm text-gray-400'>
            <div>
              <a
                href='#'
                className='hover:text-white'
              >
                {video.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {video.videoViews} views
              </span>
              <span>{video.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

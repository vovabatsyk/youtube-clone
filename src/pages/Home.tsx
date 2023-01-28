import { FC } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
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
      </div>
    </div>
  );
};

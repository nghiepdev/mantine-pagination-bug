import type {NextPage} from 'next';
import {Pagination} from '@mantine/core';

const Home: NextPage = () => {
  return (
    <div>
      <Pagination id='abc' page={10} total={15000} />
    </div>
  );
};

export default Home;

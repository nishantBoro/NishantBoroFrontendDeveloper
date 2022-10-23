import React from 'react';

import { wrapper } from '../redux/store';

import { PageContainer } from '../modules';

const HomePage = () => {
  return (
    <PageContainer />
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  return {
    props: {}
  };
});

export default HomePage;

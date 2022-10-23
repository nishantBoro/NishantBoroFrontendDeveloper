import React from 'react';

import { wrapper } from '../redux/store';

import { MainContainer } from '../modules';

const HomePage = () => {
  return (
    <MainContainer />
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  return {
    props: {}
  };
});

export default HomePage;

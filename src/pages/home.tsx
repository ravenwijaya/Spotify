import React, { useEffect } from 'react';
import { getNewRelased } from '../store/actions/resources';
import { auth }from '../utils/axios'

const HomePage = () => {
  const getData = async () => {
    await auth();
    const data= await getNewRelased();
    console.log(data)
    return data
  };

  useEffect(() => {
   getData();
  }, []);
  return <h1>Hi</h1>;
};
export default HomePage;

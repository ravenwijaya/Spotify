import React, { useEffect, useState } from 'react';
import { getAlbums } from '../store/actions/resources';
import Card from '../components/card';
import Form from '../components/Form';
import _ from 'lodash';
import './home.css';

const HomePage = () => {
  const [data, setData] = useState<any>();
  const getData = async () => {
    // await auth();
    const data = await getAlbums();
    setData(data);
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  if (_.isEmpty(data)) return null;
  return (
    <>
      <Card data={data} />
      <Form />
    </>
  );
};
export default HomePage;

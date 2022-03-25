import React from 'react';
// import { getAlbums } from '../store/actions/resources';
import Card from '../components/card';
import Form from '../components/Form';
// import _ from 'lodash';
import './home.css';
import data from '../store/data';
import { Flex } from '@chakra-ui/react';
const HomePage = () => {
  // const [data, setData] = useState<any>();
  // const getData = async () => {
  //   const data = await getAlbums();
  //   setData(data);
  //   return data;
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // if (_.isEmpty(data)) return null;
  return (
    <>
      <Flex className="slider">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Flex>

      <Form />
    </>
  );
};
export default HomePage;

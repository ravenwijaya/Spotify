import axios from '../../utils/axios';

export const getNewRelased = async () => {
  const data = await axios
    .get(`/browse/new-releases`)
    .then((res) => res.data)
    .catch(console.error);
  return data ? data : [];
};


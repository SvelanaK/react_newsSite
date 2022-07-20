import instance from './instance';

async function getNewsApi() {
  const { data } = await instance.get('api/news');
  return data;
}

export default getNewsApi;

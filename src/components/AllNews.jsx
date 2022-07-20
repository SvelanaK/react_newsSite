import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewsRequested } from '../redux/actions/newsAction';
import News from './News';
import Loading from './Loading';
import AlertError from './AlertError';

function AllNews() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsRequested());
  }, []);

  const allNews = useSelector((state) => state.news.allNews);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <AlertError />;
  }

  return (
    <>
      {allNews.map((news) => (
        <News
          news={news}
          key={news.id}
        />
      )) }
    </>
  );
}

export default AllNews;

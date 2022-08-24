import { memo, React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import News from './News';
import Loading from './Loading';
import AlertError from './AlertError';

import { getNewsRequested } from '../redux/actions/newsActions';

function AllNews() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsRequested());
  }, []);

  const { allNews } = useSelector((state) => state.news);
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate replace to="/login" />;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <AlertError type="news" />;
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

export default memo(AllNews);

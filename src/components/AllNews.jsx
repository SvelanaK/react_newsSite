import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewsRequested } from '../redux/actions/newsAction';
import News from './News';

function AllNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequested());
  }, []);

  const allNews = useSelector((state) => state.news.allNews);
  return (
    <>
      {allNews.map((elem) => (
        <News
          elem={elem}
        />
      )) }
    </>
  );
}

export default AllNews;

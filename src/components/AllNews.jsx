import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import News from './News';
import getAllNews from '../redux/actions/newsAction';

function AllNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  const allNews = useSelector((state) => state.news.allNews);
  return allNews.map((elem) => (
    <News
      title={elem.title}
      content={elem.content}
      tag={elem.tag}
      key={elem.id}
    />
  ));
}

export default AllNews;

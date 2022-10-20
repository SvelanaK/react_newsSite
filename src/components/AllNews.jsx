import {
  memo,
  React,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import News from './News';
import Loading from './Loading';
import AlertError from './AlertError';
import SearchAndTabs from './SearchAndTabs';
import PagePagination from './PagePagination';

import { getNewsRequested } from '../redux/actions/newsActions';
import filterNews from '../utilities/filterNews';
import usePagination from '../hooks/usePagination';

import '../App.css';

function AllNews() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.news);
  const { allNews } = useSelector((state) => state.news);
  const { isAuth } = useSelector((state) => state.auth);

  const [textInput, setTextInput] = useState('');
  const [tab, setTab] = useState('all');

  const filteredNews = useMemo(
    () => filterNews(textInput, allNews, tab),
    [textInput, tab, allNews],
  );

  const newsLimit = 4;
  const {
    totalPages,
    currentPage,
    setCurrentPage,
    newsPaginArr,
  } = usePagination(filteredNews, newsLimit);

  useEffect(() => {
    dispatch(getNewsRequested());
  }, []);

  if (!isAuth) {
    return <Navigate replace to="/login" />;
  }

  if (allNews.length === 0) {
    return <div className="empty-message">NO NEWS ADDED YET</div>;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <AlertError type="news" />;
  }

  return (
    <>
      <SearchAndTabs setTextInput={setTextInput} setTab={setTab} />
      {newsPaginArr.map((news) => (
        <News
          news={news}
          key={news.id}
        />
      )) }
      <PagePagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default memo(AllNews);

import {
  memo,
  React,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Grid, Pagination } from '@mui/material';

import News from './News';
import Loading from './Loading';
import AlertError from './AlertError';
import SearchAndTabs from './SearchAndTabs';

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
    pagesCount,
    currentPage,
    setCurrentPage,
    pageNews,
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
      {pageNews.map((news) => (
        <News
          news={news}
          key={news.id}
        />
      )) }
      <Grid
        item
        xs={10}
        className="pagination"
      >
        <Pagination
          count={pagesCount}
          page={currentPage}
          size="large"
          color="primary"
          onChange={(event) => setCurrentPage(Number(event.target.textContent))}
          hidePrevButton
          hideNextButton
        />
      </Grid>
    </>
  );
}

export default memo(AllNews);

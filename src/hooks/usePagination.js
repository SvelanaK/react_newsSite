import { useState } from 'react';

function usePagination(newsArray, newsLimit) {
  const [currentPage, setCurrentPage] = useState(1);

  const pagesCount = Math.ceil(newsArray.length / newsLimit);
  const start = (currentPage - 1) * newsLimit;
  const end = currentPage * newsLimit;
  const pageNews = newsArray.slice(start, end);

  return {
    pagesCount,
    currentPage,
    setCurrentPage,
    pageNews,
  };
}

export default usePagination;

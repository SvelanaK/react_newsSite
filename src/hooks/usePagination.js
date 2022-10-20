import { useState } from 'react';

function usePagination(newsArray, newsLimit) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsArray.length / newsLimit);
  const start = (currentPage - 1) * newsLimit;
  const end = currentPage * newsLimit;
  const newsPaginArr = newsArray.slice(start, end);

  return {
    totalPages, currentPage, setCurrentPage, newsPaginArr,
  };
}
export default usePagination;

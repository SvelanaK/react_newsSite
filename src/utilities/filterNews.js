function filterNews(searchText, listOfNews, tab) {
  if (!searchText) {
    return listOfNews;
  }
  const filterNewsByTabs = {
    all: (item) => [
      item.title,
      item.content,
      item.tag,
      item.user.login,
    ],
    authors: (item) => [
      item.user.login,
    ],
    tags: (item) => [
      item.tag,
    ],
  };
  if (!Object.keys(filterNewsByTabs).includes(tab)) {
    return [];
  }
  const filterFields = filterNewsByTabs[tab];
  const lowerCaseText = searchText.toLowerCase();
  return listOfNews.filter((item) => (
    filterFields(item)
      .some((filterText) => (filterText.toLowerCase()).includes(lowerCaseText))
  ));
}
export default filterNews;

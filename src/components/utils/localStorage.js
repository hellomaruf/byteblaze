const getBlogs = () => {
  const storeBlogsCard = localStorage.getItem("blogs-card");
  if (storeBlogsCard) {
    return JSON.parse(storeBlogsCard);
  } else {
    return [];
  }
};
const saveBlogsToLocalStorage = (id) => {
  const storeBlogsCards = getBlogs();
  const exists = storeBlogsCards.find((blogId) => blogId === id);
  if (!exists) {
    storeBlogsCards.push(id);
    localStorage.setItem("blogs-card", JSON.stringify(storeBlogsCards));
  }
};

export { saveBlogsToLocalStorage, getBlogs };

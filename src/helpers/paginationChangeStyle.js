const paginationChangeStyle = (totalItemsCount, activePage) => {
  let i = 0;
  const page = activePage;
  const total = totalItemsCount;

  if (total % 12 <= 4 && total % 12 !== 0) {
    i++;
  }
  if (Math.ceil(total / 12) === page) {
    i++;
  }

  return i;
};

export default paginationChangeStyle;
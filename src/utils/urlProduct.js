const urlProduct = (item) =>
  `/${item.category}/${item.subCategory}/${item.name.replace(/ /g, '-').toLowerCase()}?i=${
    item.id
  }`;

export default urlProduct;

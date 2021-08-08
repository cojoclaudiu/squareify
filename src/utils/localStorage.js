export const loadCart = () => {
  try {
    const serializedCartData = localStorage.getItem('cartSquereify');
    if (serializedCartData === null) {
      return undefined;
    }
    return JSON.parse(serializedCartData);
  } catch (err) {
    return undefined;
  }
};

export const saveCart = (state) => {
  try {
    const serializedCartData = JSON.stringify(state);
    localStorage.setItem('cartSquereify', serializedCartData);
  } catch (err) {
    // ignore for now
  }
};

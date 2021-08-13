import { createContext, useReducer, useState, useEffect } from 'react';
import useData from 'hooks/useData';
import useWindowWidth from 'hooks/useWindowWidth';

export const CarouselViewContext = createContext(null);

const carouselViewReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { start: state.start + 1, end: state.end + 1 };
    case 'decrement':
      return { start: state.start - 1, end: state.end - 1 };
    default:
      return state;
  }
};

const CarouselViewProvider = ({ children }) => {
  const [showItems, setShowItems] = useState(4);
  const width = useWindowWidth();

  useEffect(() => {
    setShowItems(Number(getComputedStyle(document.body).getPropertyValue('--items')));
  }, [width]);

  const { items } = useData();

  const [state, dispatch] = useReducer(carouselViewReducer, { start: 0 });

  const diff = showItems - items.length + state.start;

  const values = {
    start: diff <= 0 ? state.start : state.start - showItems,
    end: diff <= 0 ? state.start + showItems : state.start,
  };

  const value = { state: values, dispatch, items };
  return <CarouselViewContext.Provider value={value}>{children}</CarouselViewContext.Provider>;
};

export default CarouselViewProvider;

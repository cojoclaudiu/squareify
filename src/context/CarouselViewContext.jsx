import { createContext, useReducer } from 'react';
import useData from 'hooks/useData';
import useWidth from 'hooks/useWidth';

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

const getNumItems = (windowSize) => {
  if (windowSize < 621) return 1;
  if (windowSize < 921) return 2;
  if (windowSize < 1240) return 3;

  return 4;
};

const CarouselViewProvider = ({ children }) => {
  const { items } = useData();
  const width = useWidth();

  const [state, dispatch] = useReducer(carouselViewReducer, { start: 0 });

  const diff = getNumItems(width) - items.length + state.start;

  const values = {
    start: diff <= 0 ? state.start : state.start - getNumItems(width),
    end: diff <= 0 ? state.start + getNumItems(width) : state.start,
  };

  const value = { state: values, dispatch, items };
  return <CarouselViewContext.Provider value={value}>{children}</CarouselViewContext.Provider>;
};

export default CarouselViewProvider;

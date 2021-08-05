import { createContext, useReducer } from 'react';
import useWidth from '../hooks/useWidth';

export const CarouselViewContext = createContext(null);

const carouselViewReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { start: state.start + 1 };
    case 'decrement':
      return { start: state.start - 1 };
    default:
      return state;
  }
};

const widths = [621, 921, 1240];

const getNumItems = (windowWidth) => {
  const index = widths.findIndex((width) => windowWidth < width);
  return index === -1 ? 4 : index + 1;
};

const CarouselViewProvider = ({ children }) => {
  const width = useWidth();

  const [state, dispatch] = useReducer(carouselViewReducer, { start: 0 });
  const numItems = getNumItems(width);
  const diff = state.start - numItems;
  const values = {
    start: diff < 0 ? state.start : diff,
    end: diff < 0 ? state.start + numItems : state.start,
  };
  const value = { state: values, dispatch };
  return <CarouselViewContext.Provider value={value}>{children}</CarouselViewContext.Provider>;
};

export default CarouselViewProvider;

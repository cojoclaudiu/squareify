import { createContext, useReducer } from 'react';
import useWidth from '../hooks/useWidth';

export const CarouselViewContext = createContext({
  start: null,
  end: null,
});

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
  const width = useWidth();

  function getNumItems(windowWidth) {
    if (windowWidth < 921) return 2;
    if (windowWidth < 1240) return 3;
    return 4;
  }

  const [state, dispatch] = useReducer(carouselViewReducer, { start: 0 });
  const values = { start: state.start, end: state.start + getNumItems(width) };
  const value = { state: values, dispatch };
  return <CarouselViewContext.Provider value={value}>{children}</CarouselViewContext.Provider>;
};

export default CarouselViewProvider;

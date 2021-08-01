import { createContext, useReducer } from 'react';

export const CarouselViewContext = createContext({ start: 0, end: 4 });

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
  const [state, dispatch] = useReducer(carouselViewReducer, { start: 0, end: 4 });
  const value = { state, dispatch };
  return <CarouselViewContext.Provider value={value}>{children}</CarouselViewContext.Provider>;
};

export default CarouselViewProvider;

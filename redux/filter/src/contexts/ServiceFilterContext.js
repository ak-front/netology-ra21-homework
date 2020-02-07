import { createContext } from 'react';

const ServiceFilterContext = createContext({
  filter: '',
  setFilter: () => null
});

export default ServiceFilterContext;

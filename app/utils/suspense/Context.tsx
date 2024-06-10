import React, { createContext, useContext, useMemo } from 'react';
import { ResourcePool } from '.';

const SustainedResourceContext = createContext<ResourcePool>(new ResourcePool(100));

export const useResourcePoolContext = () => useContext(SustainedResourceContext);

type Props = {
  children: React.ReactNode;
};

export const ResourcePoolProvider: React.FC<Props> = ({ children }) => {
  const sustained = useMemo(() => new ResourcePool(100), []);

  return (
    <SustainedResourceContext.Provider value={sustained}>
      {children}
    </SustainedResourceContext.Provider>
  );
};

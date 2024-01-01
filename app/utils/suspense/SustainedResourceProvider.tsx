import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { SustainedResource } from '.';

const SustainedResourceContext = createContext<SustainedResource>(new SustainedResource());

export const useSustainedResourceContext = () => useContext(SustainedResourceContext);

type Props = {
  delay?: number;
  children: React.ReactNode;
};

const DEFAULT_DELAY = 30000;

export const SustainedResourceProvider: React.FC<Props> = ({ delay = DEFAULT_DELAY, children }) => {
  const sustained = useMemo(() => new SustainedResource(), []);

  useEffect(() => {
    if (delay > 0) {
      const intervalId = setInterval(() => {
        console.info('sustained cache clean');
        sustained.clear();
      }, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay, sustained]);
  return (
    <SustainedResourceContext.Provider value={sustained}>
      {children}
    </SustainedResourceContext.Provider>
  );
};

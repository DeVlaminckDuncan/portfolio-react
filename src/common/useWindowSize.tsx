import * as React from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const getSize = React.useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient],
  );

  const [windowSize, setWindowSize] = React.useState(getSize);

  const handleResize = React.useCallback(() => {
    setWindowSize(getSize());
  }, [getSize]);

  React.useEffect(() => {
    if (isClient) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize, isClient, handleResize]);

  return windowSize;
};

export default useWindowSize;

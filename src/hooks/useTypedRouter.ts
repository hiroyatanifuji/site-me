import { useRouter } from 'next/router';
import React from 'react';
import { Path } from '../paths';

const useTypedRouter = () => {
  const router = useRouter();

  const handleTypedPush = React.useCallback(
    (path: Path, as?: string, option?: Parameters<typeof router.push>[2]) => router.push(path, as, option),
    [router],
  );
  const handleTypedReplace = React.useCallback(
    (path: Path, as?: string, option?: Parameters<typeof router.replace>[2]) => router.replace(path, as, option),
    [router],
  );

  return {
    ...router,
    push: handleTypedPush,
    replace: handleTypedReplace,
  };
};

export default useTypedRouter;

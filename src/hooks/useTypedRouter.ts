import { useRouter } from 'next/router';
import React from 'react';
import { TypedLinkProps } from '../routes';

const useTypedRouter = () => {
  const router = useRouter();

  const handleTypedPush = React.useCallback(
    (linkProps: TypedLinkProps, option?: Parameters<typeof router.push>[2]) =>
      router.push(linkProps.href, linkProps.as, option),
    [router],
  );
  const handleTypedReplace = React.useCallback(
    (linkProps: TypedLinkProps, option?: Parameters<typeof router.replace>[2]) =>
      router.replace(linkProps.href, linkProps.as, option),
    [router],
  );

  return {
    ...router,
    push: handleTypedPush,
    replace: handleTypedReplace,
  };
};

export default useTypedRouter;

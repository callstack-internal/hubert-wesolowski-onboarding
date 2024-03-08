import { PropsWithChildren } from 'react';

import { ErrorMessage } from './partials/error-message';
import { Loading } from './partials/loading';
import { ErrorMessageProps } from './status-container.types';

type Props = ErrorMessageProps & {
  isLoading?: boolean;
  isError?: boolean;
};

export const StatusContainer = ({
  isLoading,
  isError,
  children,
  ...messageErrorProps
}: PropsWithChildren<Props>) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage {...messageErrorProps} />;
  }

  return <>{children}</>;
};

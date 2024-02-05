import { type FC, type ReactElement } from 'react';
import { useRouteComponent } from './routerUtils';

interface ProtectedRouteProps {
  Component?: ReactElement<any, any>;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ Component }) => {
  const routeComponent = useRouteComponent(Component);
  return routeComponent;
};

export default ProtectedRoute;

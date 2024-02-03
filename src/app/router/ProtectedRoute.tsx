import { type FC, useLayoutEffect, type ReactElement } from 'react';
import { useAppDispatch } from 'app/store/hooks';
import { checkAuth } from 'entities/user';
import { useRouteComponent } from './routerUtils';

interface ProtectedRouteProps {
  Component?: ReactElement<any, any>;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ Component }) => {
 
  const routeComponent = useRouteComponent(Component);
  return routeComponent;
};

export default ProtectedRoute;

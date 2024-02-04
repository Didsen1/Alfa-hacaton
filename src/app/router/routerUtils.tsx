import { Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { checkAuth } from 'entities/user';
import { useState, type ReactElement, useLayoutEffect } from 'react';

// prettier-ignore
export const useRouteComponent = (Component?: ReactElement<any, any>) => {
  const [ReturnComponent, setReturnComponent] = useState<ReactElement<any, any>>()
  const { type } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (!type || type === 'unset') {
      dispatch(checkAuth());
    }
  }, [dispatch, type]);
  
  useLayoutEffect(() => {
    if (type === 'unset') {
      if (pathname === '/login') {
        setReturnComponent(Component);
      } else {
        setReturnComponent(<Navigate to="/login" replace />);
      }
    } 
    
    else if (pathname === '/') {
      if (type === 'employee') {
        setReturnComponent(<Navigate to="/plan" replace />);
      } else if (type === 'superior') {
        setReturnComponent(<Navigate to="/admin" replace />);
      } else {
        setReturnComponent(<Navigate to="/login" replace />)
      }
    } 
    
    else if (type === 'employee') {
      if (pathname.slice(0, 7) === '/admin') {
        setReturnComponent(<Navigate to="/plan" replace />);
      }
      setReturnComponent(Component);
    } 
    
    else if (type === 'superior') {
      if (pathname.slice(0, 6) === '/plan') {
        setReturnComponent(<Navigate to="/admin" replace />);
      }
      setReturnComponent(Component);
    }
  }, [Component, pathname, type]);

  return ReturnComponent;
};

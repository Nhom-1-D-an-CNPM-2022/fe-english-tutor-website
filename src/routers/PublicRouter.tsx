import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { RootState } from '../redux/rootReducer';
import { getInfo } from '../redux/slice/appSlice/userSlice';
import { useAppDispatch } from '../redux/store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export const PublicRouter: React.FC<IPublicRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
  header: Header,
  footer: Footer,
  isHasFooter,
  isHasHeader,
  titleHeader,
  typeHeader,
}) => {
  let query = new URLSearchParams(useLocation().search).get('text');
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();
  const isAccount = useSelector((state: RootState) => state.userSlice.isAccount);
  const [isFetch, setIsFectch] = useState(false);
  const fecthInfo = async () => {
    const check = (await dispatch(getInfo({ accessToken: localStorage.getItem('accessToken') })))
      .payload;

    if (
      check === true ||
      check === false ||
      String(typeof check) === 'object' ||
      check === undefined
    ) {
      setIsFectch(true);
    }
  };

  useEffect(() => {
    fecthInfo();
    return;
  }, [location]);

  const render = (props: any) => {
    if (!isFetch) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    }

    if (isAccount) {
      return <Redirect to="/student/tutors" />;
    }

    return (
      <Layout
        header={
          isHasHeader ? (
            <Header
              title={titleHeader}
              titleDynamic={query}
              type={typeHeader}
              onClick={props.history.goBack}
            />
          ) : (
            <></>
          )
        }
        footer={isHasFooter ? <Footer /> : <></>}
      >
        <Component {...props} />
      </Layout>
    );
  };
  return <Route exact={exact} path={path} render={render} />;
};

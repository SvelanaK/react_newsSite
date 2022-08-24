import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

import Loading from './Loading';
import AlertError from './AlertError';
import News from './News';

import '../App.css';
import { getUserPageRequested } from '../redux/actions/usersActions';

function UserInfo() {
  const {
    siteUser,
    usersNews,
    loading,
    error,
  } = useSelector((state) => state.siteUser);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPageRequested(id));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <AlertError type="news" />;
  }

  return (
    <>
      <Grid
        item
        xs={10}
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Card sx={{ display: 'flex' }} elevation={0}>
          <CardMedia
            component="img"
            sx={{ width: 350, borderRadius: 5 }}
            image="https://cdn.ren.tv/cache/960x540/media/img/7d/4e/7d4e1c868f36e52de337b474dd6d9f1953072c8e.jpg"
            alt="userAvatar"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4 }}>
            <CardContent>
              <Typography component="div" variant="h5">
                {siteUser.login}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {siteUser.email}
              </Typography>
            </CardContent>
            <Box sx={{
              display: 'flex', alignItems: 'center', pl: 1, pb: 1,
            }}
            />
            { +id === user.id ? (
              <Button variant="text" size="small" sx={{ width: 130 }}>
                Edit profile
              </Button>
            ) : <Box />}

          </Box>
        </Card>
        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end',
        }}
        >
          { +id === user.id ? (
            <Button variant="contained" size="large">
              <Link to="/addNews" className="link">Add news</Link>
            </Button>
          ) : <Box />}
        </Box>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Typography component="div" variant="h4" sx={{ mt: 10 }}>
          My Posts
        </Typography>
      </Grid>
      {usersNews.map((news) => (
        <News
          news={news}
          key={news.id}
        />
      )) }
    </>
  );
}

export default memo(UserInfo);

import {
  React,
  memo,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  Collapse,
} from '@mui/material';

import NewsForm from './forms/NewsForm';
import EditProfileForm from './forms/EditProfileForm';
import Loading from './Loading';
import AlertError from './AlertError';
import News from './News';

import { getUserPageRequested } from '../redux/actions/usersActions';

import '../App.css';

function UserInfo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [edit, setEdit] = useState(false);
  const editOpen = () => setEdit(true);
  const editClose = () => setEdit(false);

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
        className="user-grid"
      >

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NewsForm open={open} handleClose={handleClose} />
        </Modal>

        <Card sx={{ display: 'flex' }} elevation={0}>
          <CardMedia
            component="img"
            sx={{ width: 350, borderRadius: 5 }}
            image={
              +id === user.id
                ? `${process.env.REACT_APP_BASE_URL}${user.picture}`
                : `${process.env.REACT_APP_BASE_URL}${siteUser.picture}`
            }
            alt="userAvatar"
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4 }}>
            <CardContent>
              <Typography component="div" variant="h5">
                { +id === user.id ? user.login : siteUser.login}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                { +id === user.id ? user.email : siteUser.email}
              </Typography>
            </CardContent>
            <Box sx={{
              display: 'flex', alignItems: 'center', pl: 1, pb: 1,
            }}
            />
            { +id === user.id ? (
              <>
                <Button onClick={editOpen} variant="text" size="small" sx={{ width: 130 }}>
                  Edit profile
                </Button>
                <Collapse className="edit-modal" orientation="horizontal" in={edit}>
                  <EditProfileForm handleClose={editClose} />
                </Collapse>

              </>
            ) : <Box />}

          </Box>
        </Card>
        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end',
        }}
        >
          { +id === user.id ? (
            <Button onClick={handleOpen} variant="contained" size="large">
              Add news
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

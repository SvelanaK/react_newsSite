import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material';

import { getUserPageRequested } from '../redux/actions/usersActions';

import '../App.css';

function News({ news }) {
  const { siteUser } = useSelector((state) => state.siteUser);
  const dispatch = useDispatch();
  return (
    <Grid item xs={5} sx={{ mb: 3 }}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography sx={{ mb: 3 }} color="text.secondary">
            {news.tag}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            onClick={() => dispatch(getUserPageRequested(news.userId))}
            to={`/users/${news.userId}`}
            className="link"
          >
            <Button>
              {news.user ? news.user.login : siteUser.login}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

News.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
    content: PropTypes.string,
    userId: PropTypes.number,
    user: PropTypes.shape({
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default memo(News);

import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material';

function News({ elem }) {
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
            { elem.title }
          </Typography>
          <Typography sx={{ mb: 3 }} color="text.secondary">
            { elem.tag }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { elem.content }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Author</Button>
        </CardActions>
      </Card>
    </Grid>

  );
}

News.propTypes = {
  elem: PropTypes.string.isRequired,
};

export default News;

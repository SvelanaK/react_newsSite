import React from 'react';

import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function News({ title, tag, content }) {
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
            { title }
          </Typography>
          <Typography sx={{ mb: 3 }} color="text.secondary">
            { tag }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { content }
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
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  // key: PropTypes.integer.isRequired,
};

export default News;

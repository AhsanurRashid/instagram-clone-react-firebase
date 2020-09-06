import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      Width: '100%',
      marginBottom: '50px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    post__addcomment: {
        width: '100%!important',
    }
  }));

function Post({username, captin, imageUrl}) {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={username}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {captin}
                    </Typography>
                </CardContent>
                <CardContent>
                    <form>
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                            <Grid item xs={12} sm={10} direction="row" justify="center" alignItems="center">
                                <TextField className={classes.post__addcomment} label="Add a comment..." />
                            </Grid>
                            <Grid item xs={12} sm={2} direction="row" justify="center" alignItems="center">
                                <Button color="secondary">Post</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Post

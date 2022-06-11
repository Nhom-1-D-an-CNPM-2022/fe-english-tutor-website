import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));

const Comment = ({ id, name, date, body } : any) => {
  const classes = useStyles();
  return(
    <React.Fragment key={id}>
    <ListItem key={id} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="avatar" src="https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography className={classes.fonts}>
            {name}
          </Typography>
        }
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {date}
            </Typography>
            {` - ${body}`}
          </>
        }
      />
    </ListItem>
    <Divider />
  </React.Fragment>
  )
}

export default Comment;
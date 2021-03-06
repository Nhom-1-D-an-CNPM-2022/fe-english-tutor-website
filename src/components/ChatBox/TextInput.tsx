import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SendIcon from '@mui/icons-material/Send';
import Button from '@material-ui/core/Button';
import Context from '../../containers/State/Context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: 'flex',
      justifyContent: 'center',
      width: '95%',
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: '100%',
    },
    button: {
      //margin: theme.spacing(1),
    },
  }),
);

export const TextInput = () => {
  const classes = useStyles();
  const { sendMessage } = React.useContext(Context);
  const [text, setText] = React.useState('');

  const handleSendMessage = () => {
    sendMessage(text);
    setText('');
  };

  const handleChangeText = (e: any) => {
    setText(e.target.value);
  };

  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Tin nhắn"
          className={classes.wrapText}
          onChange={handleChangeText}
          value={text}
          //margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          <SendIcon onClick={handleSendMessage} />
        </Button>
      </form>
    </>
  );
};

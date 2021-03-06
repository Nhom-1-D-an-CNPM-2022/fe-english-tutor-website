import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { TextInput } from './TextInput';
import { MessageLeft, MessageRight } from './Message';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Context from '../../containers/State/Context';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '400px',
      height: '400px',
      maxWidth: '500px',
      maxHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'sticky',
      backgroundColor: 'white',
      paddingBottom: '10px',
      top: '300px',
      zIndex: 4,
    },
    paper2: {
      width: '80vw',
      maxWidth: '500px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
    },
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'end',
      position: 'absolute',
      left: '-10px',
      top: '300px',
    },
    messagesBody: {
      width: 'calc( 100% - 20px )',
      margin: 10,
      overflowY: 'scroll',
      height: 'calc( 100% - 80px )',
    },
    headerAction: {
      paddingRight: '10px',
      width: '100%',
      justifyContent: 'end',
      display: 'flex',
    },
    closeButton: {
      marginTop: '10px',
    },
  }),
);

interface IChatBox {
  open: boolean;
  onClose: () => void;
}

const ChatBox: React.FC<IChatBox> = ({ open, onClose }) => {
  const classes = useStyles();
  const { messages, setIsOpenChat, isOpenChat } = React.useContext(Context);
  const account = useSelector((state: RootState) => state.userSlice.account);
  const handleCloseChatBox = () => {
    onClose();
    setIsOpenChat(false);
  };

  return (
    <div
      className={classes.container}
      style={{ visibility: open || isOpenChat ? 'visible' : 'hidden' }}
    >
      <Paper className={classes.paper}>
        <div className={classes.headerAction}>
          <IconButton className={classes.closeButton} onClick={handleCloseChatBox}>
            <CloseIcon />
          </IconButton>
        </div>
        <Paper id="style-1" className={classes.messagesBody}>
          {messages?.map((m: any) =>
            m.from === account.userId ? (
              <MessageRight
                message={m.content}
                // timestamp="MM/DD 00:00"
                // photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName={account.name}
                avatarDisp={true}
              />
            ) : (
              <MessageLeft
                message={m.content}
                // timestamp="MM/DD 00:00"
                displayName={m.name}
                avatarDisp={false}
              />
            ),
          )}
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
};

export default ChatBox;

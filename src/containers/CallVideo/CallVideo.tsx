import React, { useState, useEffect } from 'react';
import './CallVideo.scss';

import { Alert, AlertTitle, Button, Stack } from '@mui/material';

import { apiVideoCall } from '../../helpers/videoCall';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

export const CallVideo = () => {
  const [roomId, setRoomId] = useState('');
  const [roomToken, setRoomToken] = useState('');
  const [userToken, setUserToken] = useState('');
  const [client, setClient] = useState('');
  const [video, setVideo] = useState('');
  const account = useSelector((state: RootState) => state.userSlice.account);

  const handleLogin = async () => {
    if (!account) {
      return;
    }

    return new Promise(async (resolve) => {
      const userToken = await apiVideoCall.getUserToken(account.IDUser);
      const client = new StringeeClient();
      client.on('authen', (result: any) => {
        console.log('on authen: ', result);
        resolve(result);
      });
      client.connect(userToken);

      setUserToken(userToken);
      setClient(client);
    });
  };

  const handleCreateRoom = async () => {
    const room = await apiVideoCall.createRoom();
    const roomToken = await apiVideoCall.getRoomToken(room.roomId);

    setRoomId(room.roomId);
    setRoomToken(roomToken);

    await handleLogin();
  };

  const handleJoinRoom = async () => {
    const roomId = prompt('Nhập Room ID vào đây');

    if (!roomId) {
      return;
    }

    const roomToken = await apiVideoCall.getRoomToken(roomId);
    setRoomId(roomId);
    setRoomToken(roomToken);
  };

  const handlePublicVideo = async () => {
    if (!client) {
      return;
    }

    const localTrack = await StringeeVideo.createLocalVideoTrack(client, {
      audio: true,
      video: true,
      videoDimensions: {
        width: 640,
        height: 320,
      },
    });

    const videoElement = localTrack.attach();

    setVideo(videoElement);
  };

  useEffect(() => {
    apiVideoCall.setRestToken();
  }, []);

  useEffect(() => {
    handlePublicVideo();
  }, [client]);

  return (
    <Stack sx={{ width: '50%' }} spacing={2}>
      {roomId && (
        <Alert severity="info">
          <AlertTitle>RoomID</AlertTitle>
          <strong>{roomId}</strong>
        </Alert>
      )}
      <Button variant="contained" onClick={handleCreateRoom}>
        Tạo Room
      </Button>
      <Button variant="contained" onClick={handleJoinRoom}>
        Vào Room
      </Button>
      <div></div>
    </Stack>
  );
};

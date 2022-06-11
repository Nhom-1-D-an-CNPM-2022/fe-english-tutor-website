import VideocamIcon from '@mui/icons-material/Videocam';
import { Stack } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { RecordRTCPromisesHandler } from 'recordrtc';
import { ProfileStepContext } from '../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';
import { MediaWrapperBox } from '../../../../base/boxes';
import Button from '../../../../base/Button/Button';
import Dialog from './Dialog';

type Phase = 'begin' | 'start' | 'complete';

export default function RecordDialog() {
  const { dialog, isErrorChecked, handleSaveDialog, handleChangeString } =
    useContext(ProfileStepContext);
  const [recorder, setRecorder] = useState<RecordRTCPromisesHandler | null>();
  const [stream, setStream] = useState<MediaStream | null>();
  const [videoBlob, setVideoBlob] = useState<Blob | null>();
  const [phase, setPhase] = useState<Phase>('begin');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startRecording = async () => {
    const currentStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    setStream(currentStream);

    if (videoRef.current) {
      videoRef.current.srcObject = currentStream;
    }

    const recorder = new RecordRTCPromisesHandler(currentStream, {
      type: 'video',
    });

    setRecorder(recorder);
    setPhase('start');
    await recorder.startRecording();
  };

  const stopRecording = async () => {
    if (recorder) {
      await recorder.stopRecording();
      const blob = await recorder.getBlob();
      setVideoBlob(blob);

      if (videoRef.current) {
        videoRef.current.src = await recorder.getDataURL();
      }

      setPhase('complete');
    }
  };

  const resetRecording = () => {
    setPhase('begin');
  };

  const saveRecording = () => {
    setStream(null);
    setRecorder(null);
  };

  return (
    <Dialog
      open={dialog === 'RECORD'}
      titleIcon={<VideocamIcon />}
      title="Profile Video"
      onClickSave={() => {}}
      actionsHidden
    >
      <MediaWrapperBox height="339px">
        <video ref={videoRef} />
      </MediaWrapperBox>

      <Stack direction="row" justifyContent="center" marginY={1.25} spacing={1.25}>
        {phase === 'begin' && (
          <Button type="contained" onClick={startRecording}>
            Record
          </Button>
        )}
        {phase === 'start' && (
          <Button type="contained" onClick={stopRecording}>
            Stop
          </Button>
        )}
        {phase === 'complete' && (
          <>
            <Button type="contained" color="lightGrey" onClick={resetRecording}>
              Reset
            </Button>
            <Button type="contained" onClick={saveRecording}>
              Save
            </Button>
          </>
        )}
      </Stack>
    </Dialog>
  );
}

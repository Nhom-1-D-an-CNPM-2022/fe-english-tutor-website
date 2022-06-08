import { Grid, Stack } from "@mui/material";
import React, { useRef } from "react";
import { LinearProgressBox } from "../../base/boxes";
import Button from "../../base/Button/Button";
import LinearProgress from "../../base/Progress/LinearProgress";
import { gridContainerStyle, gridItemStyle } from "./style";

export default function TestingPhase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 10 : prevProgress + 10,
      );
    }, 800);

    const record = async () => {
      let chunks: any = [];
      let recorder: MediaRecorder;

      try {
        //wait for the stream promise to resolve
        let stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        recorder = new MediaRecorder(stream);

        recorder.ondataavailable = e => {
          chunks.push(e.data);
        };

        recorder.onstop = e => {
          const blob = new Blob(chunks, { type: "audio/webm" });
          let testAudioRecord = URL.createObjectURL(blob);
          console.log(testAudioRecord);
        };

        recorder.start(1000);

        setTimeout(() => {
          recorder.stop();
        }, 2000);
      } catch (e) {
        console.log("error getting stream", e);
      }
    };

    record();

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid sx={gridContainerStyle} container>
      <Grid sx={gridItemStyle} item xs={6}>
        <video ref={videoRef} playsInline autoPlay />
      </Grid>
      <Grid sx={gridItemStyle} item xs={6}>
        <Stack spacing={3}>
          <LinearProgressBox leftLabel="Video" rightLabel="0.00Mbit/s">
            <LinearProgress variant="determinate" value={progress} />
          </LinearProgressBox>
          <LinearProgressBox leftLabel="Audio" rightLabel="0.00Mbit/s">
            <LinearProgress variant="determinate" value={progress} />
          </LinearProgressBox>
          <LinearProgressBox leftLabel="Packet Loss" rightLabel="0.00Mbit/s">
            <LinearProgress variant="determinate" value={progress} />
          </LinearProgressBox>
        </Stack>
      </Grid>
      <Grid sx={gridItemStyle} item xs={12}>
        <Button type="contained" color="secondary">
          Try again
        </Button>
      </Grid>
    </Grid>
  );
}

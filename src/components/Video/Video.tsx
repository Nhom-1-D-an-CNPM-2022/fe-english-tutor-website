import React from 'react'
import './Video.scss';
//import Context from './Context'

interface IVideo{
    isVid: any;
    isMute: any;
    myVideo: any;
  }


export const  Video: React.FC<IVideo> = ({isMute, isVid, myVideo}) => {

    return (
      <video
        playsInline = {true}
        muted = {isMute}
        ref={myVideo}
        autoPlay= {true}
        className="video-active"
        style={{
          opacity: `${isVid ? "1" : "0"}`,
        }}
      />
    )
}

//export default VideoCall;
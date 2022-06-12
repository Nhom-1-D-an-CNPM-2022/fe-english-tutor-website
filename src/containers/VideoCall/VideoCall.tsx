import React, { useContext, useEffect}from 'react'
import {FaPhoneSlash, FaMicrophone, FaMicrophoneSlash }  from 'react-icons/fa';
import {BsCameraVideoFill, BsCameraVideoOffFill, BsFillChatRightDotsFill} from 'react-icons/bs';
import {MdOutlineScreenShare, MdOutlineStopScreenShare} from 'react-icons/md'
import { Video } from '../../components'
import './VideoCall.scss';
import Context from '../State/Context'

export const VideoCall =  () => {
    const {
      userVideo,
      isCall,
      iCall,
      acceptCall,
      myVideo,
      yourMic,
      myMic,
      yourVid,
      myVid,
      callSuccess,
      setVideoStatus,
      setMicroStatus,
      leaveCall,
      handleScreenSharing,
      screenShare,
    } = useContext(Context);

    useEffect(()=>{
      navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        console.log(currentStream);
          myVideo.current.srcObject = currentStream;
        console.log(isCall)
        if (isCall)
        iCall()
        else
        acceptCall();
      })
    }, [])

    return (
      <div style={{display: 'flex', flexFlow: 'Column'}}>
        <div className="grid">
          <div style={{ textAlign: "center" }} className="card">
              <Video isMute = {true} isVid = {myVid} myVideo={myVideo}/>
          </div>
          <div className="card2">
              {callSuccess ?
              <Video isMute = {yourMic} isVid = {yourVid} myVideo={userVideo}/>
              :
              <h2>Calling ...</h2>
              }
          </div>
        </div>
      <div style={{textAlign: 'center', marginTop: '10px'}}>
            {myMic ? <button style={{width:'50px', height: '50px', margin: '10px', cursor:'pointer'}} onClick={setMicroStatus}><FaMicrophoneSlash/></button>
            :
            <button style={{width:'50px', height: '50px', margin: '10px', cursor:'pointer'}} onClick={setMicroStatus}><FaMicrophone/></button>}
            {myVid ? <button style={{width:'50px', height: '50px', margin: '10px', cursor:'pointer'}} onClick={setVideoStatus}><BsCameraVideoFill /></button>
            :
            <button  style={{width:'50px', height: '50px', margin: '10px', cursor:'pointer'}} onClick={setVideoStatus}><BsCameraVideoOffFill/></button>}
            {!screenShare? <button style={{width:'50px', height: '50px', margin: '10px', cursor:'pointer'}} onClick={handleScreenSharing}><MdOutlineScreenShare/></button>
            :
            <button style={{width:'50px', height: '50px', margin: '10px', cursor:'pointer'}} onClick={handleScreenSharing}><MdOutlineStopScreenShare /></button>}
            <button style={{width:'50px', height: '50px', margin: '10px', display: 'inline', cursor:'pointer'}}><BsFillChatRightDotsFill/></button>
            <button onClick={leaveCall} style={{width:'50px', height: '50px', margin: '10px', color: 'red', cursor:'pointer'}}><FaPhoneSlash /></button>
        
      </div>
      </div>
    )
    
}

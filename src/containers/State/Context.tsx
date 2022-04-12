import { createContext } from "react";

interface IContext {
    onlineList: any;
          receiveCall: any;
          otherUser: any;
          acceptCall: any;
          setReceiveCall: any;
          decline: any;  
          callUser: any;
          myVideo: any;
          userVideo: any;
          setVideo: any;
          iCall: any;
          isCall: any;
          video: any;
          yourMic: any;
          myMic: any;
          yourVid: any;
          myVid: any;
          callSuccess: any;
          setVideoStatus: any;
          setMicroStatus: any;
          leaveCall: any;
          handleScreenSharing: any;
          screenShare: any;
          iCall1: any;
}

const Context = createContext<IContext|null>(null);
export default Context;
import React,{ createContext,useEffect,useRef,useState } from "react";

import { io } from 'socket.io-client';

import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("http://localhost:5000/");

const ContextProvider = ({ children }) => {

    const [call,setCall] = useState({})
    const [me,setMe] = useState('');
    const [stream,setStream] = useState(null);
    const [callAccepted,setcallAccepted] = useState(false);
    const [callEnded,setcallEnded] = useState(false);
    const [name,setName] = useState('')

    const CallerVideo = useRef();
    const ReceiverVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video:true, audio:true })
            .then((currentStream) => {
                setStream(currentStream);

                CallerVideo.current.srcObject = currentStream;
            })
            .catch(error => {
                console.error('Error accessing media devices.', error);
            });

            socket.on('me',id => setMe(id));

            socket.on('calluser', ({ from,name : callerName,signal }) => {
                setCall({ isReceivedCall:true ,from ,name: callerName, signal});
            })
    },[]) 

    const answerCall = () => {
        setcallAccepted(true);

        const peer = new Peer({ initiator:false, trickle:false ,stream})

        peer.on('signal', (data) => {
            socket.emit('answercall', { signal: data, to: call.from});
        });

        peer.on('stream',(currentStream) => {
            ReceiverVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    }

    const callUser = (id) => {
        const peer = new Peer({ initiator:true, trickle:false ,stream})

        peer.on('signal', (data) => {
            socket.emit('callUser', { userToCall: id, signalData: data, from :me ,name});
        });

        peer.on('stream',(currentStream) => {
            ReceiverVideo.current.srcObject = currentStream;
        });


        socket.on('callAccepted',(signal) => {
            setcallAccepted(true);

            peer.signal(signal);
        });
        
        connectionRef.current = peer;

    }

    const leaveCall = () => {
        setcallEnded(true);

        connectionRef.current.destroy();

        window.location.reload();
    }

    return (
        <SocketContext.Provider value={{
            call,
            callAccepted,
            CallerVideo,
            ReceiverVideo,
            stream,
            name,
            setName,
            callEnded,
            me, 
            callUser,
            leaveCall,
            answerCall
        }}>
            {children}
        </SocketContext.Provider>
    )
    
};


export { ContextProvider, SocketContext };
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'

const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {
    const [socket,setSocket] = useState(null)
    const [onlineUsers,setOnlineUsers] = useState([])

    const {authUser} = useAuthContext()

    useEffect(() => {
        if (!authUser) {
            if (socket) {
                socket.close();
                setSocket(null);
            }
            return;
        }
    
        if (!socket) {
            const newSocket = io('http://localhost:8000', {
                query: { userId: authUser._id }
            });
    
            setSocket(newSocket);
    
            newSocket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });
    
            return () => {
                newSocket.close();
            };
        }
    }, [authUser])
    

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
    )
}
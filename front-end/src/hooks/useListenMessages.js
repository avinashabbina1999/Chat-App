import { useEffect,useRef } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from '../assets/sounds/notification.mp3'


const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	const messagesRef = useRef(messages);

	useEffect(() => {
		messagesRef.current = messages;
	}, [messages]);

	useEffect(() => {
		socket?.on('newMessage', (newMessage) => {
			newMessage.shouldShake = true;
            const sound = new Audio(notificationSound)
			sound.play()
			setMessages([...messagesRef.current, newMessage]);
		});

		return () => socket?.off('newMessage');
	}, [socket, setMessages]);
};
export default useListenMessages;
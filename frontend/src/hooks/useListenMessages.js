import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

function useListenMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
      if (newMessage){
        const audio = new Audio(notificationSound);
        audio.play();
      }
    });


    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
}

export default useListenMessages;

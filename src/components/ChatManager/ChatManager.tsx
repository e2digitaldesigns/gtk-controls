import React from "react";
import socketServices from "../../services/socketServices";
import { ChatMessage, ChatMessageReturn } from "../../Types";
import { useMessageDataStore } from "../../dataStores";

interface IChatManagerProps {
  twitchUsername: string;
}

export const ChatManager: React.FC<IChatManagerProps> = ({ twitchUsername }) => {
  const { addMessage } = useMessageDataStore(state => state);

  React.useEffect(() => {
    let isMounted = true;

    socketServices.subscribeApplicationActions((err: unknown, data: ChatMessageReturn) => {
      console.log("ChatManager", data);
      if (data.broadcasterName !== twitchUsername.toLowerCase()) return;

      const messenger: ChatMessage = {
        _id: data._id,
        broadcasterName: data.broadcasterName,
        name: data.name,
        msg: data.msgEmotes,
        url: data.url,
        fontColor: data.fontColor
      };

      isMounted && addMessage(messenger);
    });

    return () => {
      isMounted = false;
      socketServices.unSubscribeApplicationActions();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twitchUsername]);

  return null;
};

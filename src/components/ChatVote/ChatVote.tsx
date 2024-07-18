import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Settings, PauseCircle, ThumbsDown, ThumbsUp } from "react-feather";
import socketServices from "../../services/socketServices";
import * as Styled from "./ChatVote.styles";

import { ErrorComponent, HelmetHeader, TemplateSelector } from "../Shared";
import { SettingsDrawer } from "./SettingDrawer/SettingsDrawer";
import { ChatMessage, ChatMessageReturn } from "../../Types";
import { storageKeys } from "../../utils";

const ChatVote: React.FC = () => {
  const { uid } = useParams();
  const [chatMessages, setChatMessages] = React.useState<ChatMessage[]>([]);
  const [selectedTemplate, setSelectedTemplate] = React.useState<string>("");
  const [twitchUsername, setTwitchUsername] = React.useState<string>("");
  const [showSingleWordMessages, setShowSingleWordMessages] = React.useState<boolean>(false);

  const innerRef = React.useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

  const STORAGE_KEYS = storageKeys(uid as string);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.MESSAGES);
    const storedData = data && JSON.parse(data);
    if (storedData) {
      setChatMessages(storedData);
    }
  }, [STORAGE_KEYS.MESSAGES]);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.SINGLE_WORD);
    const value = data === "true" ? true : false;
    setShowSingleWordMessages(value);
  }, [STORAGE_KEYS.SINGLE_WORD]);

  React.useEffect(() => {
    const fetchUserTwitchUsername = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/twitch/twitchUsername/${uid}`
      );

      data.twitchUsername && setTwitchUsername(data.twitchUsername);
    };

    fetchUserTwitchUsername();
  }, [uid]);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeApplicationActions((err: unknown, data: ChatMessageReturn) => {
      if (data.broadcasterName !== twitchUsername.toLowerCase()) return;

      const messenger: ChatMessage = {
        _id: data._id,
        broadcasterName: data._id,
        name: data.name,
        msg: data.msgEmotes,
        url: data.url,
        fontColor: data.fontColor
      };

      stillHere && setChatMessages(prev => [...prev, messenger]);
    });

    return () => {
      stillHere = false;
      socketServices.unSubscribeApplicationActions();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twitchUsername]);

  React.useEffect(() => {
    if (!isHovering) {
      innerRef.current?.scrollTo(0, innerRef.current.scrollHeight);
    }

    chatMessages.length &&
      window.localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(chatMessages.slice(-20)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatMessages, STORAGE_KEYS.MESSAGES]);

  const handleSingleWordMessage = () => {
    const value = !showSingleWordMessages;
    setShowSingleWordMessages(value);
    window.localStorage.setItem(STORAGE_KEYS.SINGLE_WORD, String(value));
  };

  const handleVote = async (name: string, action: "like" | "dislike") => {
    const API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/gtkChatVote`;
    const localLink = `${API_URL}?tid=${selectedTemplate}&uid=${uid}&action=vote`;
    await axios.post(localLink, { username: name, votes: action === "like" ? 1 : -1 });
  };

  const chatMessagesFiltered = showSingleWordMessages
    ? chatMessages
    : chatMessages.filter(str => str.msg.split(" ").length > 1);

  const handleSettingsClose = (): void => {
    setIsSettingsOpen(false);
  };

  const handleClearChat = () => {
    window.localStorage.setItem(STORAGE_KEYS.MESSAGES, "");
    setChatMessages([]);
  };

  if (!uid || !twitchUsername) return <ErrorComponent title="GTK Chat Vote" />;

  return (
    <>
      <HelmetHeader title="GTK Chat Vote" />
      <SettingsDrawer
        handleClearChat={handleClearChat}
        isOpen={isSettingsOpen}
        handleSettingsClose={handleSettingsClose}
        showSingleWordMessages={showSingleWordMessages}
        handleSingleWordMessage={handleSingleWordMessage}
      />
      <Styled.ChatDockWrapper>
        <Styled.SelectWrapper>
          <Styled.IconWrapper onClick={() => setIsSettingsOpen(true)}>
            <Settings />
          </Styled.IconWrapper>

          <TemplateSelector callBack={setSelectedTemplate} origin="chatVote" uid={uid} />

          <Styled.PausedIconWrapper isPaused={isHovering}>
            <PauseCircle />
          </Styled.PausedIconWrapper>
        </Styled.SelectWrapper>

        <Styled.ChatMessageWrapper>
          <Styled.ChatMessageWrapperInner
            ref={innerRef}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {chatMessagesFiltered.map(message => (
              <Styled.ChatMessageGrid key={message._id} columns={2}>
                <Styled.ChatMessage>
                  {message.name}: {message.msg}
                </Styled.ChatMessage>

                <>
                  <Styled.ChatMessageIcons>
                    <ThumbsUp onClick={() => handleVote(message.name, "like")} />
                  </Styled.ChatMessageIcons>

                  <Styled.ChatMessageIcons>
                    <ThumbsDown onClick={() => handleVote(message.name, "dislike")} />
                  </Styled.ChatMessageIcons>
                </>
              </Styled.ChatMessageGrid>
            ))}
          </Styled.ChatMessageWrapperInner>
        </Styled.ChatMessageWrapper>
      </Styled.ChatDockWrapper>
    </>
  );
};

export default ChatVote;

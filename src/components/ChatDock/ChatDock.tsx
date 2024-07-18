import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  ArrowRightCircle,
  Settings,
  MinusSquare,
  PauseCircle,
  Play,
  PlusSquare,
  ThumbsDown,
  ThumbsUp,
  XCircle
} from "react-feather";
import socketServices from "../../services/socketServices";
import * as Styled from "./ChatDock.styles";
import timeArray from "./timing.json";
import ShowMessages from "./ShowMessage";
import { SettingsDrawer } from "./SettingDrawer/SettingsDrawer";
import { ErrorComponent, HelmetHeader, TemplateSelector } from "../Shared";

import {} from "../Shared";
import { ChatMessage, ChatMessageReturn } from "../../Types";
import { storageKeys } from "../../utils";

const ChatDock: React.FC = () => {
  const { uid } = useParams();
  const [showTime, setShowTime] = React.useState<number>(40000);
  const [chatMessages, setChatMessages] = React.useState<ChatMessage[]>([]);
  const [messageQueue, setMessageQueue] = React.useState<ChatMessage[]>([]);
  const [selectedTemplate, setSelectedTemplate] = React.useState<string>("");
  const [twitchUsername, setTwitchUsername] = React.useState<string>("");
  const [showSingleWordMessages, setShowSingleWordMessages] = React.useState<boolean>(false);

  const [transition, setTransition] = React.useState<string>("default");

  const innerRef = React.useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

  const STORAGE_KEYS = storageKeys(uid as string);

  const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/gtkChatDisplay`;

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.MESSAGES);
    const storedData = data && JSON.parse(data);
    if (storedData) {
      setChatMessages(storedData);
    }
  }, [STORAGE_KEYS.MESSAGES]);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.TIMER);
    data && setShowTime(Number(data));
  }, [STORAGE_KEYS.TIMER]);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.TRANSITION);
    data && setTransition(data);
  }, [STORAGE_KEYS.TRANSITION]);

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

  const handleAddToQueue = (message: ChatMessage): void => {
    const check = messageQueue.find(msg => msg._id === message._id);
    if (!check) setMessageQueue([...messageQueue, message]);
  };

  const handleRemoveFromQueue = (message: ChatMessage): void => {
    const newMessageQueue = messageQueue.filter(msg => msg._id !== message._id);
    setMessageQueue(newMessageQueue);
  };

  const handleSendChatMessage = async () => {
    const message = messageQueue?.[0];
    if (!message) return;

    const newMessageQueue = messageQueue.slice(1);
    setMessageQueue(newMessageQueue);

    await axios.post(`${process.env.REACT_APP_REST_API}/chatLog/sendMessageToOverlay`, {
      _id: message._id,
      fontColor: message.fontColor.replace("#", "%23"),
      showTime,
      tid: selectedTemplate,
      transition: transition === "default" ? null : transition,
      uid: uid
    });
  };

  const handleSendChatMessageNow = async (message: ChatMessage) => {
    await axios.post(`${process.env.REACT_APP_REST_API}/chatLog/sendMessageToOverlay`, {
      _id: message._id,
      fontColor: message.fontColor.replace("#", "%23"),
      showTime,
      tid: selectedTemplate,
      transition: transition === "default" ? null : transition,
      uid: uid
    });
  };

  const handleHideChatMessage = async () => {
    const action = "hideChatMessage";
    const localLink = `${BASE_API_URL}?tid=${selectedTemplate}&uid=${uid}&action=${action}`;
    await axios.get(localLink);
  };

  const handleShowTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowTime(Number(e.target.value));
    window.localStorage.setItem(STORAGE_KEYS.TIMER, e.target.value);
  };

  const handleTransition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransition(e.target.value);
    window.localStorage.setItem(STORAGE_KEYS.TRANSITION, e.target.value);
  };

  const handleSingleWordMessage = () => {
    const value = !showSingleWordMessages;
    setShowSingleWordMessages(value);
    window.localStorage.setItem(STORAGE_KEYS.SINGLE_WORD, String(value));
  };

  const handleClearChat = () => {
    window.localStorage.setItem(STORAGE_KEYS.MESSAGES, "");
    setChatMessages([]);
    setMessageQueue([]);
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

  if (!uid || !twitchUsername) return <ErrorComponent title="GTK Chat Dock" />;

  return (
    <>
      <HelmetHeader title="GTK Chat Dock" />
      <SettingsDrawer
        handleClearChat={handleClearChat}
        isOpen={isSettingsOpen}
        handleSettingsClose={handleSettingsClose}
        showSingleWordMessages={showSingleWordMessages}
        handleSingleWordMessage={handleSingleWordMessage}
        transition={transition}
        handleTransition={handleTransition}
      />
      <Styled.ChatDockWrapper>
        <Styled.SelectWrapper>
          <Styled.IconWrapper onClick={() => setIsSettingsOpen(true)}>
            <Settings />
          </Styled.IconWrapper>

          <TemplateSelector callBack={setSelectedTemplate} origin="chatDock" uid={uid} />

          <Styled.PausedIconWrapper isPaused={isHovering}>
            <PauseCircle />
          </Styled.PausedIconWrapper>
        </Styled.SelectWrapper>

        <Styled.OptionWrapper>
          <Styled.IconWrapper>
            Queue: &nbsp;<span>{messageQueue.length}</span>
          </Styled.IconWrapper>

          <Styled.IconWrapper>
            <select value={showTime} onChange={handleShowTime}>
              {timeArray.map(time => (
                <option key={time.time} value={time.time}>
                  {time.name}
                </option>
              ))}
            </select>
          </Styled.IconWrapper>

          <Styled.IconWrapper>
            {messageQueue.length > 0 ? (
              <Play onClick={handleSendChatMessage} />
            ) : (
              <Play style={{ opacity: 0.25 }} />
            )}
          </Styled.IconWrapper>

          <Styled.IconWrapper>
            <XCircle onClick={handleHideChatMessage} />
          </Styled.IconWrapper>
        </Styled.OptionWrapper>

        <Styled.ChatMessageWrapper>
          <Styled.ChatMessageWrapperInner
            ref={innerRef}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {chatMessagesFiltered.map(message => (
              <Styled.ChatMessageGrid key={message._id} columns={4}>
                <Styled.ChatMessage>
                  <ShowMessages
                    message={message.msg}
                    name={message.name}
                    nameColor={message.fontColor}
                  />
                </Styled.ChatMessage>

                <>
                  <Styled.ChatMessageIcons>
                    <ThumbsUp onClick={() => handleVote(message.name, "like")} />
                  </Styled.ChatMessageIcons>

                  <Styled.ChatMessageIcons>
                    <ThumbsDown onClick={() => handleVote(message.name, "dislike")} />
                  </Styled.ChatMessageIcons>
                </>

                <>
                  <Styled.ChatMessageIcons>
                    <ArrowRightCircle onClick={() => handleSendChatMessageNow(message)} />
                  </Styled.ChatMessageIcons>

                  {messageQueue.find(msg => msg._id === message._id) ? (
                    <Styled.ChatMessageIcons>
                      <MinusSquare onClick={() => handleRemoveFromQueue(message)} />
                    </Styled.ChatMessageIcons>
                  ) : (
                    <Styled.ChatMessageIcons>
                      <PlusSquare onClick={() => handleAddToQueue(message)} />
                    </Styled.ChatMessageIcons>
                  )}
                </>
              </Styled.ChatMessageGrid>
            ))}
          </Styled.ChatMessageWrapperInner>
        </Styled.ChatMessageWrapper>
      </Styled.ChatDockWrapper>
    </>
  );
};

export default ChatDock;

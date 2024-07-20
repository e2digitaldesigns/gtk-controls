import React from "react";
import * as Styled from "./Topics.styles";
import { EpisodeTopic } from "../../../../Types";
import axios from "axios";

interface TopicsProps {
  topics: EpisodeTopic[];
  twitchUsername: string;
}

export const Topics: React.FC<TopicsProps> = ({ topics, twitchUsername }) => {
  const handleSendToChat = async (topic: EpisodeTopic) => {
    console.log("Send to chat", topic);

    if ((!topic?.chat && !topic?.name) || !twitchUsername) {
      return;
    }

    await axios.post(`${process.env.REACT_APP_REST_API}/chatSender/sendMessage`, {
      channel: "icon33",
      message: topic.chat || topic.name
    });
  };

  return (
    <Styled.TopicsWrapper>
      <Styled.TopicsWrapperInner>
        {topics.map(topic => (
          <Styled.TopicWrapper key={topic._id}>
            <Styled.TopicInfo>
              <Styled.TopicName>{topic.name}</Styled.TopicName>
              <Styled.TopicDescription>{topic.desc}</Styled.TopicDescription>
              <Styled.TopicOptions>
                <Styled.TopicOptionLink onClick={() => handleSendToChat(topic)}>
                  Send Topic to Chat
                </Styled.TopicOptionLink>
                <div>|</div>
                <Styled.TopicOptionLink onClick={() => handleSendToChat(topic)}>
                  Send Topic to Overlay
                </Styled.TopicOptionLink>
              </Styled.TopicOptions>
            </Styled.TopicInfo>
          </Styled.TopicWrapper>
        ))}
      </Styled.TopicsWrapperInner>
    </Styled.TopicsWrapper>
  );
};

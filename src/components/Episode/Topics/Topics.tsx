import React from "react";
import * as Styled from "./Topics.styles";
import { EpisodeTopic } from "../../../Types";
import { useUserDataStore } from "../../../dataStores";
import { handleButtonAction, sendMessageToChat } from "../../../utils";
import { ScrollerDiv } from "../../Shared";

interface TopicsProps {
  topics: EpisodeTopic[];
}

export const Topics: React.FC<TopicsProps> = ({ topics }) => {
  const [selectedTopicId, setSelectedTopicId] = React.useState<string | null>(null);
  const { userData } = useUserDataStore(state => state);
  const { twitchUsername } = userData;

  const handleSendToChat = async (topic: EpisodeTopic) => {
    if ((!topic?.chat && !topic?.name) || !twitchUsername) {
      return;
    }

    sendMessageToChat(twitchUsername, topic.chat || topic.name);
  };

  const handleSendTopicToOverlay = async (topicId: string) => {
    await handleButtonAction("gtkOverlayAction", "topic-set", {
      topicId
    });

    setSelectedTopicId(topicId);
  };

  const handleActivateTopic = async (topicId: string) => {
    selectedTopicId === topicId ? setSelectedTopicId(null) : setSelectedTopicId(topicId);
  };

  const handleViewArticle = async (article: string) => {
    window.open(article, "_blank");
  };

  return (
    <Styled.TopicsWrapper>
      <ScrollerDiv>
        <div style={{ paddingRight: "0.75rem" }}>
          {topics.map(topic => (
            <Styled.TopicWrapper
              key={topic._id}
              active={topic._id === selectedTopicId}
              onClick={() => handleActivateTopic(topic._id)}
            >
              <Styled.TopicInfo>
                <Styled.TopicName>{topic.name}</Styled.TopicName>
                <Styled.TopicDescription>{topic.desc}</Styled.TopicDescription>
                <Styled.TopicOptions>
                  <Styled.TopicOptionLink onClick={() => handleSendToChat(topic)}>
                    Chat
                  </Styled.TopicOptionLink>
                  <div>|</div>
                  <Styled.TopicOptionLink onClick={() => handleSendTopicToOverlay(topic._id)}>
                    Overlay
                  </Styled.TopicOptionLink>

                  {topic?.articles?.trim() && (
                    <>
                      <div>|</div>
                      <Styled.TopicOptionLink onClick={() => handleViewArticle(topic.articles)}>
                        Article
                      </Styled.TopicOptionLink>
                    </>
                  )}
                </Styled.TopicOptions>
              </Styled.TopicInfo>
            </Styled.TopicWrapper>
          ))}
        </div>
      </ScrollerDiv>
    </Styled.TopicsWrapper>
  );
};

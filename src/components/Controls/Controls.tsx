import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as Styled from "./Controls.styles";
import { HelmetHeader } from "../utils/HelmetHeader/HelmetHeader";

const ControlsDock: React.FC = () => {
  const { uid } = useParams();
  const [templates, setTemplates] = React.useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = React.useState<string>("");

  const STORAGE_KEYS = {
    TEMPLATE: `@gtk/${uid}/chat-template`
  };

  React.useEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/templates`
      );

      if (data) {
        setTemplates(data);
        const storage = window.localStorage.getItem(STORAGE_KEYS.TEMPLATE);

        storage
          ? setSelectedTemplate(storage)
          : setSelectedTemplate(data[0]._id);
      }
    };

    fetchTemplates();
  }, [STORAGE_KEYS.TEMPLATE]);

  const handleSelectTemplate = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedTemplate(e.target.value);
    window.localStorage.setItem(STORAGE_KEYS.TEMPLATE, e.target.value);

    axios.put(`${process.env.REACT_APP_REST_API}/chatTemplate`, {
      userId: uid,
      templateId: e.target.value
    });
  };

  const handleButtonAction = async (
    action: string,
    type: string = "gtkOverlayAction"
  ) => {
    if (!uid) return;

    const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/${type}`;

    const link = `${BASE_API_URL}?tid=${selectedTemplate}&uid=${uid}&action=${action}`;

    await axios.get(link);
  };

  return (
    <>
      <HelmetHeader title="GTK Control Dock" />
      <Styled.ControlDockWrapper>
        {!uid && <Styled.Error> USER ID must be set!</Styled.Error>}

        <Styled.SelectWrapper className="select-wrapper">
          <select value={selectedTemplate} onChange={handleSelectTemplate}>
            {templates.map(template => (
              <option key={template._id} value={template._id}>
                {template.name}
              </option>
            ))}
          </select>
        </Styled.SelectWrapper>

        <Styled.ButtonWrapper>
          <Styled.Buttons onClick={() => handleButtonAction("topic-prev")}>
            Prev Topic
          </Styled.Buttons>

          <Styled.Buttons onClick={() => handleButtonAction("topic-next")}>
            Next Topic
          </Styled.Buttons>

          <Styled.Buttons onClick={() => handleButtonAction("timer-pause")}>
            Pause Timer
          </Styled.Buttons>

          <Styled.Buttons onClick={() => handleButtonAction("timer-resume")}>
            Resume Timer
          </Styled.Buttons>

          <Styled.Buttons
            onClick={() =>
              handleButtonAction("overlay-reset", "gtkApplicationAction")
            }
          >
            Reset Overlay
          </Styled.Buttons>

          <Styled.Buttons onClick={() => handleButtonAction("clear-votes")}>
            Clear Votes
          </Styled.Buttons>
        </Styled.ButtonWrapper>
      </Styled.ControlDockWrapper>
    </>
  );
};

export default ControlsDock;

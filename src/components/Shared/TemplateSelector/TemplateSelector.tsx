import React from "react";
import { GtkBroadcastChannels } from "../../../Types";
import axios from "axios";
import { useMessageDataStore } from "../../../dataStores";
import * as Styled from "./TemplateSelector.styles";
import { getUserId } from "../../../utils";

interface TemplateSelectorProps {
  origin: string;
}
export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ origin }) => {
  const [templates, setTemplates] = React.useState<any[]>([]);

  const { templateId, setTemplateId } = useMessageDataStore(state => state);

  const gtkTemplateBroadcastChannel = React.useMemo(
    () => new BroadcastChannel(GtkBroadcastChannels.GTK_TEMPLATE),
    []
  );

  React.useEffect(() => {
    gtkTemplateBroadcastChannel.onmessage = function (event) {
      if (origin !== event.data.origin) {
        setTemplateId(event.data.templateId);
      }
    };
  }, [gtkTemplateBroadcastChannel, origin, setTemplateId]);

  React.useLayoutEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_REST_API}/templates`);
      if (data) {
        setTemplates(data);
      }
    };

    fetchTemplates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectTemplate = async (e: React.ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const tempId = e.target.value;
    setTemplateId(tempId);
    gtkTemplateBroadcastChannel.postMessage({ origin, templateId: tempId });

    const userId = getUserId();

    await axios.put(`${process.env.REACT_APP_REST_API}/chatTemplate`, {
      userId,
      templateId
    });
  };

  return (
    <Styled.TemplateSelectorWrapper value={templateId} onChange={handleSelectTemplate}>
      {!templateId && <option value="">Choose a template</option>}
      {templates.map(template => (
        <option key={template._id} value={template._id}>
          {template.name}
        </option>
      ))}
    </Styled.TemplateSelectorWrapper>
  );
};

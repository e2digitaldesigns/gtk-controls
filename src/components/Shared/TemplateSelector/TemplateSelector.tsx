import React from "react";
import { GtkBroadcastChannels } from "../../../Types";
import axios from "axios";
import { useMessageDataStore } from "../../../dataStores";

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

  React.useEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_REST_API}/templates`);
      if (data) {
        setTemplates(data);
        setTemplateId(data[0]._id);
      }
    };

    fetchTemplates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectTemplate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const tempId = e.target.value;
    setTemplateId(tempId);
    gtkTemplateBroadcastChannel.postMessage({ origin, templateId: tempId });
  };

  return (
    <select value={templateId} onChange={handleSelectTemplate}>
      {templates.map(template => (
        <option key={template._id} value={template._id}>
          {template.name}
        </option>
      ))}
    </select>
  );
};

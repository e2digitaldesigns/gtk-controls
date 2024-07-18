import React from "react";
import { GtkBroadcastChannels } from "../../../Types";
import axios from "axios";
import { storageKeys } from "../../../utils";

interface TemplateSelectorProps {
  callBack?: (templateId: string) => void;
  origin: string;
  uid: string;
}
export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ callBack, origin, uid }) => {
  const [templates, setTemplates] = React.useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = React.useState<string>("");

  const gtkTemplateBroadcastChannel = React.useMemo(
    () => new BroadcastChannel(GtkBroadcastChannels.GTK_TEMPLATE),
    []
  );

  React.useEffect(() => {
    if (callBack) {
      callBack(selectedTemplate);
    }
  }, [callBack, selectedTemplate]);

  const STORAGE_KEYS = storageKeys(uid as string);

  React.useEffect(() => {
    gtkTemplateBroadcastChannel.onmessage = function (event) {
      if (origin !== event.data.origin) {
        setSelectedTemplate(event.data.templateId);
      }
    };
  }, [gtkTemplateBroadcastChannel, origin]);

  React.useEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_REST_API}/templates`);

      if (data) {
        setTemplates(data);
        const storage = window.localStorage.getItem(STORAGE_KEYS.TEMPLATE);

        storage ? setSelectedTemplate(storage) : setSelectedTemplate(data[0]._id);
      }
    };

    fetchTemplates();
  }, [STORAGE_KEYS.TEMPLATE]);

  const handleSelectTemplate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const templateId = e.target.value;
    gtkTemplateBroadcastChannel.postMessage({ origin: "selector", templateId });

    setSelectedTemplate(templateId);
    window.localStorage.setItem(STORAGE_KEYS.TEMPLATE, templateId);

    axios.put(`${process.env.REACT_APP_REST_API}/chatTemplate`, {
      userId: uid,
      templateId
    });
  };

  return (
    <select value={selectedTemplate} onChange={handleSelectTemplate}>
      {templates.map(template => (
        <option key={template._id} value={template._id}>
          {template.name}
        </option>
      ))}
    </select>
  );
};

import { ApplicationSection } from "../../Types";

export const availableSections: ApplicationSection[] = [
  {
    _id: "1",
    icon: "MessageSquare",
    slot: 1,
    width: "400px",
    title: "Chat",
    component: `ChatView`
  },
  {
    _id: "2",
    icon: "List",
    slot: 2,
    width: "400px",
    title: "Episode",
    component: `EpisodeComponent`
  },
  {
    _id: "3",
    icon: "MessageCircle",
    slot: 3,
    width: "400px",
    title: "Chat Ranks",
    component: `ChatRanks`
  },
  {
    _id: "4",
    icon: "Sliders",
    slot: 4,
    width: "400px",
    title: "Controls",
    component: `ControlsView`
  },
  {
    _id: "5",
    icon: "Sliders",
    slot: 5,
    width: "400px",
    title: "Controls",
    component: `ControlsView`
  }
];

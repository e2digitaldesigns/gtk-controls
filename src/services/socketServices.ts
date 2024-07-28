import io from "socket.io-client";
import { SocketServicesEvents } from "../Types";
const socket = io(process.env.REACT_APP_PUSH_SERVICE || "");

const socketServices = {
  subscribeApplicationActions(cb: any) {
    socket.on(SocketServicesEvents.GTK_CHAT_RELAY, (data: any) => cb(null, data));
  },

  unSubscribeApplicationActions() {
    socket.removeAllListeners(SocketServicesEvents.GTK_CHAT_RELAY);
  },

  subscribeOverlaysChatRanks(cb: any) {
    socket?.on(SocketServicesEvents.GTK_OVERLAY_CHAT_RANKS, (data: any) => cb(null, data));
  },

  unSubscribeOverlaysChatRanks() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_OVERLAY_CHAT_RANKS);
  },

  sendOverlayActions(data: any) {
    socket.emit(SocketServicesEvents.GTK_OVERLAY_ACTION, data);
  }
};

export default socketServices;

import { io } from "socket.io-client";

const URL = "https://chat-server.biviplant.com";
const socket = io(URL, { autoConnect: false });
export default socket

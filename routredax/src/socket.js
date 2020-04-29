import io from "socket.io-client";

const CHAT_SERVER = "https://tweets.globalofficiallottery.com/";
// const CHAT_SERVER = "http://localhost:9999";

/*const socket = io(CHAT_SERVER, {
    transport: ["polling"],
    path: "/chat/"
});*/
const socket = io(CHAT_SERVER, {
    serveClient: false,
    // below are engine.IO options
    transports: ['polling'],
    path: "/chat/",
pingInterval: 10000,
pingTimeout: 5000,
cookie: false
});
export default socket;
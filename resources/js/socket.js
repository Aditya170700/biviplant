import openSocket from "socket.io-client"

function useSocketIo(userId) {
    return openSocket('http://localhost:3000', {
        query: {
            id: userId
        }
    });
}
export default useSocketIo
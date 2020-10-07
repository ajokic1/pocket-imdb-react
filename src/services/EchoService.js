import Echo from "laravel-echo";

class EchoService {
  constructor() {
    window.io = require("socket.io-client");
    this.Echo = new Echo({
      broadcaster: "socket.io",
      host: window.location.hostname + ":6001",
    });
  }
}

export default (new EchoService()).Echo;

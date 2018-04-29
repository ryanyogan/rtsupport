import { EventEmitter } from 'events';

class Socket {
  constructor(ws = new WebSocket(), ee = new EventEmitter()) {
    this.ws = ws;
    this.ee = ee;

    this.ws.onmessage = this.message;
    this.ws.onopen = this.open;
    this.ws.onclose = this.close;
  }

  open = () => this.ee.emit('connect');
  close = () => this.ee.emit('disconnect');

  on = (name, fn) => this.ee.on(name, fn);
  off = (name, fn) => this.ee.removeListener(name, fn);

  emit = (name, data) => this.ws.send(JSON.stringify({ name, data }));

  message = e => {
    try {
      const message = JSON.parse(e.data);
      this.ee.emit(message.name, message.data);
    } catch (error) {
      this.ee.emit('error', error);
    }
  };
}

export default Socket;

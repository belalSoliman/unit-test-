type Callback<T> = (payload: T) => void;

class Broadcaster<T> {
  private callbacks: Map<string, Callback<T>[]> = new Map();

  subscribe(event: string, callback: Callback<T>): void {
    if (!this.callbacks.has(event)) {
      this.callbacks.set(event, []);
    }
    this.callbacks.get(event)?.push(callback);
  }

  unsubscribe(event: string, callback: Callback<T>): void {
    const eventCallbacks = this.callbacks.get(event);
    if (eventCallbacks) {
      this.callbacks.set(
        event,
        eventCallbacks.filter((cb) => cb !== callback)
      );
    }
  }

  broadcast(event: string, payload: T): void {
    const eventCallbacks = this.callbacks.get(event);
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => callback(payload));
    }
  }
}

export { Broadcaster, Callback };

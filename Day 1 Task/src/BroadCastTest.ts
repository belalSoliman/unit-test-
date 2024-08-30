import { Broadcaster } from "./BroadCast";

describe("Broadcaster behavior", () => {
  let broadcaster: Broadcaster<number>;
  let callback1: jest.Mock;
  let callback2: jest.Mock;

  beforeEach(() => {
    broadcaster = new Broadcaster<number>();
    callback1 = jest.fn();
    callback2 = jest.fn();
  });

  test("triggers all callbacks attached to a specific event", () => {
    broadcaster.subscribe("eventA", callback1);
    broadcaster.subscribe("eventA", callback2);

    broadcaster.broadcast("eventA", 10);

    expect(callback1).toHaveBeenCalledWith(10);
    expect(callback2).toHaveBeenCalledWith(10);
  });

  test("removes a callback, preventing it from being triggered", () => {
    broadcaster.subscribe("eventA", callback1);
    broadcaster.subscribe("eventA", callback2);

    broadcaster.unsubscribe("eventA", callback1);

    broadcaster.broadcast("eventA", 20);

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalledWith(20);
  });

  test("allows the same callback to be invoked multiple times if registered repeatedly", () => {
    broadcaster.subscribe("eventA", callback1);
    broadcaster.subscribe("eventA", callback1);

    broadcaster.broadcast("eventA", 30);

    expect(callback1).toHaveBeenCalledTimes(2);
  });
});

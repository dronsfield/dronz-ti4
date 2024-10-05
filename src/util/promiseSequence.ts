import wait from "./wait";

export async function promiseSequence<T>(
  asyncFns: (() => Promise<T>)[],
  waitInterval?: number
) {
  for (const fn of asyncFns) {
    if (waitInterval) await wait(waitInterval);
    await fn();
  }
}

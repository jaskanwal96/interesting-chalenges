/**
 * Throttle a function to be called at most once per specified delay.
 *
 * @param {Function} func - The function to be throttled.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} The throttled function.
 */
export function throttle<T extends (...args: any[]) => any>(func: T, delay: number) {
  let lastCall = 0;

  return function(this: any, ...args: Parameters<T>) {
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return func.apply(this, args);
  };
}
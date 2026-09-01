// Runs `fn` once the main thread is free (or after `timeout` ms, whichever
// comes first), so non-critical mount work doesn't compete with the browser's
// FCP/TTI window and get counted as Total Blocking Time. Falls back to
// setTimeout on Safari, which has no requestIdleCallback.
export function onIdle(fn: () => void, timeout = 2000): void {
  if (typeof window === 'undefined') return
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => fn(), { timeout })
  } else {
    setTimeout(fn, 1)
  }
}

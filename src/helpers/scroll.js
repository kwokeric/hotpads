export const debounce = (fn, delay) => {
  return (() => {
    let timeout
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(fn, delay)
    }
  })()
}

export const throttle = (fn, delay) => {
  let shouldWait = false;

  const resetWait = () => {
    shouldWait = false;
  }

  return () => {
    if (!shouldWait) {
      fn();
      shouldWait = true;
      setTimeout(resetWait, delay)
    }
  }
}

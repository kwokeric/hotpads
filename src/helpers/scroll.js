export const debounce = (fn, delay) => {
  return (() => {
    let timeout
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(fn, delay)
    }
  })()
}

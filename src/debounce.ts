interface Debounce {
  callback: (event: Event) => void;
  delay: number;
}

export const debounce = function(
  callback: (event: Event) => void,
  delay: number
): (event: Event) => void {
  let timeout: number;
  return function(event: Event) {
    clearTimeout(timeout);
    timeout = setTimeout(callback.bind(null, event), delay);
  };
};

const useDebounce = (fn, timeDelay) => {
  let timer;
  var a = 1;
  const debounceFunction = function () {
    console.log("hello", a++);
    clearTimeout(timer);
    const context = this;
    const args = arguments;
    setTimeout(() => fn.apply(context, args), timeDelay);
  };

  return debounceFunction;
};

export { useDebounce };

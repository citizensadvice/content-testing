export const timestamp = (() => {
  const createTimestamp = () => {
    const now = new Date();
    const TIMESTAMP = [
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
      now.getMilliseconds(),
    ]
      .map((x) => x.toString())
      .map((x) => (x.length < 2 ? "0" + x : x))
      .reduce((timestamp, item) => `${timestamp}${item}`, "");

    return TIMESTAMP;
  };

  return {
    create: createTimestamp,
  };
})();

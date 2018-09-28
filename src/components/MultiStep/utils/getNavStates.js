const getNavStates = (indx, length) => {
  let styles = [];
  styles.map(i => {
    if (i < indx) {
      return styles.push("done");
    } else if (i === indx) {
      return styles.push("doing");
    } else {
      return styles.push("todo");
    }
  });
  return { current: indx, styles: styles };
};

export default getNavStates;

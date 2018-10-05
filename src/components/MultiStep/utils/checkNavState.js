const checkNavState = (currentIndex, stepsLength) => {
  if (currentIndex === 0) {
    return {
      showStartBtn: true,
      showPreviousBtn: false,
      showNextBtn: false,
      showSubmitBtn: false
    };
  } else if (currentIndex === 4) {
    return {
      showStartBtn: false,
      showPreviousBtn: true,
      showNextBtn: false,
      showSubmitBtn: true
    };
  } else if (currentIndex === 5) {
    return {
      showStartBtn: false,
      showPreviousBtn: false,
      showNextBtn: false,
      showSubmitBtn: false
    };
  } else if (currentIndex > 0 && currentIndex < stepsLength - 1) {
    return {
      showStartBtn: false,
      showPreviousBtn: true,
      showNextBtn: true,
      showSubmitBtn: false
    };
  } else {
    return {
      showStartBtn: false,
      showPreviousBtn: false,
      showNextBtn: false,
      showSubmitBtn: false
    };
  }
};

export default checkNavState;

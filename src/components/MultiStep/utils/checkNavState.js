const checkNavState = (currentStep, stepsLength) => {
  if (currentStep > 0 && currentStep < stepsLength - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
      showSubmitBtn: false
    };
  } else if (currentStep === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
      showSubmitBtn: false
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false,
      showSubmitBtn: true
    };
  }
};

export default checkNavState;

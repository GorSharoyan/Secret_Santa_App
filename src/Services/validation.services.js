//By this function player validates if value is throothy or flasey
export const validateNumberOfPlayers = (value) => {
  if (Number(value) <= 0) {
    return true;
  }
  if (value === "") {
    return true;
  }
  if (value === "1") {
    return true;
  } else {
    return false;
  }
};

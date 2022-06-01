//Player number validation function , the number of players shuould be even!!!
export const validateNumberOfPlayers = (value) => {
  if (value === " ") {
    return true;
  } else {
    return false;
  }
};

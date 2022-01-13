//Player number validation function , the number of players shuould be even!!!
export const validateNumberOfPlayers = (number) => {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

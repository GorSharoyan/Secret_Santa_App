//Function for player qunatiity input validation
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

//function for validation emtpy data in playerCards

export function validatePlayerCardData(arr) {
  let error = false;
  arr.map((el) => {
    Object.values(el).map((val) => {
      if (val === " ") {
        error = false;
      } else {
        error = true;
      }
    });
  });
  return error;
}

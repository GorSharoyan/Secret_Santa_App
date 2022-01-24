//Array Randomising function using Fisher-Yates algorythm
export default function randomiseArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}

//Pair creating function
export function createPlayerPairs(arr) {
  let pairs = [];
  //step 1
  //determine sub arrays of rescievers and senders
  let senders1 = arr.slice(0, arr.length / 2);
  let rescievers1 = arr.slice(arr.length / 2, arr.length);

  // step 2 create first pairs
  for (let i = 0; i < senders1.length; i++) {
    pairs.push({ sender: senders1[i], resciever: rescievers1[i] });
  }

  //step 3 randomizing rescievers
  let senders2 = randomiseArray(rescievers1);
  let rescievers2 = randomiseArray(senders1);

  //step 4 create second pairs
  for (let i = 0; i < senders2.length; i++) {
    pairs.push({ sender: senders2[i], resciever: rescievers2[i] });
  }
  return pairs;
}

import React from "react";

export default function Pagination({ currentCards, totalCards }) {
  let pageCount = [];

  for (let i = 0; i < Math.ceil(totalCards / currentCards); i++) {
    pageCount.push(i);
  }

  return (
    <div>
      {pageCount.map((element) => {
        return <div>{element}</div>;
      })}
    </div>
  );
}

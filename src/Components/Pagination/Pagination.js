import React from "react";

//UI
import "./Pagination.css";

export default function Pagination({ currentCards, totalCards }) {
  let pageCount = [];

  for (let i = 1; i < Math.ceil(totalCards / currentCards); i++) {
    pageCount.push(i);
  }

  return (
    <div>
      <ol className="pagination">
        {pageCount.map((element) => {
          console.log(pageCount);
          console.log(element);
          return (
            <ui className="pageNumber">
              <a>{element}</a>
            </ui>
          );
        })}
      </ol>
    </div>
  );
}

import React from "react";

//UI
import "./Pagination.css";

export default function Pagination({
  currentCards,
  totalCards,
  handlePageChange
}) {
  let pageCount = [];

  for (let i = 1; i <= Math.ceil(totalCards / currentCards); i++) {
    pageCount.push(i);
  }
  return (
    <div>
      <ol className="pagination">
        {pageCount.map((element) => {
          return (
            <ui className="pageNumber">
              <a
                className="clicker"
                onClick={() => {
                  handlePageChange(element);
                }}
              >
                {element}
              </a>
            </ui>
          );
        })}
      </ol>
    </div>
  );
}

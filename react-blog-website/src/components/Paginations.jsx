import React from "react";

const Paginations = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPage = Math.ceil(blogs.length / pageSize);
  //console.log(totalpages_)
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className="pagination my-8 flex-wrap gap-4 ">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>

      <div className="flex gap1">{renderPaginationLinks()}</div>

      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Paginations;

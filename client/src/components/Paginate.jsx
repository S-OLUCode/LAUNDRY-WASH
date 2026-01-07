import { ChevronLeft, ChevronsRight } from "lucide-react";
import React from "react";

export default function Paginate({
    currentPage,
    totalPages,
    hasMore,
    handlePageChange,
}) {
  return (
    <div className="flex justify-center md:justify-between items-center py-4">
      <p className="hidden md:block">
        page {currentPage} of {totalPages} pages
      </p>
      <div className="join border border-wash-white rounded-lg">
        <button
          className={`join-item btn ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange("prev")}
        >
          <ChevronLeft />
        </button>
        <button
          className={`join-item btn ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange("prev")}
        >
          prev
        </button>
        <button className="join-item btn bg-wash-purple text-wash-white">
          {currentPage}
        </button>
        <button
          className={`join-item btn ${
            !hasMore 
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={!hasMore}
          onClick={() => handlePageChange("next")}
        >
          next
        </button>
        <button className={`join-item btn ${
            !hasMore 
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={!hasMore}
          onClick={() => handlePageChange("last")}>
            <ChevronsRight/>
        </button>
      </div>
    </div>
  );
}

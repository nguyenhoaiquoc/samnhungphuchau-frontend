import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];

    if (currentPage > 1) pages.push("prev");

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);

    if (currentPage < totalPages) pages.push("next");

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-16">
      {getPages().map((item, index) => {
        if (item === "...") {
          return (
            <span key={index} className="px-2 text-gray-400">
              ...
            </span>
          );
        }

        if (item === "prev") {
          return (
            <button
              key={index}
              onClick={() => onPageChange(currentPage - 1)}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              &lt;
            </button>
          );
        }

        if (item === "next") {
          return (
            <button
              key={index}
              onClick={() => onPageChange(currentPage + 1)}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              &gt;
            </button>
          );
        }

        const page = item as number;

        return (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full text-sm font-medium transition
              ${
                currentPage === page
                  ? "bg-[#0F3D2E] text-white"
                  : "border hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

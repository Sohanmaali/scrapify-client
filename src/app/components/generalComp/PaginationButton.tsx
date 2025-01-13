// import React from "react";

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   currentPage,
//   totalPages,
//   onPageChange,
// }) => {
//   const renderPageNumbers = () => {
//     const pages = [];
//     const maxVisiblePages = 3;

//     // Determine the range of visible pages
//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//     // Adjust the range if we are near the beginning or end
//     if (endPage - startPage < maxVisiblePages - 1) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     // Add the first page with ellipsis if needed
//     if (startPage > 1) {
//       pages.push(
//         <button
//           key={1}
//           onClick={() => onPageChange(1)}
//           className={`px-4 py-2 mx-1 rounded-md ${
//             currentPage === 1
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-800 hover:bg-blue-100"
//           }`}
//         >
//           1
//         </button>
//       );
//       if (startPage > 2) {
//         pages.push(<span key="start-ellipsis" className="mx-2">...</span>);
//       }
//     }

//     // Add the range of visible pages
//     for (let i = startPage; i <= endPage; i++) {
//       pages.push(
//         <button
//           key={i}
//           onClick={() => onPageChange(i)}
//           className={`px-4 py-2 mx-1 rounded-md ${
//             currentPage === i
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-800 hover:bg-blue-100"
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     // Add the last page with ellipsis if needed
//     if (endPage < totalPages) {
//       if (endPage < totalPages - 1) {
//         pages.push(<span key="end-ellipsis" className="mx-2">...</span>);
//       }
//       pages.push(
//         <button
//           key={totalPages}
//           onClick={() => onPageChange(totalPages)}
//           className={`px-4 py-2 mx-1 rounded-md ${
//             currentPage === totalPages
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-800 hover:bg-blue-100"
//           }`}
//         >
//           {totalPages}
//         </button>
//       );
//     }

//     return pages;
//   };

//   return (
//     <div className="flex items-center justify-center mt-6 space-x-2">
//       <button
//         onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
//         className={`px-4 py-2 rounded-md ${
//           currentPage === 1
//             ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//             : "bg-gray-200 text-gray-800 hover:bg-blue-100"
//         }`}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       {renderPageNumbers()}
//       <button
//         onClick={() =>
//           currentPage < totalPages && onPageChange(currentPage + 1)
//         }
//         className={`px-4 py-2 rounded-md ${
//           currentPage === totalPages
//             ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//             : "bg-gray-200 text-gray-800 hover:bg-blue-100"
//         }`}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) {

  const generatePageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push('...')
        pageNumbers.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1)
        pageNumbers.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i)
        }
      } else {
        pageNumbers.push(1)
        pageNumbers.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push('...')
        pageNumbers.push(totalPages)
      }
    }

    return pageNumbers
  }

  return (
    <nav className={`flex items-center justify-center space-x-2 ${className}`} aria-label="Pagination">
      <button
        className="px-3 py-2 border rounded hover:bg-lightColor disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <BiChevronLeft className="h-4 w-4" />
      </button>
      {generatePageNumbers().map((pageNumber, index) => (
        <React.Fragment key={index}>
          {pageNumber === '...' ? (
            <button
              className="px-3 py-2 border rounded bg-gray-50 text-gray-400 cursor-default"
              disabled
            >
              <FiMoreHorizontal className="h-4 w-4" />
            </button>
          ) : (
            <button
              className={`px-3 py-2 border rounded ${
                currentPage === pageNumber
                  ? 'bg-darkColor text-white'
                  : 'hover:bg-lightColor'
              }`}
              onClick={() => onPageChange(pageNumber as number)}
              aria-current={currentPage === pageNumber ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          )}
        </React.Fragment>
      ))}
      <button
        className="px-3 py-2 border rounded hover:bg-lightColor disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <BiChevronRight className="h-4 w-4" />
      </button>
    </nav>
  )
}

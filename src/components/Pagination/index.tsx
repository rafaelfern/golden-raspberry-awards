import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { SkipBack, ChevronLeft, ChevronRight, SkipForward } from 'react-feather';
import './index.scss';

interface IPagination {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

function Pagination(props: IPagination) {
  const { currentPage, setCurrentPage, totalPages } = props;
  const [disabledPrevBtn, setDisabledPrevBtn] = useState(false);
  const [disabledNextBtn, setDisabledNextBtn] = useState(false);

  const handlePageChange = (page) => setCurrentPage(page);

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
      setDisabledPrevBtn(true);
    }
  };

  const backFirstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
      setDisabledPrevBtn(true);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    } else {
      setDisabledNextBtn(true);
    }
  };

  const advanceLastPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(totalPages);
      setDisabledNextBtn(true);
    }
  };

  const renderBackButton = () => (
    <button
      role="button"
      aria-label="Previous Page"
      onClick={() => previousPage()}
      className={`${disabledPrevBtn && 'btn-prev-disabled'}`}
      disabled={disabledPrevBtn}
    >
      <ChevronLeft />
    </button>
  );

  const renderFirstPageButton = () => (
    <button
      role="button"
      aria-label="First Page"
      onClick={() => backFirstPage()}
      className={`${disabledPrevBtn && 'btn-first-disabled'}`}
      disabled={disabledPrevBtn}
    >
      <SkipBack />
    </button>
  );

  const renderNextButton = () => (
    <button
      role="button"
      aria-label="Next Page"
      onClick={() => nextPage()}
      className={`${disabledNextBtn && 'btn-next-disabled'}`}
      disabled={disabledNextBtn}
    >
      <ChevronRight />
    </button>
  );

  const renderLastPageButton = () => (
    <button
      role="button"
      aria-label="Last Page"
      onClick={() => advanceLastPage()}
      className={`${disabledNextBtn && 'btn-last-disabled'}`}
      disabled={disabledNextBtn}
    >
      <SkipForward />
    </button>
  );

  useEffect(() => {
    if (currentPage === 1) {
      setDisabledPrevBtn(true);
      setDisabledNextBtn(false);
    } else if (currentPage === totalPages) {
      setDisabledNextBtn(true);
      setDisabledPrevBtn(false);
    } else {
      setDisabledPrevBtn(false);
      setDisabledNextBtn(false);
    }
  }, [currentPage]);

  return (
    <>
      {renderFirstPageButton()}
      {renderBackButton()}
      {getPageNumbers().map((page) => (
        <button
          role="button"
          key={page}
          className={` ${currentPage === page ? 'btn-active' : 'btn-not-active '}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      {renderNextButton()}
      {renderLastPageButton()}
    </>
  );
}

export default Pagination;

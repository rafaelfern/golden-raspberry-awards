import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '../../../components/Pagination';
import { vi } from 'vitest';

describe('Pagination Component', () => {
  it('should renders pagination buttons and current page number correctly', () => {
    const totalPages = 10;
    const currentPage = 5;
    const setCurrentPage = vi.fn();

    render(<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />);

    const backButton = screen.getByRole('button', { name: /previous page/i });
    const firstPageButton = screen.getByRole('button', { name: /first page/i });
    const nextButton = screen.getByRole('button', { name: /next page/i });
    const lastPageButton = screen.getByRole('button', { name: /last page/i });

    const currentPageNumber = screen.getByText(String(currentPage));
    expect(currentPageNumber).toBeInTheDocument();

    expect(backButton).not.toBeDisabled();
    expect(firstPageButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
    expect(lastPageButton).not.toBeDisabled();
  });

  it('should calls setCurrentPage with correct page number when pagination buttons are clicked', () => {
    const totalPages = 10;
    const currentPage = 3;
    const setCurrentPage = vi.fn();

    render(<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />);

    const firstPageButton = screen.getByRole('button', { name: /first page/i });
    fireEvent.click(firstPageButton);
    expect(setCurrentPage).toHaveBeenCalledWith(1);

    const pageFourButton = screen.getByRole('button', { name: /4/i });
    fireEvent.click(pageFourButton);
    expect(setCurrentPage).toHaveBeenCalledWith(4);

    const nextButton = screen.getByRole('button', { name: /next page/i });
    fireEvent.click(nextButton);
    expect(setCurrentPage).toHaveBeenCalledWith(currentPage + 1);

    const lastPageButton = screen.getByRole('button', { name: /last page/i });
    fireEvent.click(lastPageButton);
    expect(setCurrentPage).toHaveBeenCalledWith(totalPages);
  });
});

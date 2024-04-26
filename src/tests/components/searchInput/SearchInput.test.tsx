import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import SearchInput from '../../../components/SearchInput'; 
import { vi } from 'vitest';

describe('SearchInput', () => {
  it('should render search input component', () => {
    const setSearchYearMock = vi.fn(); 
    const handleSubmitMock = vi.fn(); 

    const { getByPlaceholderText, getByRole } = render(
      <SearchInput
        searchYear="2022"
        setSearchYear={setSearchYearMock}
        handleSubmit={handleSubmitMock}
      />
    );

    const inputElement = getByPlaceholderText('Search by year');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(2022);

    fireEvent.change(inputElement, { target: { value: '2023' } });
    expect(setSearchYearMock).toHaveBeenCalledWith('2023');

    const buttonElement = getByRole('button', { name: 'Search' });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
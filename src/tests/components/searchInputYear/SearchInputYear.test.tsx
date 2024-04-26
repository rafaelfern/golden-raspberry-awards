import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import SearchInputYear from '../../../components/SearchInputYear'; 

describe('SearchInputYear Component', () => {
  it('should renders correctly with initial value', () => {
    const initialValue = '2022';
    const onChangeMock = vi.fn(); 

    render(
      <SearchInputYear
        value={String(initialValue)}
        onChange={onChangeMock}
      />
    );

    const inputElement = screen.getByPlaceholderText('Filter by year');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(initialValue);
  });

});
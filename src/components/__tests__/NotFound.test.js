import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../NotFound/NotFound';

describe('NotFound component', () => {
    it('should render without errors', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );
        const notFoundElement = screen.getByText(/couldn't find/i);
        expect(notFoundElement).toBeInTheDocument();
    });

    it('should display the correct image', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );
        const notFoundImage = screen.getByAltText('NBFG logo');
        expect(notFoundImage).toHaveAttribute('src', 'nbfg-logo.png');
    });

    it('navigates back to home page when button is clicked', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    });
});


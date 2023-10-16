import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GangMemberNotFound from '../MeetTheGang/GangMemberNotFound';

test('should render GangMemberNotFound component', () => {
    render(<GangMemberNotFound />);
    const notFoundElement = screen.getByText(/couldn't find/i);
    expect(notFoundElement).toBeInTheDocument();
});
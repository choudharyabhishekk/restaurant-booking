import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock props for the BookingForm component
const mockSubmitForm = jest.fn();
const mockDispatch = jest.fn();
const mockAvailableTimes = { availableTimes: ['17:00', '18:00', '19:00'] };

test('Renders the BookingForm static text', () => {
    render(<BookingForm submitForm={mockSubmitForm} dispatch={mockDispatch} availableTimes={mockAvailableTimes} />);

    // Check if static text is rendered
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your Reservation/i })).toBeInTheDocument();
});

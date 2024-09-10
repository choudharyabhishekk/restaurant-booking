// Assuming these functions are in a module named `timesFunctions.js`
import { initializeTimes, updateTimes } from './timesFunctions';

// Mock fetchAPI function for testing
const mockFetchAPI = (date) => {
    if (date === '2024-09-01') {
        return ['17:00', '18:00'];
    }
    return ['18:00', '19:00'];
};

test('initializeTimes returns correct available times', () => {
    const date = new Date('2024-09-01');
    const result = initializeTimes(date);

    expect(result).toEqual(['17:00', '18:00']);
});

test('updateTimes returns the same value as provided', () => {
    const date = new Date('2024-09-01');
    const state = { availableTimes: ['17:00', '18:00'] };
    const result = updateTimes(state, date);

    expect(result).toEqual({ availableTimes: ['17:00', '18:00'] });
});

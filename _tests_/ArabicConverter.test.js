import { render, fireEvent } from "@testing-library/react";
import React from 'react';
import ArabicConverter from './ArabicConverter';

describe('<ArabicConverter />', () => {
    it('has an input field', () => {
        const { getByLabelText } = render(<ArabicConverter />)
        expect(() => {
            getByLabelText(/roman/i)
        }).not.toThrow();
    });
    it('shows no arabic number by default', () => {
        const { getByText } = render(<ArabicConverter />)
        expect(() => {
            getByText("Arabic: none")
        }).not.toThrow();
    });
    it('converts I to 1', () => {
        const { getByLabelText, getByText } = render(<ArabicConverter />)
        fireEvent.change(getByLabelText(/roman/i), { target: {value:"I" }});
        expect(() => {
            getByText("Arabic: 1")
        }).not.toThrow();
    });
});


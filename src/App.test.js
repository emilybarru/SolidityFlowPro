// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityFlowPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityFlowPro/i);
    expect(titleElement).toBeInTheDocument();
});

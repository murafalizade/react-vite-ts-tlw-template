// Home.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import Jest DOM matchers
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import Home from '../../src/app/pages/Home';
import i18n from "../../src/i18n";


// A mock translation function for testing
const mockT = (key: string) => key;

// Mocking useTranslation hook
jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({ t: mockT }),
}));

describe('Home component', () => {
    test('renders Home component with correct content', () => {
        // Arrange
        render(
            <I18nextProvider i18n={i18n}>
                <Home />
            </I18nextProvider>
        );

        // Act
        const welcomeText = screen.getByText(/welcome/i);
        const descriptionText = screen.getByText(/description/i);
        const linkElement = screen.getByText(/link/i);

        // Assert
        expect(welcomeText).toBeInTheDocument();
        expect(descriptionText).toBeInTheDocument();
        expect(linkElement).toBeInTheDocument();
    });
});

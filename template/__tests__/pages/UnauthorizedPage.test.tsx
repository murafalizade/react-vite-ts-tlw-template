import {render,screen} from "@testing-library/react";
import UnauthorizedPage from "../../src/app/pages/UnauthorizedPage.tsx";
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from "../../src/i18n";


// A mock translation function for testing
const mockT = (key: string) => key;

// Mocking useTranslation hook
jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({
        t: mockT
    }),
}));
describe("Unauthorized Component", ()=>{

    test("Component is successfully rendered", ()=>{
        render(
            <I18nextProvider i18n={i18n}>
                <UnauthorizedPage />
            </I18nextProvider>
        );

        const title = screen.getByText(/authPageTitle/i)
        const description = screen.getByText(/authPageDescription/i)

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    })
})
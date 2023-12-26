import { render, screen } from '@testing-library/react';
import {I18nextProvider} from "react-i18next";
import i18n from "../../src/i18n.ts";
import NotFound from "../../src/app/pages/NotFound.tsx";
import '@testing-library/jest-dom';

const mockT = (key: string) => key;

// Mocking useTranslation hook
jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({
        t: mockT
    }),
}));

describe("Not Found component",()=>{
    test('Component is successfully rendered', ()=>{
        render(
            <I18nextProvider i18n={i18n}>
                <NotFound />
            </I18nextProvider>
        );

        const notFoundText = screen.getByText(/notFoundTitle/i);
        const descriptionText = screen.getByText(/notFoundDescription/i)

        expect(notFoundText).toBeInTheDocument();
        expect(descriptionText).toBeInTheDocument();
    });
})
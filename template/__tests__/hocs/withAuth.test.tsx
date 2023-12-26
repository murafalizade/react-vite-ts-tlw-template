import { render, screen } from '@testing-library/react';
import Cookie from "../../src/app/utilities/Cookie.ts";
import withAuth from "../../src/app/hocs/withAuth.tsx";
import '@testing-library/jest-dom';
import i18n from "../../src/i18n.ts";
import {I18nextProvider} from "react-i18next";

jest.mock('../../src/app/utilities/Cookie.ts');
const mockT = (key: string) => key;

// Mocking useTranslation hook
jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({
        t: mockT
    }),
}));
describe('withAuth HoC', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const AuthenticatedComponent = withAuth(() => <div>Authenticated Content</div>);

    test('renders the component when authenticated', () => {
       (Cookie.getCookie as jest.Mock).mockReturnValue('fakeToken');

        render(
            <I18nextProvider i18n={i18n}>
                <AuthenticatedComponent />
            </I18nextProvider>
        );

        expect(screen.getByText(/Authenticated Content/i)).toBeInTheDocument();
        expect(screen.queryByText(/Unauthorized/i)).not.toBeInTheDocument();
    });

    test('renders the UnauthorizedPage when not authenticated', () => {
        (Cookie.getCookie as jest.Mock).mockReturnValue('');

        render(
            <I18nextProvider i18n={i18n}>
                <AuthenticatedComponent />
            </I18nextProvider>
        );

        expect(screen.getByText(/authPageDescription/i)).toBeInTheDocument();
        expect(screen.queryByText(/Authenticated Content/i)).not.toBeInTheDocument();
    });
});

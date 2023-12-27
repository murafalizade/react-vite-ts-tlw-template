import Toastie from '../../src/app/utilities/Toastie';
import '@testing-library/jest-dom';
import {screen} from "@testing-library/react";

describe('Toastie class', () => {

    test('should create a Toastie instance with default position', () => {
        const toastie = new Toastie();
        expect(toastie).toBeInstanceOf(Toastie);
    });

    test('should create a Toastie instance with a specified position', () => {
        const toastie = new Toastie('bottom-end');
        expect(toastie).toBeInstanceOf(Toastie);
    });

    test('should show success toast without action', () => {
        const toastie = new Toastie();
        const successMessage = "Success Message"
        toastie.success(successMessage);
        expect(screen.getByText(successMessage)).toBeInTheDocument();
    });
});

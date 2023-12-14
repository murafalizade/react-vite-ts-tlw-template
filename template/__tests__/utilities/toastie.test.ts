import Toastie from '../../src/app/utilities/Toastie';
import Swal from "sweetalert2";

// Mock the Swal module
jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    mixin: jest.fn(),
    stopTimer: jest.fn(),
    resumeTimer: jest.fn(),
}));

describe('Toastie class', () => {

    beforeEach(() => {
        // Reset the mock implementation before each test
        jest.resetAllMocks();
    });

    afterAll(() => {
        // Restore the original Swal module after all tests are done
        jest.unmock('sweetalert2');
    });

    it('should create a Toastie instance with default position', () => {
        const toastie = new Toastie();
        expect(toastie).toBeInstanceOf(Toastie);
    });

    it('should create a Toastie instance with a specified position', () => {
        const toastie = new Toastie('bottom-end');
        expect(toastie).toBeInstanceOf(Toastie);
    });

    it('should show success toast without action', () => {
        const toastie = new Toastie();
        toastie.success('Success Message');
        expect(Swal.mixin).toHaveBeenCalledWith(expect.objectContaining({ icon: 'success' }));
    });

    it('should show success toast with action',  () => {
        const toastie = new Toastie();
        const mockAction = jest.fn();

        toastie.success('Success Message', mockAction);

        expect(Swal.mixin).toHaveBeenCalledWith(expect.objectContaining({ icon: 'success' }));
        expect(Swal.fire).toHaveBeenCalledWith(expect.objectContaining({ title: 'Success Message' }));
        expect(mockAction).toHaveBeenCalled();
    });

    // Add similar tests for other methods (error, info, warning)...
});

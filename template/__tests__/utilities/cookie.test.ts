import Cookie from '../../src/app/utilities/Cookie';

describe('Cookie class', () => {
    beforeEach(() => {
        // Clear existing cookies before each test
        document.cookie = '';
    });

    test('sets and gets a cookie', () => {
        Cookie.setCookie('testCookie', 'testValue', 1);
        expect(Cookie.getCookie('testCookie')).toBe('testValue');
    });

    test('returns null for non-existing cookie', () => {
        expect(Cookie.getCookie('nonExistingCookie')).toBeNull();
    });

    test('delete a cookie',()=>{
        Cookie.setCookie('deletedCookie', 'testValue', 1);
        Cookie.eraseCookie('deletedCookie');
        expect(Cookie.getCookie('deletedCookie')).toBeNull();
    });
});

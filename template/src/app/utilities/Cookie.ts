class Cookie{
    public static setCookie(name: string, value: string, days: number = 7){
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 24 hours
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/"; // path=/ means cookie is available in all pages
    }

    public static getCookie(name: string){
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    public static eraseCookie(name: string){
        document.cookie = name + "=; Max-Age=-99999999; path=/;";
    }
}

export default Cookie;

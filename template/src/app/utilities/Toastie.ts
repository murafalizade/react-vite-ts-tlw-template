import Swal, {SweetAlertOptions, SweetAlertPosition} from "sweetalert2";

class Toastie {
    private _swal: typeof Swal;

    constructor(position?: SweetAlertPosition) {
        this._swal = Swal.mixin({
            toast: true,
            position: position || "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast:HTMLElement) => {
                toast.addEventListener("mouseenter", this._swal.stopTimer);
                toast.addEventListener("mouseleave", this._swal.resumeTimer);
            },
        });
    }

    success(msj?: string, action?: () => void) {
        const successOptions: SweetAlertOptions = {
            title: msj || "Əməliyyat uğurla başa çatdı!",
            icon: "success",
        };

        if (action) {
            this._swal.fire(successOptions).then(() => {
                action();
                // window.location.reload();
            });
        } else {
            this._swal.fire(successOptions).then(() => {
                // window.location.reload();
            });
        }
    }

    error(msj?: string, action?: (result: any) => void) {
        const errorOptions: SweetAlertOptions = {
            icon: "error",
            title: msj || "Əməliyyat uğursuz oldu!",
        };

        if (action) {
            this._swal.fire(errorOptions).then((result) => action(result));
        } else {
            this._swal.fire(errorOptions).then(()=>{});
        }
    }

    info(msj?: string) {
        this._swal.fire({
            title: "Diqqət!",
            text: msj || "Dəyişiklik baş tutmadı",
            icon: "info",
        }).then(()=>{});
    }

    warning(action: (result: any) => void, msj?: string) {
        Swal.fire({
            icon: "warning",
            title: "Diqqət!",
            text: msj || "Bu əməliyyatı yerinə yetirmək istədiyinizə əminsiniz?",
            showDenyButton: true,
            confirmButtonText: "Bəli",
            denyButtonText: `Xeyr`,
        }).then(async (result) => {
            action(result);
        });
    }
}

export default Toastie;

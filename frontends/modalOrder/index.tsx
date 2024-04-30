import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('modal__active');
        // this.Variable.$el.body.style.overflow = 'hidden';
        front.Variable.$el.body.classList.add('lock')
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('modal__active');
    front.Variable.$el.body.classList.remove('lock')
    setTimeout(() => {
        Fn.clearData()
        // this.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.func.checkForm = function () {
    if (Static.form.fullName.valid && Static.form.email.valid) {
        Static.form.isValid = true
    } else {
        Static.form.isValid = false
    }
    // Fn.initAuto()
    return
}

front.loader = () => {


    Static.limitComment = 120;
    //-----------------------
    Static.form = {
        fullName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "ФИО",
            view: false,
            disable: false
        },
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email адрес",
            view: false,
            disable: false
        },
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Телефон",
            view: false,
            disable: false
        },
        telegram: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Telegram",
            view: false,
            disable: false
        },
        comment: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Комментарий",
            view: false,
            disable: false
        },
        isValid: false,
    }

    if (front.Variable.bonus) {
        clearTimeout(front.Variable.bonus)
    }

    if (front.Variable.bonusWeb) {
        clearTimeout(front.Variable.bonusWeb)
    }
    return
}

front.display = () => {
    return (
        <Navigation />
    )
}

export { front }
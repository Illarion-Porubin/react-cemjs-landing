import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}


front.func.show = function ($el: HTMLElement) {
    front.Variable.$el.body.classList.add('lock')
    setTimeout(() => {
        $el.classList.add('sale__active');
    }, 100);
}

front.func.close = function () {
    Ref.sale.classList.remove('sale__active');
    front.Variable.$el.body.classList.remove('lock')
    setTimeout(() => {
        Fn.clearData()
    }, 500)
}
front.loader = () => {
    return
}

front.display = () => {
    return (
        <Navigation />
    )
}

export { front }
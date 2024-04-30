import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    setTimeout(() => { Func.close() }, 2000)
    return
}


front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('notice__active');
        // front.Variable.bodyLock()
    }, 100);
}

front.func.close = function () {
    Ref.notice.classList.remove('notice__active');
    setTimeout(() => {
        Fn.clearData()
        front.Variable.$el.body.classList.remove('lock')
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
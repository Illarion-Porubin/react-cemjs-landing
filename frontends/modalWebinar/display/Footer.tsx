import { Cemjsx, Static, Ref, Fn, front } from "cemjs-all"

export default function () {
    return (
        <footer class="modal_footer">
            <button
                class="btn btn__green"
                onclick={async () => {
                    Ref.modal.classList.remove('modal__active');
                    setTimeout(() => {
                        Fn.clearData();
                    }, 500)

                    Fn.initOne("modalOrder", {
                        title: "Записаться на бесплатный вебинар"
                    })
                }}
            >
                Записаться
            </button>
        </footer>
    )
}
import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import success from '@svg/icons/success.svg'


export default function () {
    return (
        <footer class="modal_footer">
            <p>Поля отмеченные <span class="star">*</span> обязательные к заполнению</p>
            <button
                class="btn btn__green"
                onclick={async () => {
                    if (!Static.form.isValid) {
                        return
                    }

                    Ref.modal.classList.remove('modal__active');
                    setTimeout(() => {
                        Fn.clearData();
                    }, 500)

                    let data = {
                        action: "contactForm",
                        formName: Static.title,
                        contactForm: {
                            fullName: Static.form.fullName.value,
                            email: Static.form.email.value,
                            phone: Static.form.phone.value ? Static.form.phone.value : "",
                            telegram: Static.form.telegram.value ? Static.form.telegram.value : "",
                            comment: Static.form.comment.value ? Static.form.comment.value : "",
                        }
                    }
                    let answer = await front.Services.functions.sendApi("/api/tg/cem-academy", data)

                    if (answer.error) {
                        Fn.initOne("modalNotify", {
                            icon: success,
                            title: "Error!",
                            text: answer.error
                        })
                        Func.close()
                        return
                    }

                    localStorage.dateStop = Math.floor(Date.now() / 1000)
                    localStorage.sendForm = true
                    Fn.initOne("modalNotify", {
                        icon: success,
                        title: "Спасибо!",
                        text: "Скоро с Вами свяжется наш менеджер!"
                    })
                }}>
                Отправить
            </button>
        </footer>
    )
}
import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import email from '@svg/icons/email.svg'
import phone from '@svg/icons/phone.svg'
import user from '@svg/icons/user.svg'
import telegram from '@svg/icons/telegram.svg'

export default function () {
    return (
        <main class="modal_main modal_form">
            <div class="modal_form-row">
                <div class={[
                    "field",
                    Static.form.fullName.value.length ? "field__valid" : null,
                    Static.form.fullName.error ? "field__error" : null,
                    Static.form.fullName.valid ? "field__success" : null
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.form.fullName.value = e.target.value;
                            front.Services.functions.formFullName(Static.form.fullName)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine field_labelLine__necessarily">
                        <img src={user}></img>
                        <span>{Static.form.fullName.placeholder}</span>
                    </div>
                    <p class="field-status">{Static.form.fullName.error}</p>
                </div>
                <div class={[
                    "field",
                    Static.form.phone.value.length ? "field__valid" : null,
                    Static.form.phone.error ? "field__error" : null,
                    Static.form.phone.valid ? "field__success" : null
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.form.phone.value = e.target.value;
                            front.Services.functions.formPhone(Static.form.phone)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine">
                        <img src={phone}></img>
                        <span>{Static.form.phone.placeholder}</span>
                    </div>
                    <p class="field-status">{Static.form.phone.error}</p>
                </div>
            </div>
            <div class="modal_form-row">
                <div class={[
                    "field",
                    "field_necessarily",
                    Static.form.email.value.length ? "field__valid" : null,
                    Static.form.email.error ? "field__error" : null,
                    Static.form.email.valid ? "field__success" : null
                ]}>
                    <input
                        type="email"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.form.email.value = e.target.value;
                            front.Services.functions.formEmail(Static.form.email)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine field_labelLine__necessarily">
                        <img src={email}></img>
                        <span>{Static.form.email.placeholder}</span>
                    </div>
                    <p class="field-status">{Static.form.email.error}</p>
                </div>
                <div class={[
                    "field",
                    Static.form.telegram.value.length ? "field__valid field__success" : null,
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.form.telegram.value = e.target.value;
                            front.Services.functions.formTelegram(Static.form.telegram)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine">
                        <img src={telegram}></img>
                        <span>{Static.form.telegram.placeholder}</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb_1">{Static.form.comment.placeholder}</h3>
                <div class={[
                    "field field-textarea",
                    Static.form.comment.error ? "field-textarea__error" : null,
                ]}>
                    <textarea
                        ref="modalComment"
                        rows="3"
                        oninput={(e: any) => {
                            Static.form.comment.value = e.target.value;
                            front.Services.functions.formComment(Static.form.comment)
                            Func.checkForm()
                        }} ></textarea>
                    <div class="field-textarea__text">
                        <p class="field-textarea_status">{Static.form.comment.error}</p>
                        <p class="field-textarea__limit" ref="resultComment">{Static.form.comment.value.length} / {Static.limitComment}</p>
                    </div>

                </div>
            </div>

        </main>
    )
}
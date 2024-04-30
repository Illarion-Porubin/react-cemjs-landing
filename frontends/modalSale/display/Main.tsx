import { Cemjsx, Fn, front } from "cemjs-all"

export default function () {
    return (
        <div
            class="sale_content"
            onclick={() => Fn.initOne("modalOrder", { title: `Записаться на курс! Скидка ${front.Variable.bonusProc}%` })}
        >
            <p class="sale_text">Успей приобрести курс со скидкой<span class="sale_text__accent">{front.Variable.bonusProc}%</span></p>
            <button class="btn btn__white">
                Купить!
            </button>
        </div>
    )
}
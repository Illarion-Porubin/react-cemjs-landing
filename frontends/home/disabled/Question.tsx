import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import question from '@svg/icons/question.svg'

export default function () {
  return (
    <div
      class="question"
      ref="question"
      onclick={() => Fn.initOne("modalOrder", { title: "Остались вопросы? Спроси у нас!" })}
    >
      <img src={question} alt="Academy Crypto Emergency" />
    </div>
  )
}
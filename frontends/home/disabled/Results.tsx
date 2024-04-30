import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import done from '@svg/done.svg'

export default function () {
  return (
    <section class="section results" id="results">
      <h2 class="results_title">Обучение на нашем курсе откроет для вас двери в мир финансовых возможностей, предоставив:</h2>
      <div class="results_info">
        <div class="results_info-text">
          {
            Static.skillsResult.map(item => {
              return (
                <p class="text">{item}</p>
              )
            })
          }
        </div>
        <div class="results_info-img">
          <img src={done} alt="Результаты прохождения курса Crypto Emergency Academy" />
        </div>
      </div>
      <div class="results_calls">
        {
          Static.callsResult.map((item) => {
            return (
              <p class="text">{item}</p>
            )
          })
        }
      </div>
      <a
        class="btn btn__white"
        onclick={() => Fn.initOne("modalOrder", { title: "Принять участие в Academy Crypto Emergency!" })}
      >Принять участие</a>
    </section>
  )
}
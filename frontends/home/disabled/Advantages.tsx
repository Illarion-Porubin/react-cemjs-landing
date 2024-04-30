import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
// import advantages from 'json/advantages.json'
import specialFor from 'json/specialFor.json'


export default function () {
  return (
    <section class="section advantages_section" id="advanteges">
      <h2 class="title-section">Этот курс специально для тех, кто:</h2>
      <ul class="advantages">
        {
          specialFor.map((item, index) => {
            return (
              <li class="advantages_item">
                <span class="advantages_item__title">{`${index + 1}. ${item.title}`}</span>
                {/* <p class="text">{item.text}</p> */}
              </li>
            )
          })
        }
      </ul>
      <button
        class="btn btn__fiolet"
        onclick={() => Fn.initOne("modalOrder", { title: "Записаться на курс прямо сейчас!" })}
      >Вступить уже сейчас!</button>
      <div class="circle"></div>
    </section>
  )
}
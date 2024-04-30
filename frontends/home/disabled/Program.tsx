import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import program from 'json/program.json'

export default function () {
  return (
    <section class="section" id="program">
      <h2 class="title-section">Программа</h2>
      <div class="program">
        {
          program.map((item, index) => {
            return (
              <div class="program_item">

                {
                  item?.title ?

                    <div class="program_item__title">
                      <h3>{item.title}</h3>
                    </div> : null
                }

                <div class="program_item-info">
                  <div class="program_item-info__subtitle">
                    <span class="orange">Тема</span>
                    <span>{item.thema}</span>
                  </div>
                  <div class="program_item-info__subtitle">
                    <span class="orange">Эксперт</span>
                    <span>{item.expert}</span>
                  </div>
                  {/* <p class="text"> <span class="bold"></span></p> */}
                </div>

                <div class="program_item-result">
                  <span class="program_item-info__subtitle orange">Результат</span>
                  <input type="checkbox" class="program_item-result__checker" id={`resultChecker${index}`} />
                  <div class="program_item-result_limited">
                    {
                      item.result.map(el => {
                        return (
                          <div>
                            {
                              el?.text ?
                                <div>
                                  {
                                    el.text.map((p) => {
                                      return (
                                        <p class="program_item__text">{p}</p>
                                      )
                                    })
                                  }
                                </div> : null
                            }

                            {
                              el?.list ?
                                <div
                                  class={[el.list.length >= 2 ? "program_item-list" : null]}
                                >
                                  {
                                    el.list.map(list => {
                                      return (
                                        <div>
                                          <p class="text">{list.title}</p>
                                          <ul>
                                            {
                                              list.items.map((li) => {
                                                return (
                                                  <li class="program_item__text">{`- ${li}`}</li>
                                                )
                                              })
                                            }
                                          </ul>
                                        </div>

                                      )
                                    })
                                  }

                                </div> : null
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                  <label for={`resultChecker${index}`} class="program_item-result_readMore btn btn__green"></label>
                </div>
                <div class="circle program-circle__orange"></div>
                <div class="circle program-circle__green"></div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
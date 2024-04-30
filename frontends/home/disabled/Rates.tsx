import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import rates from 'json/rates.json'

export default function () {
  return (
    <section class="section" id="rates">
      <h2 class="title-section">Тарифы</h2>
      <div class="rates">
        {
          rates.map(item => {
            return (
              <div class={["rates_item", `rates_item__${item.color}`]}>
                <div>
                  <h3 class="rates_item-title">{item.title}</h3>
                  <ul class="rates_item-list">
                    {
                      item.about.map(el => {
                        return (
                          <li class="rates_item-list__item">
                            <img class="rates_item__icon" src={el.icon} alt="Academy Crypto Emergency" />
                            <span>{el.text}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>

                {
                  item?.bonus ?
                    <div class={["rates_item-bonus", `rates_item-bonus__${item.color}`]}>
                      <span class="rates_item-bonus__text">{item.bonus}</span>
                    </div> : null
                }

                <a href={item.link} class={["rates_item-price", `rates_item-price__${item.color}`]} target="_blank">{item.price}</a>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}
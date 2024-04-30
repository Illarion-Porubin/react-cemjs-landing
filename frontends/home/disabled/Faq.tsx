import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import faq from 'json/faq.json'


export default function () {
  return (
    <section class="section faq">
      <h2 class="title-section">Часто задаваемые вопросы</h2>

      <ul class="accordeon">
        {
          faq.map((item, index) => {
            return (
              <li class="accordeon_item">
                <input type="radio" name="accordeon" id={`accordeon_${index}`} checked={item.hidden} />
                <label for={`accordeon_${index}`}>{item.question}</label>
                <div class="accordeon_content">
                  <p>{item.answer}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
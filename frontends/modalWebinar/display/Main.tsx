import { Cemjsx, Static } from "cemjs-all"
import rocket from '@images/rocket.png'

export default function () {
    return (
        <main class="modal_main modal_webinar">
            {/* <h2></h2> */}
            <p class="modal_webinar__text">{Static.text}</p>
            {/* <img class="modal_webinar__image" src={rocket} alt="Записаться на бесплатный вебинар" /> */}
            <div class="modal_webinar__effect">
                <img src={rocket} alt="Записаться на бесплатный вебинар" />
                <div class="modal_webinar__image"></div>
            </div>
        </main>
    )
}
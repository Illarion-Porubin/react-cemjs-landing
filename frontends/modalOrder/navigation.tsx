import { Cemjsx, Func, Ref } from "cemjs-all"
import Main from "./display/Main"
import Header from "./display/Header"
import Footer from "./display/Footer"

export default function () {
  return (
    <div>
      <div class="modal" ref="modal" init={Func.show}
        onclick={(e: any) => {
          if (e.target === Ref.modalBody) {
            Func.close()
          }
        }}>
        <div class="modal_body" ref="modalBody">
          <div class="modal_content">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
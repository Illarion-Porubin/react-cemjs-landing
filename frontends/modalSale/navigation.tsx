import { Cemjsx, Func } from "cemjs-all"
import Main from "./display/Main"

export default function () {

  return (
    <div class="sale wrapper" ref="sale" init={Func.show}>
      <Main />
      <span class="sale_close" onclick={Func.close}>x</span>
    </div>
  )
}
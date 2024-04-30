import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import scrollTop from '@svg/scrollTop.svg'

export default function () {
  return (
    <div
      class="scrollTop"
      ref="scrollTop"
      onclick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }}
    >
      <img src={scrollTop} alt="Academy Crypto Emergency" />
    </div>
  )
}
import { Cemjsx, Static, front, Fn, Func, Ref } from "cemjs-all"
import logo from '@svg/logoJetruby.svg'
import menu from 'json/menu.json'
import socials from 'json/socials.json'

const RenderMenu = function ({ items }) {
  return (
    <ul class="header_navList">
      {
        items.map((item) => {
          return (
            <li class="navLink">
              <a
                href={item.link}
                class="header_navList-item"
                onclick={() => {
                  Fn.linkChange("/")
                  // e.preventDefault()
                  // Fn.linkChange("/")
                  // window.scrollTo({
                  //   top: document.querySelector(item.link).offsetTop - 75,
                  //   behavior: "smooth"
                  // })
                }}
              >
                {item.name}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

const RenderMobileMenu = function ({ items }) {
  return (
    <ul class="header_mobile-list">
      {
        items.map((item) => {
          return (
            <li
            // onclick={() => {
            //   console.log('=222c67=', front.Variable.dataUrl)
            // }}
            >
              <a
                href={item.link}
                class="header_mobile-list__item"
                onclick={(e: any) => {
                  Fn.linkChange("/")
                  // e.preventDefault()
                  // window.scrollTo({
                  //   top: document.querySelector(item.link).offsetTop - 85,
                  //   behavior: "smooth"
                  // })
                  document.querySelector('body').classList.remove('lock')
                  front.Variable.openSidebar = false;

                  Fn.init()
                }}
              >
                {item.name}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

const RenderMobileMenuSocials = function ({ items }) {
  return (
    <ul class="header_mobile-socials">
      {
        items.map(item => {
          return (
            <li>
              <a class="header_mobile-socials__item" href={item.link} onclick={Fn.link}>
                <img src={item.img} alt={item.name} />
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default function () {
  return (
    <div class="header_inner">
      <a href="/" class="header_logo">
        <img src={logo} alt="logoJetruby" />
      </a>
      <nav class="header_nav">
        <RenderMenu items={menu} />
      </nav>
      <div class="header_btns">
        <button
          class="header_btn btnJet btnJet__orange"
          onclick={() => Fn.initOne("modalOrder", { title: "Записывайтесь на вебинар" })}
        >
          Get ballpark estimate
        </button>
        <div
          ref="burger"
          class={["header_burger", front.Variable.openSidebar ? "header_burger__active" : null]}
          onclick={() => {
            front.Variable.$el.body.classList.toggle('lock')
            front.Variable.openSidebar = !front.Variable.openSidebar;
            Fn.initAll();
          }}
        >
          <span class="header_burger__item"></span>
          <span class="header_burger__item"></span>
          <span class="header_burger__item"></span>
        </div>
      </div>

      <div
        ref="mobileMenu"
        class={[
          "header_mobile-menu",
          front.Variable.openSidebar ? "header_mobile-menu__active" : null
        ]}
      >
        <RenderMobileMenu items={menu} />
        <div class="header_mobile-details">
          <button
            class="btn btn__black"
            onclick={() => {
              front.Variable.openSidebar = false;
              Fn.initOne("modalWebinar", {
                title: "Записаться на бесплатный вебинар",
                text: "Посетить бесплатный вебинар от Academy Crypto Emergency"
              })
              Fn.initAll();
            }}
          >
            Записаться на вебинар
          </button>
          <RenderMobileMenuSocials items={socials} />
        </div>
      </div>
    </div>
  )
}
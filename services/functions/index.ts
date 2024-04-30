export * from './validator'
export * from './validForms'
export * from './sendApi'

export const loader = function (Variable, Fn) {
  let nowTime = Math.floor(Date.now() / 1000)
  if (localStorage.dateStop && Number(localStorage.dateStop) + (60 * 60 * 24 * 14) <= nowTime) {
    delete localStorage.dateStop
    // delete localStorage.sendForm
    delete localStorage.visit
    delete localStorage.showWeb
  }

  if (localStorage.visit && localStorage.visit > 7) {
    localStorage.dateStop = nowTime
  }

  if (!localStorage.dateStop && !localStorage.sendForm) {
    if (!localStorage.visit || localStorage.visit <= 3) {
      Variable.bonusProc = 10
    } else {
      Variable.bonusProc = 15
    }

    if (!localStorage.showWeb || localStorage.showWeb < 3) {


      Variable.bonusWeb = setTimeout(() => {
        if (!localStorage.showWeb) {
          localStorage.showWeb = 1
        } else {
          localStorage.showWeb++
        }

        Fn.initOne({
          name: "modalWebinar",
          data: {
            title: "Посетить бесплатный вебинар",
            text: "Записаться на вебинар от Academy Crypto Emergency"
          }
        })

      }, 10000)


    }

    Variable.bonus = setTimeout(() => {
      if (!localStorage.visit) {
        localStorage.visit = 1
      } else {
        localStorage.visit++
      }

      Fn.initOne({
        name: "modalSale"
      })
    }, 60000)

  }





}
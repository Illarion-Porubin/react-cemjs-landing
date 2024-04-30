import {
  validFullName,
  validPhone,
  validEmail,
  validComment
} from './validator'

interface Form {
  value: string,
  valid: boolean,
  error: boolean | string,
  placeholder: string,
  view: boolean,
  disable: boolean
}

export const formFullName = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validFullName(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Некорректно введён ФИО"
    form.valid = false
    return false
  }
}

export const formPhone = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validPhone(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Некорректно номер"
    form.valid = false
    return false
  }
}

export const formEmail = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validEmail(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Некорректный email"
    form.valid = false
    return false
  }
}

export const formTelegram = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  } else {
    form.error = true
    form.valid = true
    return true
  }
}

export const formComment = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validComment(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Больше 120 символов"
    form.valid = false
    return false
  }
}
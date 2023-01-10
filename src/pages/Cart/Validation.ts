const checkName = (name?: string): boolean => {
  const nameArr = name?.split(' ') || []
  if (nameArr.length < 2) return false
  for (const i of nameArr) {
    if (i.length < 3) return false
  }
  return true
}

const checkPhone = (phone?: string): boolean => {
  const phoneArr = phone?.split('') || []
  if (phoneArr[0] !== '+') {
    return false
  }
  if (phoneArr.length < 10) {
    return false
  }
  return true
}

const checkShip = (ship?: string): boolean => {
  const shipArr = ship?.split(' ') || []
  if (shipArr.length < 3) return false
  for (const i of shipArr) {
    if (i.length < 5) return false
  }
  return true
}

const checkEmail = (email?: string): boolean => {
  if (
    !email?.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    return false
  }
  return true
}

const checkCard = (card?: string): boolean => {
  if (card?.length !== 16) {
    return false
  }
  return true
}

const checkValid = (valid?: string): boolean => {
  const validArr = valid?.split('/') || []
  if (Number.parseInt(validArr[0]) > 12) return false
  if (Number.parseInt(validArr[1]) > 31) return false
  if (valid!.length > 5) return false
  return true
}

const checkCVV = (cvv?: string): boolean => {
  if (cvv?.length !== 3) {
    return false
  }
  return true
}

export { checkName, checkPhone, checkShip, checkEmail, checkCard, checkValid, checkCVV }

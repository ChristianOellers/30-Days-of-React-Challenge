const hexColor = ():string => {
  const str: string = '0123456789abcdef'
  let color: string = ''

  for (let i: number = 0; i < 6; i++) {
    let index: number = Math.floor(Math.random() * str.length)
    color += str[index]
  }

  return '#' + color
}


export default hexColor


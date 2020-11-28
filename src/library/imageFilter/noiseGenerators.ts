import { getRandomNumber } from './helpers'

// let addition
// let addition1
let addition2

const greenmedNoiseImgData = (imgData:ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 9;

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.5

    const randomcolor2 = 0.6 + Math.random() * 0.5

    const randomcolor3 = 0.6 + Math.random() * 0.5

    imgData.data[i] = imgData.data[i + 1] * 0.5 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 2] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i] * 0.99 * randomcolor3
  }
  return imgData
}

const darkPurpleMinNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 9

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.5

    const randomcolor2 = 0.6 + Math.random() * 0.5

    const randomcolor3 = 0.6 + Math.random() * 0.5

    imgData.data[i] = imgData.data[i] * 0.5 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.3 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

const tealMinNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 1

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.1

    const randomcolor2 = 0.6 + Math.random() * 0.5

    const randomcolor3 = 0.6 + Math.random() * 0.5

    imgData.data[i] = imgData.data[i] * 0.99 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

const purpleMinNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 1

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.5

    const randomcolor2 = 0.6 + Math.random() * 0.2

    const randomcolor3 = 0.6 + Math.random() * 0.8

    imgData.data[i] = imgData.data[i] * 0.99 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

const blueMinNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 1

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.1

    const randomcolor2 = 0.6 + Math.random() * 0.2

    const randomcolor3 = 0.6 + Math.random() * 0.7

    imgData.data[i] = imgData.data[i] * 0.99 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

const greenMinNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 1

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.1

    const randomcolor2 = 0.6 + Math.random() * 0.5

    const randomcolor3 = 0.6 + Math.random() * 0.4

    imgData.data[i] = imgData.data[i] * 0.99 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

const pinkMinNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 1

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.6

    const randomcolor2 = 0.6 + Math.random() * 0.1

    const randomcolor3 = 0.6 + Math.random() * 0.4

    imgData.data[i] = imgData.data[i] * 0.99 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

const matrixImgData = (imgData: ImageData):ImageData => {
  let randomnumber

  for (let i = 0; i < imgData.data.length; i += 4) {
    randomnumber = getRandomNumber(0, 200)
    const addition = 0
    if (randomnumber > 0 && randomnumber < 50) {
      // addition1 = 20
      addition2 = 30
    } else if (randomnumber > 49 && randomnumber < 100) {
      // addition1 = 10
      addition2 = 90
    } else {
      // addition1 = 30
      addition2 = 10
    }

    if (imgData.data[i] - addition > 255) {
      imgData.data[i] -= addition
    } else {
      imgData.data[i] += addition
    }

    if (imgData.data[i + 1] + addition > 255) {
      imgData.data[i + 1] -= addition2
    } else {
      imgData.data[i + 1] += addition2
    }
  }
  return imgData
}

const matrix2 = (imgData: ImageData):ImageData => {
  let randomnumber

  for (let i = 0; i < imgData.data.length; i += 4) {
    randomnumber = getRandomNumber(0, 200)
    const addition = 0
    if (randomnumber > 0 && randomnumber < 50) {
      // addition1 = 20
      addition2 = 30
    } else if (randomnumber > 49 && randomnumber < 100) {
      // addition1 = 10
      addition2 = 90
    } else {
      // addition1 = 70
      addition2 = 10
    }

    if (imgData.data[i] - addition > 255) {
      imgData.data[i] -= addition
    } else {
      imgData.data[i] += addition
    }

    if (imgData.data[i + 1] + addition > 255) {
      imgData.data[i + 1] -= addition2
    } else {
      imgData.data[i + 1] += addition2
    }
  }
  return imgData
}

const cosmicImgData = (imgData: ImageData):ImageData => {
  let randomnumber = 0
  const addition = 0
  for (let i = 0; i < imgData.data.length; i += 4) {
    randomnumber = getRandomNumber(0, 200)
    if (randomnumber > 0 && randomnumber < 50) {
      //   addition1 = 0
      addition2 = 30
    } else if (randomnumber > 49 && randomnumber < 100) {
      //   addition1 = 100
      addition2 = 90
    } else {
    //  addition1 = 70
      addition2 = 10
    }

    if (imgData.data[i] - addition > 255) {
      imgData.data[i] -= addition
    } else {
      imgData.data[i] += addition
    }

    if (imgData.data[i + 1] + addition > 255) {
      imgData.data[i + 1] -= addition2
    } else {
      imgData.data[i + 2] += addition2
    }
  }
  return imgData
}

const minNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 53

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.4

    const randomcolor2 = 0.6 + Math.random() * 0.4

    const randomcolor3 = 0.6 + Math.random() * 0.4

    imgData.data[i] = imgData.data[i] * 0.99 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

const redMinNoiseImgData = (imgData: ImageData):ImageData => {
  // const rand = (0.5 - Math.random()) * 1

  for (let i = 0; i < imgData.data.length; i += 4) {
    const randomcolor1 = 0.6 + Math.random() * 0.6

    const randomcolor2 = 0.6 + Math.random() * 0.4

    const randomcolor3 = 0.6 + Math.random() * 0.4

    imgData.data[i] = imgData.data[i] * 0.99 * randomcolor1
    imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomcolor2

    imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomcolor3
  }
  return imgData
}

export {
  redMinNoiseImgData,
  greenmedNoiseImgData,
  greenMinNoiseImgData,
  purpleMinNoiseImgData,
  darkPurpleMinNoiseImgData,
  tealMinNoiseImgData,
  cosmicImgData,
  blueMinNoiseImgData,
  matrix2,
  minNoiseImgData,
  matrixImgData,
  pinkMinNoiseImgData
}

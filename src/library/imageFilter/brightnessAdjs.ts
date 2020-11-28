import { getRandomNumber } from './helpers'

let i
// let addition1
let addition2
// let addition

const darkifyImgData = (imgdata: ImageData) => {
  const brightnessAdj = 20
  for (i = 0; i < imgdata.data.length; i += 4) {
    imgdata.data[i] -= brightnessAdj
    imgdata.data[i + 1] -= brightnessAdj
    imgdata.data[i + 2] -= brightnessAdj
  }
  return imgdata
}

const incbrightnessImgData = (imgdata: ImageData) => {
  const brightnessAdj = 50
  for (i = 0; i < imgdata.data.length; i += 4) {
    imgdata.data[i] += brightnessAdj
    imgdata.data[i + 1] += brightnessAdj
    imgdata.data[i + 2] += brightnessAdj
  }
  return imgdata
}

const incbrightnessTwoImgData = (imgdata: ImageData) => {
  const brightnessAdj = 80
  for (i = 0; i < imgdata.data.length; i += 4) {
    imgdata.data[i] += brightnessAdj
    imgdata.data[i + 1] += brightnessAdj
    imgdata.data[i + 2] += brightnessAdj
  }
  return imgdata
}

const invertImgData = (imgdata: ImageData) => {
  for (i = 0; i < imgdata.data.length; i += 4) {
    imgdata.data[i] = 255 - imgdata.data[i]
    imgdata.data[i + 1] = 255 - imgdata.data[i + 1]
    imgdata.data[i + 2] = 255 - imgdata.data[i + 2]
  }
  return imgdata
}

const satAdjImgData = (imgdata: ImageData) => {
  const satAdj = 150
  for (i = 0; i < imgdata.data.length; i += 4) {
    imgdata.data[i] -= satAdj
    imgdata.data[i + 1] -= satAdj
    imgdata.data[i + 2] -= satAdj
  }
  return imgdata
}

// an experimental function that is used for the testing of image filtering.
const a = (imgdata: ImageData) => {
  let randomnumber = 0

  for (i = 0; i < imgdata.data.length; i += 4) {
    randomnumber = getRandomNumber(0, 200)
    const addition = 0
    if (randomnumber > 0 && randomnumber < 50) {
      // addition1 = 0
      addition2 = 30
    } else if (randomnumber > 49 && randomnumber < 100) {
      // addition1 = 100
      addition2 = 90
    } else {
      // addition1 = 70
      addition2 = 10
    }

    if (imgdata.data[i] - addition > 255) {
      imgdata.data[i] -= addition
    } else {
      imgdata.data[i] += addition
    }

    if (imgdata.data[i + 1] + addition > 255) {
      imgdata.data[i + 1] -= addition2
    } else {
      imgdata.data[i + 2] += addition2
    }
  }
  return imgdata
}

const pixelBlueImgData = (imgdata: ImageData) => {
  let randomnumber = 0

  for (i = 0; i < imgdata.data.length; i += 4) {
    randomnumber = getRandomNumber(0, 200)
    const addition = 0
    if (randomnumber > 0 && randomnumber < 50) {
      // addition1 = 0
      addition2 = 30
    } else if (randomnumber > 49 && randomnumber < 100) {
      // addition1 = 100
      addition2 = 90
    } else {
      // addition1 = 70
      addition2 = 10
    }

    if (imgdata.data[i] - addition > 255) {
      imgdata.data[i] -= addition
    } else {
      imgdata.data[i] += addition
    }

    if (imgdata.data[i + 1] + addition > 255) {
      imgdata.data[i + 1] -= addition2
    } else {
      imgdata.data[i + 2] += addition2
    }
  }
  return imgdata
}

export {
  satAdjImgData,
  incbrightnessImgData,
  incbrightnessTwoImgData,
  darkifyImgData,
  invertImgData,
  a,
  pixelBlueImgData
}

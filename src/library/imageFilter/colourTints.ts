import { getRandomNumber } from './helpers'

let i

const lemonImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 1] = imgData.data[i] + 50
  }
  return imgData
}

const coralImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 2] = imgData.data[i + 1] + 50
  }
  return imgData
}

const frontwardImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i + 2]
    imgData.data[i + 2] = imgData.data[i + 1] + 50
  }
  return imgData
}

const vintageImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] += 120
    imgData.data[i + 1] += 70
    imgData.data[i + 2] += 13
  }

  return imgData
}

const perfumeImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] += 80
    imgData.data[i + 1] += 40
    imgData.data[i + 2] += 120
  }
  return imgData
}

const serenityImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] += 10
    imgData.data[i + 1] += 40
    imgData.data[i + 2] += 90
  }
  return imgData
}

const pinkAuraImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] += 90
    imgData.data[i + 1] += 10
    imgData.data[i + 2] += 90
  }
  return imgData
}

const hazeImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] += 90
    imgData.data[i + 1] += 90
    imgData.data[i + 2] += 10
  }
  return imgData
}

const mellowImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 2] = 120 - imgData.data[i + 2]
  }
  return imgData
}

const solangeDarkImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 200 - imgData.data[i]

    // imgData.data[i + 1] = 255 - imgData.data[i + 1];
    // imgData.data[i + 2] = 255 - imgData.data[i + 2];
  }
  return imgData
}

const zaptImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    // imgData.data[i] = 255 - imgData.data[i];
    imgData.data[i + 1] = 255 - imgData.data[i + 1]
    // imgData.data[i + 2] = 255 - imgData.data[i + 2];
  }
  return imgData
}

const neueImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 2] = 255 - imgData.data[i + 2]
  }
  return imgData
}

const eonImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 1] = 120 - imgData.data[i + 1]
    imgData.data[i + 2] = 100 - imgData.data[i + 2]
  }
  return imgData
}

const aeonImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 1] = 60 - imgData.data[i + 1]
    imgData.data[i + 2] = 100 - imgData.data[i + 2]
  }
  return imgData
}

const rosetintImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 80
    imgData.data[i + 1] = avg + 20
    imgData.data[i + 2] = avg + 31
  }
  return imgData
}

const slateImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 4
    imgData.data[i + 1] = avg + 3
    imgData.data[i + 2] = avg + 12
  }
  return imgData
}

const purplescaleImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 90
    imgData.data[i + 1] = avg + 40
    imgData.data[i + 2] = avg + 80
  }
  return imgData
}

const radioImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 5
    imgData.data[i + 1] = avg + 40
    imgData.data[i + 2] = avg + 20
  }
  return imgData
}

const twentiesImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 18
    imgData.data[i + 1] = avg + 12
    imgData.data[i + 2] = avg + 20
  }
  return imgData
}

const oceanImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] += 10
    imgData.data[i + 1] += 20
    imgData.data[i + 2] += 90
  }
  return imgData
}

const greyscaleImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg
    imgData.data[i + 1] = avg
    imgData.data[i + 2] = avg
  }
  return imgData
}

const redgreyscaleImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 100
    imgData.data[i + 1] = avg + 40
    imgData.data[i + 2] = avg + 20
  }
  return imgData
}

const greengreyscaleImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 20
    imgData.data[i + 1] = avg + 70
    imgData.data[i + 2] = avg + 20
  }
  return imgData
}

const warmth = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i] + 10
    imgData.data[i + 1] = imgData.data[i + 1] + 18
  }
  return imgData
}

const crimson = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i] + 20
    imgData.data[i + 1] = imgData.data[i + 2] + 20
  }
  return imgData
}

const phase = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i] + getRandomNumber(10, 20)
    imgData.data[i + 1] = imgData.data[i + 2] + getRandomNumber(10, 20)

    imgData.data[i + 2] = imgData.data[i + 2] + getRandomNumber(10, 20)
  }
  return imgData
}

const grime = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 1] = imgData.data[i] + 5
    imgData.data[i] = imgData.data[i] + 1
  }
  return imgData
}

const eveningImgData = (imgData: ImageData) => {
  const satAdj = 60
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] -= satAdj
    imgData.data[i + 1] -= satAdj
    imgData.data[i + 2] -= satAdj
  }
  return imgData
}

const sunset = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 1] = imgData.data[i] + 50
    imgData.data[i + 2] = imgData.data[i + 2] + 12
  }
  return imgData
}

const wood = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i] + 30
    imgData.data[i + 1] = imgData.data[i + 1] + 12
  }
  return imgData
}

const lixConv = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255 - imgData.data[i]
    imgData.data[i + 1] = 255 - imgData.data[i + 1]
  }
  return imgData
}

const ryoConv = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255 - imgData.data[i]
    imgData.data[i + 2] = 255 - imgData.data[i + 2]
  }
  return imgData
}

const blueGreyscaleImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 20
    imgData.data[i + 1] = avg + 30
    imgData.data[i + 2] = avg + 60
  }
  return imgData
}

const solangeImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255 - imgData.data[i]
  }
  return imgData
}

const solangeGreyImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i + 2]
    imgData.data[i + 1] = imgData.data[i + 1]
    imgData.data[i + 2] = imgData.data[i]
  }
  return imgData
}

const coolTwilightImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 1] = 255 - imgData.data[i + 1]
  }
  return imgData
}

const bluesImgData = (imgData: ImageData) => {
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 2] = 255 - imgData.data[i + 2]
  }
  return imgData
}

const horizonImgData = (imgData: ImageData) => {
  const satAdj = 150
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] -= satAdj
    imgData.data[i + 1] -= satAdj
    imgData.data[i + 2] -= satAdj
  }
  return imgData
}

export {
  bluesImgData,
  coolTwilightImgData,
  blueGreyscaleImgData,
  aeonImgData,
  solangeGreyImgData,
  solangeImgData,
  ryoConv,
  lixConv,
  wood,
  sunset,
  lemonImgData,
  coralImgData,
  frontwardImgData,
  greyscaleImgData,
  perfumeImgData,
  vintageImgData,
  serenityImgData,
  slateImgData,
  warmth,
  redgreyscaleImgData,
  grime,
  phase,
  crimson,
  greengreyscaleImgData,
  oceanImgData,
  radioImgData,
  neueImgData,
  eonImgData,
  zaptImgData,
  solangeDarkImgData,
  pinkAuraImgData,
  hazeImgData,
  mellowImgData,
  eveningImgData,
  horizonImgData,
  twentiesImgData,
  rosetintImgData,
  purplescaleImgData
}

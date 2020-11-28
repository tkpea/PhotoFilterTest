
const extremeOffsetBlue = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 35
    imgData.data[i + 2] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const extraOffsetBlue = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 15
    imgData.data[i + 2] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const extremeOffsetGreen = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 35
    imgData.data[i + 1] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const extraOffsetGreen = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 15
    imgData.data[i + 1] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const extremeOffsetRed = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 35
    imgData.data[i] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const extraOffsetRed = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 15
    imgData.data[i] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const offset = (imgData: ImageData) => {
  console.log('offset called')
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 5
    imgData.data[i] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const offsetGreenImgData = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 5
    imgData.data[i + 1] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

const offsetBlueImgData = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const offset = 5
    imgData.data[i + 2] =
      imgData.data[i + 4 * offset * offset] === undefined
        ? 0
        : imgData.data[i + 4 * offset]
  }
  return imgData
}

export {
  offset,
  extraOffsetBlue,
  extraOffsetGreen,
  extraOffsetRed,
  extremeOffsetBlue,
  extremeOffsetGreen,
  extremeOffsetRed,
  offsetGreenImgData,
  offsetBlueImgData
}


let i

function addHorizontalLineImgData (imgData: ImageData): ImageData {
  let inc = 0

  for (i = 0; i < imgData.data.length; i += 4) {
    inc += 1
    if (inc > 255) {
      inc = 0
    }
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + inc
    imgData.data[i + 1] = avg + 70
    imgData.data[i + 2] = avg + 20
  }
  return imgData
};

const addDiagonalLinesImgData = (imgData: ImageData) => {
  let inc = 0
  for (i = 0; i < imgData.data.length; i += 4) {
    inc += 20
    if (inc > 255) {
      inc = 0
    }
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + inc
    imgData.data[i + 1] = avg + 70
    imgData.data[i + 2] = avg + 20
  }
  return imgData
}

const addGreenDiagonalLinesImgData = (imgData: ImageData) => {
  let inc = 0
  for (i = 0; i < imgData.data.length; i += 4) {
    inc += 20
    if (inc > 255) {
      inc = 0
    }
    const avg =
      (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = avg + 5
    imgData.data[i + 1] = avg + inc
    imgData.data[i + 2] = avg + 20
  }
  return imgData
}

export {
  addDiagonalLinesImgData,
  addGreenDiagonalLinesImgData,
  addHorizontalLineImgData
}

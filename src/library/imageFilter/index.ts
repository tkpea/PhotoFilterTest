import { applyFilter, EFilterType, FilterCatalog } from './filters'
export const filterType = EFilterType
export const filterCatalog = FilterCatalog

export function filterImageData (userImgData: ImageData, filter: EFilterType | number): ImageData | null {
  const newimgData = applyFilter(filter, userImgData)
  return newimgData
}

export function filterImagePath (path: string, filter: EFilterType | number): Promise<string | null> {

  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = path
 
    image.onload = () => {
      resolve(filterImageElement(image,filter))
    }
    image.onerror = () => {
      reject(null)
    }
  })
}

export function filterImageElement (userImgElement: HTMLImageElement, filter: EFilterType): string | null{
  const imgData = imageElementToCanvas(userImgElement)
  if(imgData == null) {
    return null
  }
  const newImgData = applyFilter(filter, imgData)
  const canvas = document.createElement('canvas')
  canvas.width = newImgData.width
  canvas.height = newImgData.height
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d') 
  if(ctx == null) {
    return null
  }
  ctx.putImageData(newImgData, 0, 0)
  return canvas.toDataURL()
}

export function imageElementToCanvas (img:HTMLImageElement):ImageData | null{
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx:CanvasRenderingContext2D | null= canvas.getContext('2d')
  if(ctx) {
    ctx.drawImage(img, 0, 0)
    // dataURL を取得
    canvas.toDataURL('image/png')
    // blob を取得
    canvas.toBlob((b) => { return b }, 'image/jpeg', 1.0)
    return ctx.getImageData(0, 0, img.width, img.height)
  } else {
    return null
  }
}
export function getFilterTypes(): string[] {
  const results = []
  for (const type of enumKeys(EFilterType)) {
  results.push(type)
  }
  return results
}

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

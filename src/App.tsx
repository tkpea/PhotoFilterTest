import React, { useEffect, useState } from 'react';
import './App.css';
import {filterImagePath,  getFilterTypes} from './library/imageFilter'
import { UnduplicateRandom } from './library/imageFilter/Math/Ramdom';

function App() {
  const [paths, setPaths] = useState<string[]>([])
  const [filterdImagePaths, setFilterdImagePaths] = useState<Array<string | null>>([])
  const filters = getFilterTypes();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const imageNum: number[] = UnduplicateRandom(1,49, 4)
    setPaths(imageNum.map((num) => {
      return `/images/${String(num).padStart(3, "0")}.jpg`
    }))
    initialImage()
  },[]) 

  const initialImage = () => {
    const newImagePath = []
    for(let path of paths) {
      newImagePath.push(`${path}`);
    }
    setFilterdImagePaths(newImagePath)
  }

  const applyFilter = async  (value: number) => {
    const newImagePath = []
    setIsLoading(true)
    if(value > -1 ) {
      for(let path of paths) {
        const newPath = await filterImagePath(`${path}`,value)
        newImagePath.push(newPath);
      }
      setFilterdImagePaths(newImagePath)
    } else {
      initialImage()
    }
    setIsLoading(false)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <select className="filterSelect" placeholder="フィルターを選択してください" onChange={(event) => {
          applyFilter(parseInt(event.target.value))
        }}>
            <option value={-1}>
              Original
            </option>
          {
            filters.map((value, index) => {
              return (
                <option value={index}>
                  {value} 
                </option>
              )
            })
          }
        </select>
        <div className="imageContainer">
        {
          paths.map((imagePath) => {
              return(
                <div className="item">
                  <img src={`${imagePath}`} alt={imagePath}/>
                </div>
              )
          })
        }
        </div>
        <div className="imageContainer">
        {
          filterdImagePaths.map(imagePath => {
            if(imagePath) {
              return(
                <div className={"item " + (isLoading ? "loading": "")}>
                  <img src={imagePath} alt={imagePath}/>
                </div>
              )

            }
          })
        }
        </div>
        <section>

        </section>
      </main>
  </div>
  );
}

export default App;

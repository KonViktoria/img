import { Model } from "../Model/Model"
import {useState} from "react"
import styles from './imgListItem.module.css'
export const ImgListItem=({largeImageURL,webformatURL,tags,likes,views,comments,downloads})=>{

const [isShoweModel, setShoweModel] = useState(false)

const toglModel=()=>{
    setShoweModel(!isShoweModel)
 
    
}

    return <li className={styles.li} >
      {/* <a href={largeImageURL}> */}
<img className={styles.img} src={webformatURL} alt={tags} onClick={toglModel} />
      {/* </a> */}
      <div>
        <p><b>Likes</b><span> {likes
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</span></p> 
      <p><b>Views</b><span> {views
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</span></p>
    <p><b>Comments</b><span> {comments
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</span></p>
    <p><b>Downloads</b><span> {downloads
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</span></p>
      </div>
     {isShoweModel && <Model toglModel={toglModel}>
      <img src={largeImageURL}/>
      </Model>}
    </li>
}
{/* {img.largeImageURL} - делаю деструктеризацию и убераю img.*/ }
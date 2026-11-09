import { ImgListItem } from "../ImgListItem/ImgListItem"
import styles from './imgList.module.css'
export const ImgList=({data})=>{

return <ul className={styles.ul}>{data.map(({id,largeImageURL,webformatURL,tags,likes,views,comments,downloads})=>
<ImgListItem
 key={id}
 largeImageURL={largeImageURL}
 webformatURL={webformatURL}
 tags={tags}
 likes={likes}
 views={views}
 comments={comments}
 downloads={downloads}
 />)}
    </ul> 
    }
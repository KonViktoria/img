import { ImgListItem } from "../ImgListItem/ImgListItem"

export const ImgList=({data})=>{

return <ul>{data.map(({id,largeImageURL,webformatURL,tags,likes,views,comments,downloads})=>
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
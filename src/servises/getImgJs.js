import axios from 'axios'

export const getImg=async(name, page)=>{
const API_KEY="58140725-a1eedda21a901c65803a1f962"
 const searchParams= new URLSearchParams({
    key: API_KEY,
    q: name,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
   per_page: 20,
   page: page
    })
    const url = `https://pixabay.com/api/?${searchParams}` 
  const response = await axios.get(url)
  return response.data
  }

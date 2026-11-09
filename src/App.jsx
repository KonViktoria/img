import { useState, useEffect, useRef} from 'react'
import { getImg } from './servises/getImgJs.js' // Импортируем функцию для получения картинок с сервера
import { Form } from './components/Form/Form.jsx'
import { ImgList } from './components/ImgList/ImgList.jsx'
import styles from './app.module.css'

function App() {
  const [name, setName] = useState('')
const[data,setData]=useState([])
const[page,setPage]=useState(1)

//useRef - хук который позволяет делать ссылку на ДОМ элемент
const ref= useRef()
 // useEffect выполняется после первого рендера
// и повторно при изменении page
useEffect(()=>{
// Проверяем, что пользователь ввёл название картинки.
  // !== означает "строго не равно".
  // Если name пустой, запрос не выполняется.
  if(name!=='')
  // getImg — возвращает Promise /функция, которая отправляет GET-запрос.
{ getImg(name,page).then((response)=>{
     // обновляем состояние data, добавляя новые картинки к старым.
setData([...data,...response.hits]);}
)}},[page]) // [page] массив зависимостей


  const handelInputChange=(event)=>{
  setName(event.target.value)
  }

  const handelSubmit=(event)=>{
event.preventDefault()
getImg(name, page).then((response)=>{
setData([...data,...response.hits])
})}

const handelLoadMore=()=>{
  setPage(prevPage=>prevPage +1)
  
}
const clearInput=()=>{
  setName('')
  ref.current.focus()
}

  return (
    <>
    <Form handelSubmit={handelSubmit}
    handelInputChange={handelInputChange}
    name={name}
    clearInput={clearInput}
    ref={ref}/>

    <ImgList data={data}/>
    
    <button className={styles.btnLoadMore} type='button'onClick={handelLoadMore} >Load more</button>
  
    </>
  )
}

export default App

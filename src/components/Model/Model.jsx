import { useEffect } from 'react';
import styles from './model.module.css'
export const Model=({toglModel,children})=>{
//toglModel функция которая закрывает моделку
//children содержимое моделки внутри компонента 
useEffect(()=>{
//при нажатии clouseByEsc 
//'keydown - при нажатии на клавиатуру
//event.code название клавиши которую я ввожу
const clouseByEsc=(event)=>{  
    console.log(event.code);
    
if(event.code==='Escape'){
    toglModel()
}
} 

window.addEventListener('keydown', clouseByEsc)    

return ()=>{
window.removeEventListener('keydown', clouseByEsc)
}

},[toglModel])
// при нажатии на серую плоскость (back droop className={styles.owerlain})
//event.target - то куда нажала, event.currentTarget -там где висит слушатель событий
    const clouseByClick=(event)=>{
if(event.target===event.currentTarget){
    toglModel()
}
}
    return <div className={styles.owerlain} onClick={clouseByClick}>
        <div className={styles.inner}>
            <button className={styles.clouseBtn} type='button' onClick={toglModel} >X</button>
{children}
        </div>
    </div>

}
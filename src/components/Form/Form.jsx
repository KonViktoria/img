import styles from './form.module.css'
import { FaSearchLocation } from "react-icons/fa";
export const Form=({handelSubmit,handelInputChange,name,clearInput, ref})=>{


    return  <form className={styles.form} onSubmit={handelSubmit}>
    <input   className={styles.inputForm} type='text'value={name} onChange={handelInputChange} ref={ref} />
    
    <button className={styles.btnSearch} type='submit'>
        <FaSearchLocation />
        </button>
        <button className={styles.btnX}type='button' onClick={clearInput}>X</button>
    </form>
    
    }
    
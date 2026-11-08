
export const Form=({handelSubmit,handelInputChange,name})=>{

    return  <form onSubmit={handelSubmit}>
    <input type='text'value={name} onChange={handelInputChange} />
    <button type='submit'>Submit</button>
    </form>
    
    }
    
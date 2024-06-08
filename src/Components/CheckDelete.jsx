import React, { useState } from 'react'
import '../App.css'
const arr= ["play Cricket", "play video game", "Read Book"];

const CheckDelete = () => {
    const arrList = arr.map(item=>({list:item, complete:false}))
    const [list, setList] = useState(arrList);
    const handleDelete= (indexDelete)=>{
      const afterDelete = list.filter((_,i)=> i!=indexDelete);
      setList(afterDelete)
    }
    const handleCheck = (index)=>{
      const item = [...list];
      item[index].complete = !item[index].complete;
      setList(item);
    }
    return (
      <div>
        {
          list.map((item,i)=>(
          <div key={i} className='list'>
            <input type="checkbox"  checked={item.complete} onChange={()=>handleCheck(i)} />
            <li>{item.list}</li>
            {
              item.complete?
            <button onClick={()=>handleDelete(i)}>Del</button>:<div></div>
            }
          </div>
          ))
        }
        
      </div>
    )
}

export default CheckDelete;

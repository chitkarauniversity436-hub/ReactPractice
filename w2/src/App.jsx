import React, { useState ,useEffect } from "react";
const App = () => {
    const[get,set]=useState("");
    const[list,setList] = useState(JSON.parse(localStorage.getItem("list")) || []);

    function add(){
        let obj={
            id : Date.now(),
            text : get ,
        }
        setList([...list,obj]) ;
        set("") ;
    }


    function del(k1){
        let o = list.filter((r)=>{
            if(k1==r.id){
                return false ; 
            }
            return true ;
        }) 
        setList(o);
    }

    function edt(k2){
        let pr = prompt("Enter value :") ;

        let w1 = list.map((f)=>{
            if(k2==f.id){
                f.text = pr;
            }
            return f ;
        })
        setList(w1);
    }

    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(list));
    },[list])


   return(
    <>
    <h1> TO_DO_LIST</h1>
     <input type="text"  onChange={(e)=>set(e.target.value)} />
     <button onClick={add}>Add</button>

       <ul>
        {list.map((x)=>{
         return <li>
           <span>{x.text}</span>
          <button onClick={()=>del(x.id)}>Delete</button>
          <button onClick={()=>edt(x.id)}>Edit</button>
         </li>
        })}
       </ul>

    </>
   )
};

export default App;
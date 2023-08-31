import { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import AddList from "./AddList";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

 

function App() {
  const API_URL =  'http://localhost:3500/items'
  const[items,setItems] = useState([])
  const[fetchError,setFetchError] =useState(null)
  const[isDelay,setIsDelay] = useState(true)
  const[newItem,setNewItem]= useState()
  const[search,setSearch]= useState('')

   const  handleCheck = async (id)=>{
    const listItems = items.map((i)=> 
      i.id===id ?{...i, checked:!i.checked}:i )
      setItems(listItems)

      const myItem = listItems.filter((item)=>item.id===id)
      const updateOptions = {
        method:'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({checked:myItem[0].checked})
      }
       const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,updateOptions)
      if(result) setFetchError(result)
   }
   const handleDelete = async (id)=>{
    const delItems = items.filter((i)=>
      i.id!==id)
      setItems(delItems)
      const deleteOptions ={method:'DELETE'}
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,deleteOptions)
      if(result) setFetchError(result)
   }
   useEffect(()=>{
    const fetchItems = async ()=> {
      try{
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Data not Received")
        
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
       
      }catch(err){
         setFetchError(err.message)
      }
      finally{
        setIsDelay(false)
      }
    }
   setTimeout(()=>{
   (async()=> await fetchItems())()
   },2000)
  },[])

   
   const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    setNewItem(" ")
   }
   const addItem = async (item)=>{
    const id =items.length? items[items.length-1].id+1:1
    const addNewItem = {id,checked:false,item}
    const list = [...items,addNewItem]
    setItems(list)
      
    const postOptions = {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
   }


    
   
   
  
  return (
    
    <div className="App">
      <Header title="To do list" />
      
      <AddList 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}/>
      <SearchItem 
      search={search}
      setSearch={setSearch}/>
      <main>
        {isDelay && <p>loading items..</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}

      {!isDelay && !fetchError && <Content 
      items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
  />}
  </main>
  <Footer length={items.length} />
    </div>
         
         
         );
}

export default App;
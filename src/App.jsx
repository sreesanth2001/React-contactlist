import { data } from "./data/data"
import { useState } from "react"
function App() {
  const[users,setUsers]=useState(data)
  const deleteUser=(id)=>{
    let newList=users.filter((item)=>{
      return item.id !==id
    })
     setUsers(newList)
    
  }
  
  return (
    
      <div>
        <h1 className="text-center text-5xl font-bold py-10 text-cyan-300">userdetails</h1>
        <div className="flex flex-wrap gap-10 px-16 justify-center">
          {
            users.map((item)=>{
              return(
                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={item.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
			<p className="dark:text-gray-800">{item.email}</p>
      <p className="dark:text-gray-800">{item.phone}</p>
		</div>
		<button onClick={()=>{deleteUser(item.id)}} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">deletuser</button>
	</div>
</div>
              )
            }

            )
          }
        </div>
      </div>
      
  )
}

export default App

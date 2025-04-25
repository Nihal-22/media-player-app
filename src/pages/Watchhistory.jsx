import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'

function Watchhistory() {
  
  const[history,sethistory]=useState([])

  const gethistory=async()=>{
    const result= await getHistoryAPI()
    // console.log(result);
    if(result.status==200){
      sethistory(result.data)
    }
    else{
      console.log("API Failed");
      sethistory([])
    }
  }
  console.log(history);
  
useEffect(()=>{
  gethistory()
},[])

const removeHistory=async(id)=>{
  await deleteHistoryAPI(id)
  gethistory()
}

  return (
    <div>
      <div className="container d-flex justify-content-between mt-5">
        <h1 className="text-info">Watch-History</h1>
        <Link to={'/home'} style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}}>Back To Home <i class="fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse"></i></Link>
      </div>
      <table  className='container shadow'>
        <thead style={{color:"white"}}>
          <tr>
            <th>#</th>
            <th>Video Title</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length>0?history.map((video,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{video.title}</td>
              <td><a href="{video.link}">{video.link}</a></td>
              <td>{video.timeStamp}</td>
              <td><button className='btn btn-link'><i class="fa-solid fa-trash fa-lg" onClick={e=>removeHistory(video.id)} style={{color:"red" ,marginLeft:"10px"}}></i></button></td>
            </tr>)):<p className='text-danger fw-bolder'>Nothing to display</p>}

        </tbody>
      </table>
    </div>
  )
}

export default Watchhistory

import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadVideoAPI, getCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {
  
  const[allVideos,setAllVideos]=useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  
  useEffect(()=>{getAllVideos(),setDeleteVideoResponse(false)},[uploadVideoResponse,deleteVideoResponse])

  const getAllVideos=async()=>{
    const result=await getAllUploadVideoAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }
    else{
      console.log("API Failed");
      setAllVideos([])
    }
  }
  // console.log(allVideos);
  
  const DragOver=(e)=>{
    e.preventDefault()
  }

  const videoDropped=async(e)=>{
    const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData('data'))
    console.log(videoId,categoryId);
    const {data}=await getCategoryAPI()
    const selectedCategory=data.find(item=>item.id==categoryId)
    // console.log(selectedCategory);
    let result=selectedCategory.allVideos.filter(video=>video.id!==videoId)
    console.log(result);
    let{id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    
    
    
    
  }
  return (
    <div>
      <Row  droppable="true" onDragOver={e=>DragOver(e)} onDrop={e=>videoDropped(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col style={{marginLeft:"20px"}} sm={12} md={4} lg={3}>
          <Videocard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/></Col>
        )):<p className='text-danger fw-bolder'>Nothing To Display</p>
      }
      </Row>
    </div>
  )
}

export default View

import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadvideoAPI } from '../services/allAPI';

function Add({setuploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[uploadVideo,setuploadVideo]=useState({id:"",title:"",url:"",link:""})
  console.log(uploadVideo);

   const getYouTubeLink=(e)=>{
    const {value}=e.target
    // console.log(value);
    if (value.includes('v=')){
      let VID=value.split('v=')[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      
      setuploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }
    else{
      setuploadVideo({...uploadVideo,link:""})
    }
   }

   const handleAdd=async()=>{
    const{id,title,url,link}=uploadVideo
    if(!id || !title || !url || !link){
      alert("Please fill the missing fields")
    }
    else{
      const result=await uploadvideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("Video Uploaded")
        handleClose()
        setuploadVideo({id:"",title:"",url:"",link:""})
        setuploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
   }

  return (
    <div>
      <div className="d-flex mb-5 mt-5 align-items-center">
        <h2>Upload Videos</h2>
        <button className='btn tbn-link' onClick={handleShow}><i class="fa-solid fa-upload fa-bounce fa-2xl"></i></button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video-Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Video ID"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter VideoId" onChange={(e)=>setuploadVideo({...uploadVideo,id:e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput1"
              label="Video Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setuploadVideo({...uploadVideo,title:e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput2"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setuploadVideo({...uploadVideo,url:e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput3"
              label="Video Url"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Video URL" onChange={getYouTubeLink}/>
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Add

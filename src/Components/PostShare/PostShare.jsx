import React,{useState,useRef} from 'react';
import './PostShare.css';
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule,UilTimes} from '@iconscout/react-unicons'
import ProfileImage from '../../img/profileImg.jpg'
const PostShare = () => {
    const [image,setImage] = useState(null);
    const imgRef = useRef();

    const imageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image:URL.createObjectURL(img),
            })
        }
        
    }
  return (
    <div className="PostShare">
       <img src={ProfileImage} alt="" />
       <div>
        <input type="text" placeholder='Share your post' />
        <div className="PostOptions">
            <div className="Option"
            style={{color:"var(--photo)"}}
            onClick={()=>imgRef.current.click()}
            >
                <UilScenery />
                Photo
            </div>
            <div className="Option"
             style={{color:"var(--video)"}}>
                <UilPlayCircle />
                Video
            </div>
            <div className="Option"
             style={{color:"var(--location)"}}>
                <UilLocationPoint />
                Location
            </div>
            <div className="Option"
             style={{color:"var(--shedule)"}}>
                <UilSchedule />
                Schedule
            </div>
                <button className='button ps-button'>
                    Share
                </button>
                <div style={{display:'none'}}>
                    <input type="file"
                    name="MyImage"
                    ref={imgRef}
                    onChange={imageChange}
                    />
                </div>
            
            </div>
            {image && (
                <div className="previewImg">
                    <UilTimes  onClick={()=>setImage(null)}/>
                    <img src={image.image} alt="" />
                </div>
            )} 
        </div>
      
    </div>
  )
}

export default PostShare
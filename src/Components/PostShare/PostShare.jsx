import React,{useState,useRef} from 'react';
import './PostShare.css';
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule,UilTimes} from '@iconscout/react-unicons'
import ProfileImage from '../../img/profileImg.jpg'
import { useSelector,useDispatch } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadAction';
const PostShare = () => {
    const [image,setImage] = useState(null);
    const imgRef = useRef();
    const descRef = useRef();
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.authReducer.authData)
    const imageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];   
            setImage(img)
    }
}
const handleSubmit = (e) =>{
    e.preventDefault();
    const newPost ={
        userId:user._id,
        desc:descRef.current.value,

    }
    if(image){
        const data = new FormData();
        const fileName = Date.now()+image.name;
        data.append('name',fileName);
        data.append('file',image);
        newPost.image=fileName
        console.log(newPost);
        try {
            dispatch(uploadImage(data))
        } catch (error) {
            console.log(error);
            
        }
    }
    dispatch(uploadPost(newPost))
}
  return (
    <div className="PostShare">
       <img src={ProfileImage} alt="" />
       <div>
        <input type="text" placeholder='Share your post' 
        ref={descRef}
        required
        />
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
                <button className='button ps-button'
                onClick={handleSubmit}
                >
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
                    <img src={URL.createObjectURL(image)} alt="" />
                </div>
            )} 
        </div>
      
    </div>
  )
}

export default PostShare
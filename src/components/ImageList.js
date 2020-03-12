import React from 'react';
import ImageCard from './ImageCard'
import './ImageList.css';
const ImageList = (props)=>{
   // console.log(props.images.map((i)=>{return i.urls.regular}))
    const img = props.images.map((image)=>{
   return  <ImageCard image={image} key ={image.id}/>
});
    return(
        <div className="image-list">
           {img}
        </div>
    );
}
export default ImageList;
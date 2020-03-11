import React from 'react';

const ImageList = (props)=>{
   // console.log(props.images.map((i)=>{return i.urls.regular}))
    const img = props.images.map((image)=>{
   return  <img key={image.id}src={image.urls.thumb} alt={image.description}/>
});
    return(
        <div>
           {img}
        </div>
    );
}
export default ImageList;
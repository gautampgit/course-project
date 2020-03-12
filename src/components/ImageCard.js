import React from'react';
 class ImageCard extends React.Component{

    constructor(){
        super();
        this.state ={
            spans :0,
        }
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan)
    }
    setSpan =()=>{
        const span = Math.ceil(this.imageRef.current.clientHeight/20);
        this.setState({spans: span});
    }
    
     render(){
       // console.log(this.imageRef.current.clientHeight);
         return(
             <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                 <img ref= {this.imageRef} src ={this.props.image.urls.regular}
                    alt ={this.props.image.description}
                    />

             </div>
         )
     }
 }
 export default ImageCard;
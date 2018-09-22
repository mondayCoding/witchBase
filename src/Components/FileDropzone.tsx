
import * as React from 'react';
import ANNO from '../Utils/Notify';

export default class FileUpload extends React.Component<IProp> {

   state:IState = {
      imageSource: "",
      active:false,
      loaded:false
   };

   handleDragEnter = (e:React.DragEvent) => {
      this.setState({active:true});
   }

   handleDragLeave = (e:React.DragEvent) => {
      this.setState({active:false});
   }

   handleDragOver = (e:React.DragEvent) =>{
      e.preventDefault();
   }

   handleDropEvent = (e:React.DragEvent ) => {
      e.preventDefault();
      this.setState({active:false});
      this.updatePreview(e.dataTransfer.files[0]);
   }

   handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];
      this.updatePreview(file);
   }

   updatePreview = (file:File) => {
      const pattern = /image-*/;
      const reader = new FileReader();

      if(!file.type.match(pattern)){
         ANNO.announce("Only image files allowed", null, "info");
         return;
      }

      this.setState({loaded:false});

      reader.onload = (e) => {
         this.setState({
            imageSource: reader.result,
            loaded: true
         });
      };
      reader.readAsDataURL(file);  
      this.props.onFileChange(file);    
   }

   render(){
      const {loaded, imageSource, active} = this.state;
      const {onFileChange, ...rest} = this.props;
      const labelClass = (active) ? "upload--preview active" : "upload--preview" ;
     
      return (

         <label 
            className={labelClass}
            onDragEnter={this.handleDragEnter}
            onDragLeave={this.handleDragLeave} 
            onDragOver={this.handleDragOver}
            onDrop={this.handleDropEvent}
         >
   
            {
               loaded ? 
               <img src={imageSource} className="upload--preview--image"/>
               :
               <span className="upload--preview--noImage">
                  <i className="fas fa-upload"></i>            
                  <p>Click this or drag a file here to include it</p>
               </span>
            }
            <input type="file" {...rest} accept="image/*" onChange={this.handleFileChange} />

         </label>
      );
   }
}

interface IState {
   imageSource:string;
   active:boolean;
   loaded:boolean;
}

interface IProp {
   onFileChange(param:File):void;
}
 
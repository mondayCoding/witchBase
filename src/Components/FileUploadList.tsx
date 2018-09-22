
import * as React from 'react';
import ProgressBar from './ProgressBar';
import Icons from './Icons';
import helpers from '../Utils/helpers';


export default class FileUploadList extends React.Component<IIProps>{

   getFilesAsArray = () => {
      const {fileList} = this.props;           
      const fileArray = Array.from(fileList);
      return fileArray;
   }

   render(){
      if (!this.props.fileList){
         return null;
      }

      return (
         <React.Fragment>
            {this.getFilesAsArray().map((file, index) =>
               <FileRow key={index} file={file} maxSize={this.props.maxSize} />
            )}   
         </React.Fragment>
      );
   }
}

const FileRow: React.StatelessComponent<IProps> = (props) => {
   const {file, maxSize} = props;
   const size = helpers.bytesToSize;

   return(
      <div className="table-row filelist-table">
         <div className="cell-1">
            {getFileTypeIcon(file.type)}
         </div>
         <div className="cell-auto">
            {file.name}
         </div>
         <div className="cell-6">
            {(file.size >= maxSize) 
               ? <span className="generic--warning">{size(file.size)}</span>
               : size(file.size) 
            }
         </div>
         <div className="cell-12 center">
            <ProgressBar 
               percentage={Math.round(file.size*0.00001*100)/100} 
               minText={size(file.size)}
               maxText={size(maxSize)}
               showWarningWhenFull={true}
            />
         </div>
      </div>
   );
};

const getFileTypeIcon = (type:string) => {

   if (type.includes("image")) {
      return Icons.file_image;
   }
   
   switch(type){
      case "application/pdf":
         return Icons.file_pdf;
      case "application/vnd.ms-excel":
         return Icons.file_excel;
      default:
         return Icons.file;
   }
};

interface IProps{
   file: File;
   maxSize: number;
}

interface IIProps{
   fileList: FileList;
   maxSize: number;
}


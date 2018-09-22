
import * as React from 'react';
import classNames from 'classnames';


//*****************************************************************************************************************
// Image caption component with hover effect ( caption and captiontitle are optional )
//*****************************************************************************************************************

export default class ImgCaption extends React.Component<Iprops> {

	render() {
      const { src, captionText, captionTitle, size, ...rest } = this.props;

      const classString = classNames({
         imageCaptionWrapper: true,
         [size || "all"]: true
      });

      return (
         <figure className={classString}>
            <img className="imageWithCaption" alt={captionText} src={src} {...rest} />
            <figcaption className="imageCaption">
               {captionTitle && <b>{captionTitle}</b>}
               {captionText && <span>{captionText}</span>}
            </figcaption>				
         </figure>
      );
	}
}

interface Iprops {
	src:string;
	captionText?:string;
	captionTitle?:string;
	size?: string;
}

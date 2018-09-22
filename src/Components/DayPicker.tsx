// import * as React from 'react';
// import * as DateTime from 'react-datetime';
// import {DatetimepickerProps} from 'react-datetime';
// import {Field, Button} from 'Common/index';
// import TextInputWithButton from 'Common/TextinputWithButton';
// import Icons from 'Common/icons';


// export const DayPicker:React.SFC<IProps> = ({id, label, error, ...rest}) => {

//    return (
//       <Field label={label} id={id} isSmall={true} error={error}>
//          <DateTime
//             timeFormat={false}
//             inputProps={{className:"themeinput", id}}
//             renderInput={DateButton}
//             {...rest}
//          />
//       </Field>
//    );
// };

// const DateButton = (props:any, openCalendar:any, closeCalendar:any) => {
//    return(
//       <TextInputWithButton
//          buttonIcon={Icons.calendar}
//          inputOnClick={openCalendar}
//          btnOnClick={openCalendar}
//          onChange={openCalendar}
//       />);
// };


// export interface IProps extends DatetimepickerProps {
//    id:string;
//    label:string;
//    value?:string;
//    error?: string;
//    placeholder?:string;
//    checked?:boolean;
//    required?:boolean;
//    disabled?:boolean;
//    onChange?(params?:any):any;
//    onBlur?(params?:any):void;
//    onKeyUp?(params?:any):void;
// }
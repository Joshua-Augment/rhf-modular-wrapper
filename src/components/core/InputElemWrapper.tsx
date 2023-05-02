import React, {useContext, useEffect} from 'react'
import Tooltip from '@mui/material/Tooltip';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { FormFrameWrapperProps } from './interfaces';
import { ThemeContext } from './Form';



const InputElemWrapper = (props: FormFrameWrapperProps) => {
  // Set Value First if Available
  useEffect(()=>{ if (props.defaultValue) {props.onChange(props.defaultValue);} },[props.defaultValue]) 
  useEffect(()=>{ if(props.externalStateSetter) {props.externalStateSetter(props.value)}}, [props.value])


  const Wrapper = props.inputWrapper ?? useContext(ThemeContext).inputTemplate 

    // <div style={{position: 'relative'}} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
    //     {
    //       props.reversedLabel === true ? 
    //       <>
    //         <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //         {props.noLabel !== true && <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
    //           {props.noBorder !== false && <span>{props.label} {' '}</span>}
    //           <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //         </label>}
    //       </> :
    //       <>             
    //         {props.noLabel !== true && <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
    //           {props.noBorder !== false && <span>{props.label} {' '}</span>}
    //           <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //           <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
    //         </label>}
    //         <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
    //       </>
    //     }
    //   </div>
  
  const WrapElem = ()=>{
    if (Wrapper !== null && Wrapper !== undefined) {
      return <Wrapper {...props} />
    } else {
      return <div style={{position: 'relative'}} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
        {
          props.reversedLabel === true ? 
          <>
            <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
            {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
              <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
              <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
            </label>}
          </> :
          <>             
            {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
              <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
              <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
            </label>}
            <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
          </>
        }
      </div>
    }

  }
  
  return WrapElem()
  // return Wrapper as JSX.Element
}

export default InputElemWrapper
import React, {useMemo, useContext} from 'react'
import Tooltip from '@mui/material/Tooltip';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { FormFrameWrapperProps } from './interfaces';
import { ThemeContext } from './Form';



const InputElemWrapper = (props: FormFrameWrapperProps) => {
  const Wrapper = useContext(ThemeContext)

  const WrapElem = useMemo(()=>{
    if (Wrapper !== null && Wrapper !== undefined) {
      return <Wrapper {...props} />
    } else {
      return <div className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
        {
          props.reversedLabel === true ? 
          <>
            <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
            <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
              {props.noBorder !== false && <span>{props.label} {' '}</span>}
              <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue'}} /></Tooltip>} {' '}</span>
              <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red'}} /></Tooltip>} {' '}</span>
            </label>
          </> :
          <> 
            <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''}>
              {props.noBorder !== false && <span>{props.label} {' '}</span>}
              <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue'}} /></Tooltip>} {' '}</span>
              <span>{props.errors && <Tooltip title={props.errors.message}><ErrorIcon style={{color:'red'}} /></Tooltip>} {' '}</span>
            </label>
            <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
          </>
        }
      </div>
    }

  },[])
  
  return WrapElem
}

export default InputElemWrapper
import React, {useContext} from 'react'
import Tooltip from '@mui/material/Tooltip';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { FormFrameWrapperProps } from './interfaces';
import { ThemeContext } from './Form';
import { useInputValAndError } from './hook/useInputValnError';



const InputElemWrapper = (props: FormFrameWrapperProps) => {
  const theme = useContext(ThemeContext)
  
  const {value, error, setValue} = useInputValAndError(props.name)

  const Element = props.element ?? 
    (theme.elements !== null && theme.elements[props.type] !== undefined ? theme.elements[props.type] : null) 
  const Wrapper = props.inputWrapper ?? theme.inputTemplate ?? null
  
  const WrapElem = Wrapper !== null && Wrapper !== undefined ? 
    <Wrapper {...props} /> : 
    <div style={{position: 'relative', ...props.style}} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
        {
          props.reversedLabel === true ? 
          <>
            <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
            {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''} style={{marginLeft:'5px'}}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
              <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
              <span>{error && <Tooltip title={error.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
            </label>}
          </> :
          <>             
            {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''} style={{marginRight:'5px'}}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
              <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
              <span>{error && <Tooltip title={error.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
            </label>}
            <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
          </>
        }
      </div>

  // const WrapElem = useMemo(()=>{
  //   // // console.log(`[WrapElem] - value for ${props.name} - `,props.value)
  //   // console.log(`[WrapElem] - child for ${props.name} - `,props.children)
  //   if (Wrapper !== null && Wrapper !== undefined) {
  //     return <Wrapper {...props} />
  //   } else {
  //     return <div style={{position: 'relative', ...props.style}} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ''}`} >
  //       {
  //         props.reversedLabel === true ? 
  //         <>
  //           <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
  //           {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''} style={{marginLeft:'5px'}}>
  //             {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
  //             <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
  //             <span>{error && <Tooltip title={error.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
  //           </label>}
  //         </> :
  //         <>             
  //           {<label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ''} style={{marginRight:'5px'}}>
  //             {props.noBorder !== false && props.noLabel !== true && <span>{props.label} {' '}</span>}
  //             <span>{props.helperText && <Tooltip title={props.helperText}><InfoIcon style={{color:'blue',fontSize:'10px'}} /></Tooltip>} {' '}</span>
  //             <span>{error && <Tooltip title={error.message}><ErrorIcon style={{color:'red',fontSize:'10px'}} /></Tooltip>} {' '}</span>
  //           </label>}
  //           <div className={`form-item-child-wrapper ${props.noBorder ? 'no-border':''}`}>{props.children}</div>
  //         </>
  //       }
  //     </div>
  //   }
  // },[value, error, props.options])

  // const clonedElement =  useMemo(()=>{
  //   if (Element !== undefined && Element !== null) {
  //     return React.cloneElement(<Element {...props} /> as any, {...props, onChange: (a:any) => setValue(props.name, a), value : value, error: error})
  //   } else {return null}
  // },[value, error])

  const clonedElement = Element !== undefined && Element !== null ?
    React.cloneElement(<Element {...props} /> as any, {...props, onChange: (a:any) => setValue(props.name, a), value : value, error: error}) : 
    null

  
  return clonedElement !== undefined && clonedElement !== null ? clonedElement : WrapElem
  // return Wrapper as JSX.Element
}

export default React.memo(InputElemWrapper)
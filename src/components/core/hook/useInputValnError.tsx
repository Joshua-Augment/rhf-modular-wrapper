import { useMemo } from "react"
import { useFormContext } from "react-hook-form"
import Logger from "../Logger"

export const useInputValAndError = <T=any,>(name :string) => {
  Logger.info(`Name : ${name}`,"useInputValAndError","start")
  const methods = useFormContext()

  const highjackedSetValue = (_name:string, value: any) => {
    methods.setValue(_name, value)
  }

  const value:T = methods.watch(name)
  Logger.info(`Value : ${String(value)}`,"useInputValAndError")

  //console.log('[useInputValAndError] - ',value)
  // console.log(`[useInputValAndError - Value _val for ${name} ] : [Undefined?${_val === undefined?'Y':'N'}] [Null?${_val === null?'Y':'N'}]`,_val)
  // console.log(`[useInputValAndError - getValues in ${name} ] : `,methods.getValues())
  
  // const value = useMemo(()=> {
  //   if (_val === undefined) {highjackedSetValue(null)}  
  //   return _val === undefined ? null : _val
  // }, [_val])

  const {error: _error} = methods.getFieldState(name, methods.formState)
  const error = useMemo(()=>  Array.isArray(_error) ? undefined : _error ,[_error, value])
  Logger.info(`Error : ${error?.message}`,"useInputValAndError")
  Logger.info(null,null,'end')
  
  return { value: value, error, ...methods, setValue : (name:string, value:any) => highjackedSetValue(name, value)  }
}


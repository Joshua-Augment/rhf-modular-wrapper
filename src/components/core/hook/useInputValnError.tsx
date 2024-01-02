import { useMemo } from "react"
import { useFormContext } from "react-hook-form"

export const useInputValAndError = <T=any,>(name :string) => {
  const methods = useFormContext()

  const highjackedSetValue = (value: any) => {
    console.log(`[HighJackedSetValue] ${name} - `,value)
    methods.setValue(name, value)
  }

  const _val:T = methods.watch(name)

  // console.log(`[useInputValAndError - Value _val for ${name} ] : [Undefined?${_val === undefined?'Y':'N'}] [Null?${_val === null?'Y':'N'}]`,_val)
  // console.log(`[useInputValAndError - getValues in ${name} ] : `,methods.getValues())
  
  // const value = useMemo(()=> {
  //   if (_val === undefined) {highjackedSetValue(null)}  
  //   return _val === undefined ? null : _val
  // }, [_val])

  const {error: _error} = methods.getFieldState(name, methods.formState)
  const error = useMemo(()=>  Array.isArray(_error) ? undefined : _error ,[_error, _val])
  
  return { value: _val, error, ...methods, setValue : (name:string, value:any) => highjackedSetValue(value)  }
}


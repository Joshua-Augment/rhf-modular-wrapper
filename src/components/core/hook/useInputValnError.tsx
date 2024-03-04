import { useMemo } from "react"
import { useFormContext, useFormState, useWatch } from "react-hook-form"
import Logger from "../Logger"

export const useInputValAndError = <T=any,>(name :string) => {
  Logger.info(`Name : ${name}`,"useInputValAndError","start")
  const methods = useFormContext()

  const highjackedSetValue = (_name:string, value: any) => {
    methods.setValue(_name, value)
  }

  const value:T = useWatch({name: name, defaultValue: null}) ?? null
  Logger.info(`Value : ${String(value)}`,"useInputValAndError")

  const _methods = useMemo(() => methods,[])

  
  // const value = useMemo(()=> {
  //   if (_val === undefined) {highjackedSetValue(null)}  
  //   return _val === undefined ? null : _val
  // }, [_val])

  const {errors, ...allFormStates} = useFormState()
  const error = useMemo(()=>  errors[name] ?? null ,[errors?.[name], value])
  Logger.info(`Error : ${error?.message}`,"useInputValAndError")
  Logger.info(null,null,'end')
  
  return { value: value, error, ..._methods, formState: allFormStates, setValue : (name:string, value:any) => highjackedSetValue(name, value)  }
}


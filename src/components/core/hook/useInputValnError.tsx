import { useMemo } from "react"
import { useFormContext, useFormState, useWatch } from "react-hook-form"
import Logger from "../Logger"

export const useInputValAndError = <T=any,>(name :string) => {
  Logger.info(`Name : ${name}`,"useInputValAndError","start")
  const {control, ...methods} = useFormContext()

  const value:T = useWatch({name: name, defaultValue: null}) ?? null
  Logger.info(`Value : ${String(value)}`,"useInputValAndError")

  const _methods = useMemo(() => methods,[])

  
  // const value = useMemo(()=> {
  //   if (_val === undefined) {highjackedSetValue(null)}  
  //   return _val === undefined ? null : _val
  // }, [_val])

  const {errors, dirtyFields, touchedFields, isValidating, isSubmitting,  ...allFormStates} = useFormState()
  const error = useMemo(()=>  errors[name] ?? null ,[errors?.[name]?.message, value])
  console.log(errors)
  Logger.info(`Error : ${error?.message}`,"useInputValAndError")
  Logger.info(null,null,'end')
  
  return { value: value, error, ..._methods, formState: {errors, ...allFormStates, isTouched: touchedFields[name] ?? null} }
}


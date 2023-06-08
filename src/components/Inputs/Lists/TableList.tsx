import React, { useMemo,  useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ITableList } from '../../core/interfaces/lists';
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import styled from "styled-components"
import { InputWrapper } from '../../core';

const Table = styled.table`
  width: 100%;
  margin-top:5px;
  margin-bottom: 5px;
`

const IconUp = styled(FaPlusSquare)`
  color : green;
  font-size: 25px;
  margin : 2px 5px;
`
const IconDown = styled(FaMinusSquare)`
  color : red;
  font-size: 25px;
  margin : 2px 5px;
`

const TableList = (props:ITableList) => {
  const {watch, control, formState: {errors}} = useFormContext() 
  const {fields,append,insert,remove} = useFieldArray({control,name: props.name});
  const _val = watch(props.name)
  const val = useMemo(()=>_val,[_val])
  const emptyRow = useMemo(()=>{
    if (props.emptyRow) {return props.emptyRow}
    else {
      let obj = {};
      props.items.forEach(i => obj[i.name] = '')
      return obj
    }
  },[])
  useEffect(()=> {if (fields.length === 0) { append(emptyRow)}})

  const generateRow = (i:number) => <tr key={`fw-${props.name}-${i}`}>
    {props.showIndex === true && <td>{i + 1}</td>}
    {props.items.map((item,iT) => <td key={`fw-${props.name}-${i}-${iT}-iew`} ><InputChooser {...item} noLabel name={`${props.name}.${i}.${item.name}`}/></td>)}
    {props.fixed !== true && <td ><IconUp onClick={()=>insert(i+1,emptyRow)} /> {<IconDown onClick={()=>{remove(i)}}/>}</td>}
  </tr>

  const headerGenerator = useMemo(()=> props.headerTemplate ?? <thead><tr>
    {props.showIndex === true && <th></th>}
    {props.items.map((item,key) => <th key={`tl-${props.name}-${item.name}-th-${key}`}>{item.label}</th>)}
    {props.fixed !== true && <th></th>}
  </tr></thead>,[])

  const footerGenerator = useMemo(()=> props.footerTemplate ?? headerGenerator,[])

  // const bodyGenerator = useMemo(()=> fields.length === 0 ? generateRow(0) : fields.map((field,i) => generateRow(i)),[fields])
  const bodyGenerator = useMemo(()=> {
    // console.log("[bodyGenerator] - Fields",fields)
    // console.log("[bodyGenerator] - Final",fields.map((field,i) => generateRow(i)))
    return fields.map((field,i) => generateRow(i))
  },[fields, errors,val])

  return (
    <InputWrapper {...props}  >
      <Table>
        {(props.header === undefined || props.header === 'top' || props.header === 'both') && headerGenerator}
        <tbody>
          {bodyGenerator}
        </tbody>
        {(props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator}
      </Table>
    </InputWrapper>
  )
}

export default TableList
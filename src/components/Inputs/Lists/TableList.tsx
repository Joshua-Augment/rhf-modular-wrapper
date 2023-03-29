import React, { useMemo, useCallback } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import InputElemWrapper from '../../core/InputElemWrapper';
import { ITableList } from '../../core/interfaces/lists';
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import styled from "styled-components"

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
  const {control, formState: {errors}} = useFormContext() 
  const {fields,append,remove} = useFieldArray({control,name: props.name});
  console.log("[TableList] - fields",fields)

  const generateRow = useCallback(
    (i:number) => <tr key={`fw-${props.name}-${i}`}>
    {props.showIndex === true && <td>{i + 1}</td>}
    {props.items.map((item,iT) => <td key={`fw-${props.name}-${i}-${iT}-iew`} ><InputChooser {...item} noLabel name={`${props.name}.${i}.${item.name}`}/></td>)}
    {props.fixed !== true && <td ><IconUp onClick={()=>append(props.emptyRow ?? {})} /> {<IconDown onClick={()=>{console.log("[removing...]",i);remove(i)}}/>}</td>}
  </tr>,[fields])

  const headerGenerator = useMemo(()=> props.headerTemplate ?? <thead><tr>
    {props.showIndex === true && <th></th>}
    {props.items.map((item,key) => <th key={`tl-${props.name}-${item.name}-th-${key}`}>{item.label}</th>)}
    {props.fixed !== true && <th></th>}
  </tr></thead>,[])

  const footerGenerator = useMemo(()=> props.footerTemplate ?? headerGenerator,[])

  // const bodyGenerator = useMemo(()=> fields.length === 0 ? generateRow(0) : fields.map((field,i) => generateRow(i)),[fields])
  const bodyGenerator = useMemo(()=> fields.map((field,i) => generateRow(i)),[fields, errors])

  return (
    <InputElemWrapper {...props} onChange={()=>{}} value={null} >
      <div>
        <Table>
          {(props.header === undefined || props.header === 'top' || props.header === 'both') && headerGenerator}
          <tbody>
            {bodyGenerator}
          </tbody>
          {(props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator}
        </Table>
      </div>
    </InputElemWrapper>
  )
}

export default TableList
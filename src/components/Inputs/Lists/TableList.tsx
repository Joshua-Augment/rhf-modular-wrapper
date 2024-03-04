import React, { useMemo,  useEffect } from 'react'
import { useFieldArray } from 'react-hook-form';
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

const TableHead = styled.thead``
const TableBody = styled.tbody``
const TableTH = styled.th``
const TableTD = styled.td``
const TableTR = styled.tr``

const IconUp = styled(FaPlusSquare)`
  color : green;
  font-size: 1.5em;
  margin : 2px 5px;  
  transition: 0.2s all ease-in-out;
  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px green;
  }
`
const IconDown = styled(FaMinusSquare)`
  color : red;
  font-size: 1.5em;
  margin : 2px 5px;  
  transition: 0.2s all ease-in-out;
  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px red;
  }
`

const TableList = (props:ITableList) => {
  return (
    <InputWrapper type={props.type ?? 'tablelist'} {...props}  >
      <_Table {...props} />
    </InputWrapper>
  )
}

const _Table = (props: any) => {
  const {fields,append,insert,remove} = useFieldArray({control : props.control,name: props.name});
  const TableTemplate = props.elemTable ?? Table
  const TableHeadTemplate = props.elemTableHead ?? TableHead
  const TableBodyTemplate = props.elemTableBody ?? TableBody
  const TableTRTemplate = props.elemTR ?? TableTR
  const TableTHTemplate = props.elemTH ?? TableTH
  const TableTDTemplate = props.elemTD ?? TableTD

  const emptyRow = useMemo(()=>{
    if (props.emptyRow) {return props.emptyRow}
    else {
      let obj = {};
      props.items.forEach(i => obj[i.name] = '')
      return obj
    }
  },[])

  useEffect(()=> {if (fields.length === 0) { append(emptyRow)}})

  /* const generateRow = (field: any, i:number) => <TableTRTemplate key={`fw-${props.name}-${field.id}`}>
    {props.showIndex === true && <TableTDTemplate>{i + 1}</TableTDTemplate>}
    {props.items.map((item,iT) => <TableTDTemplate key={`fw-${props.name}-${field?.id}-${iT}`} ><InputChooser fields={field?.[i]?.[item.name] ?? null}  {...item} noLabel name={`${props.name}.${i}.${item.name}`}/></TableTDTemplate>)}
    {props.fixed !== true && <TableTDTemplate><IconUp onClick={()=>insert(i+1,emptyRow)} /> {<IconDown onClick={()=>{remove(i)}}/>}</TableTDTemplate>}
  </TableTRTemplate> */

  const headerGenerator = useMemo(()=> props.headerTemplate ?? <TableHeadTemplate><TableTRTemplate>
    {props.showIndex === true && <TableTHTemplate></TableTHTemplate>}
    {props.items.map((item,key) => <TableTHTemplate key={`tl-${props.name}-${item.name}-th-${key}`}>{item.label}</TableTHTemplate>)}
    {props.fixed !== true && <TableTHTemplate></TableTHTemplate>}
  </TableTRTemplate></TableHeadTemplate>,[props.headerTemplate])

  const footerGenerator = useMemo(()=> props.footerTemplate ?? headerGenerator,[props.footerTemplate])

  const bodyGenerator =  fields.map((field,i) => <TableTRTemplate key={`tr-${field.id}-${i}`}>
  {props.showIndex === true && <TableTDTemplate>{i + 1}</TableTDTemplate>}
  {props.items.map((item,iT) => <TableTDTemplate key={`td-${field?.id}-${iT}`} ><InputChooser fields={field?.[i]?.[item.name] ?? null}  {...item} noLabel name={`${props.name}.${i}.${item.name}`}/></TableTDTemplate>)}  {props.fixed !== true && <TableTDTemplate><IconUp onClick={()=>insert(i+1,emptyRow)} /> {<IconDown onClick={()=>{remove(i)}}/>}</TableTDTemplate>}
</TableTRTemplate>)

  return <TableTemplate>
    {(props.header === undefined || props.header === 'top' || props.header === 'both' || props.header === 'header_footer') && headerGenerator}
    <TableBodyTemplate>
      {bodyGenerator}
    </TableBodyTemplate>
    {(props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator}
  </TableTemplate>

}

export default TableList
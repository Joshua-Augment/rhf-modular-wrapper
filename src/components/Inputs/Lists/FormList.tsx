import React, { useMemo, useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import InputElemWrapper from '../../core/InputElemWrapper';
import { IList } from '../../core/interfaces/lists';
import styled from "styled-components"
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

const Row = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
`
const Col = styled.div`
  flex: 0 0 ${({g}) => `${(g ?? 12) * 100/12}%`};
  width : ${({g}) => `${(g ?? 12) * 100/12}%`};
  padding-right : 5px;

`

const iconStyle:React.CSSProperties = {
  fontSize: '30px',
  cursor : 'pointer',
  textAlign : 'right'
}

const FormList = (props:IList) => {
  const {control} = useFormContext()
  const {fields,append,remove} = useFieldArray({control,name: props.name});
  const emptyRow = useMemo(()=>{
    if (props.emptyRow) {return props.emptyRow}
    else {
      let obj = {};
      props.items.forEach(i => obj[i.name] = '')
      return obj
    }
  },[])
  useEffect(() =>{if (fields.length === 0) {append(emptyRow)}},[])

  const bodygenerator = fields.map((field,i) => <Row key={`fw-${props.name}-${i}`}>
    {props.showIndex === true && <Col g={1}>{i + 1}</Col>}
    {props.items.map((item,iT) => <Col g={item.grid ?? 12 / (props.items.length + (props.showIndex ? 1 : 0) + (props.fixed !== true ? 1 : 0))} key={`fw-${props.name}-${i}-${iT}-iew`} ><InputChooser {...item} noBorder name={`${props.name}.${i}.${item.name}`}/></Col>)}
    {props.fixed !== true && <Col g={1}><FaPlusSquare style={{...iconStyle, color : props.maxItems && fields.length >= props.maxItems ? 'olive' : 'green' }} onClick={()=>{if (!(props.maxItems && fields.length >= props.maxItems)){append(emptyRow)}}} /> <FaMinusSquare style={{...iconStyle, color : fields.length > 1 ? 'red' : 'maroon'}} onClick={()=>{ if( fields.length > 1 ) {console.log("Removing....",i); remove(i)}}}/></Col>}
  </Row>)

  return (
    <InputElemWrapper {...props} noBorder onChange={()=>{}} value={null} >
      <div>{bodygenerator}</div>
    </InputElemWrapper>
  )
}

export default FormList
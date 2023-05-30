import React, { useMemo, useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IList } from '../../core/interfaces/lists';
import styled from "styled-components"
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { InputWrapper } from '../../core';

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
  const {control, watch} = useFormContext()
  const {fields,append,insert,remove} = useFieldArray({control,name: props.name});
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])
  const emptyRow = useMemo(()=>{
    if (props.emptyRow) {return props.emptyRow}
    else {
      let obj = {};
      props.items.forEach(i => obj[i.name] = '')
      return obj
    }
  },[])
  
  useEffect(() =>{if (fields.length === 0) {append(emptyRow)}},[])

  const bodygenerator = useMemo(()=> {
    const templateConverter = (children, i) => {
      return React.Children.map(children, child => {
        console.log("[TemplateConverter - ] -props ",child.props)
        // For the Inputs
        if (child.props['data-name'] !== undefined) {
          const input = props.items.filter(x => x.name === child.props['data-name'])
          if (input === undefined || input.length === 0) {return child}
          else {
            return <InputChooser {...input[0]} noBorder name={`${props.name}.${i}.${input[0].name}`}/>
          }
        }

        if (child.props?.['data-add'] === true) {
          return React.cloneElement(child, {
            onClick:()=>{if (!(props.maxItems && fields.length >= props.maxItems)){insert(i+1,emptyRow)}},
            isEnd : props.maxItems && fields.length >= props.maxItems
          })
        }

        if (child.props['data-remove'] !== undefined) {
          return React.cloneElement(child, {
            onClick:()=>{ if( fields.length > 1 ) {console.log("Removing....",i); remove(i)}},
            isEnd : fields.length > 1
          })
        }

        if (child.props['data-index'] !== undefined) {
          return React.cloneElement(child, {
            children : i + 1
          })
        }

        if (child.props.children) {
          return React.cloneElement(child, { 
            children: templateConverter(child.props.children, i)
          })
        }

        return child
      })
    }
    return fields.map((field,i) => {    
      if (props.bodyTemplate !== undefined) {
        return templateConverter(props.bodyTemplate.props.children, i)
      } else {
        return  <Row key={`fw-${props.name}-${i}`}>
          {props.showIndex === true && <Col g={1}>{i + 1}</Col>}
          {props.items.map((item,iT) => <Col g={item.grid ?? 12 / (props.items.length + (props.showIndex ? 1 : 0) + (props.fixed !== true ? 1 : 0))} key={`fw-${props.name}-${i}-${iT}-iew`} ><InputChooser {...item} noBorder name={`${props.name}.${i}.${item.name}`}/></Col>)}
          {props.fixed !== true && <Col g={1}><FaPlusSquare style={{...iconStyle, color : props.maxItems && fields.length >= props.maxItems ? 'olive' : 'green' }} onClick={()=>{if (!(props.maxItems && fields.length >= props.maxItems)){insert(i+1,emptyRow)}}} /> <FaMinusSquare style={{...iconStyle, color : fields.length > 1 ? 'red' : 'maroon'}} onClick={()=>{ if( fields.length > 1 ) {console.log("Removing....",i); remove(i)}}}/></Col>}
        </Row>
      }
    })
  },[val])

  return (
    <InputWrapper {...props} noBorder>
      <div>{bodygenerator}</div>
    </InputWrapper>
  )
}

export default FormList
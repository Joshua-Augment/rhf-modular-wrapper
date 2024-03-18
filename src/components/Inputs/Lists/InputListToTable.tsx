import React, { useEffect, useMemo, useState } from 'react'
import styled from "styled-components"
import { IInputToTableList, TListInputs } from '../../core/interfaces/lists'
import parse from "html-react-parser";
import { useFieldArray } from 'react-hook-form'
import { FaArrowDown, FaArrowUp, FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import { Line } from '../Text/index'
import { useInputValAndError } from '../../core/hook/useInputValnError';

const Table = styled.table`
  width: 100%;
  margin-top:5px;
  margin-bottom: 5px;
`

const InputListToTable = (props: IInputToTableList) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const {value, /* register, unregister, */ getValues, setValue, watch, resetField, trigger} = useInputValAndError(props.name)
  const {fields,append,move,remove, update} = useFieldArray({name: props.name});

  const __idWatch = watch(`${props.inputName}.__id`)
  const inputNameCheck = watch(props.inputName)

  // useEffect(()=> unregister(props.inputName) ,[])
  
  useEffect(()=>{
    setEditMode(__idWatch !== undefined && __idWatch !== null ? true : false)
  },[__idWatch])

  const edit = (i:number) => {
    setEditMode(true)
    const data = getValues(props.name)
  // console.log('[data[i]] - ',data[i])
    if (data[i] !== undefined) {
      setValue(props.inputName, { ...data[i], __id : i })
    }
  }

  const bodyGenerator = () => {
    const createMoveArrows = (i: number, max: number) => {
      return (
        <span className="ms-1">
          {i !== 0 && <FaArrowUp style={{margin:'2px', borderRadius:'10px' }} onClick={() => move(i, i - 1)} />}
          {i < (max - 1) && <FaArrowDown style={{margin:'2px', borderRadius:'10px' }} onClick={() => move(i, i + 1)} />}
        </span>
      );
    };

    const ActionsWrapper = (i: number, A?:any, children ?: any, ) => {
      const prepareButtons = () => {
        const REM = props.tableButtons?.remove
        const RemoveButton =  REM ?  React.cloneElement(REM, {...REM.props, onClick: () => {setEditMode(false); remove(i)}})  : <button type="button" onClick={() => {setEditMode(false); remove(i)}}><FaTrash /></button>
        const EDIT = props.tableButtons?.edit
        const EditButton = EDIT ? React.cloneElement(EDIT, {...EDIT.props, onClick:()=>edit(i)}) : <button type="button" onClick={() => edit(i)}><FaEdit /></button>
        const buttons:JSX.Element[] = []
        if (props.fixed !== true) {buttons.push(RemoveButton)}
        buttons.push(EditButton)
        buttons.push(createMoveArrows(i,fields.length))

        return buttons
      }
      if (A) {return <A>{prepareButtons()}</A>}
      return <div>{prepareButtons()}</div>
    }
    const parseValue = (value: any, extKey ?: string, type ?: TListInputs) => {
      // console.log(`ParseValue - [type: ${type}] Value : `,value)
      if (value === undefined || value === null) {
        return "-";
      } if (type !== undefined) {
        switch (type) {
          case "text":
            return value
          case "number":
            return value
          case "checkbox":
            return value ? "Yes" : "No"
          case "select":
            return value.label
          case "select_async":
            return value.label
          case "textarea":
            return value
          case "wysiwyg":
            parse(value)
          default:
            switch(typeof value) {
              case "boolean":
                return value ? "Yes":"No"
              case "object":
                if (extKey !== undefined) {
                  return value?.[extKey] ?? value
                } else if (value instanceof Date) {
                  return value.toLocaleDateString();
                } else if (value?.label !== undefined) {
                  return value.label;
                } else if (value?.name !== undefined) {
                  return value?.name;
                } else if (value?.value !== undefined) {
                  return value.value;
                } else {
                  return JSON.stringify(value)
                }
              default:
                return value
            }
        }
      }
    };
    // const captions = props.items.map((item) => item.caption);

    return fields.map((f,i) => <tr key={`iltt-rw-${props.name}-${i}`}>
      {
        props.showIndex !== false && <td>{i + 1}</td>
      }      
      {
        props.items.map( (it, itI) => <td>{parseValue((f as any)[it.name], it?.extKey, it?.type)}</td>)
      }
      
      <td>{ActionsWrapper(i,props.tableWrappers?.tableActionsWrapper)}</td>
    </tr>)
  };

  const generateNewRow = async () => {
  // console.log(`getValues : ${props.inputName} - `,getValues(props.inputName))
    // register(props.inputName)
  // console.log('Trigger - ',trigger(props.inputName))
    // const check = true
    const check = await trigger(props.inputName)

    // unregister(props.inputName, {keepError :false})

    if (check) {
      const vals = getValues(props.inputName)
      const keys = vals !== undefined && vals !== null && typeof vals === 'object' ? Object.keys(vals) : []
      if (vals?.__id !== undefined && vals?.__id !== null) {
        update(vals.__id, vals)
      } else {
        // Set values
        append(vals)
      }    
      
      let newObject:Record<string,unknown> = {}
      keys.forEach(key => newObject[key] = null)
    // console.log('[newObject]- ',newObject)
      resetField(props.inputName, {defaultValue: { ...newObject, __id : null}})
      setValue(props.inputName, { ...newObject, __id : null})
      
    } 
  }

  const headerGenerator = useMemo(()=> props.headerTemplate ?? <tr>
    {props.showIndex === true && <th></th>}
    {props.items.map((item,key) => <th key={`tl-${props.name}-${item.name}-th-${key}`}>{item.label}</th>)}
    <th></th>
  </tr>,[])

  const footerGenerator = useMemo(()=> props.footerTemplate ?? headerGenerator,[])

  const AddButton = useMemo(()=>{
    const buttonWrapper = (onClick:()=>void, Wrapper ?: any, ElemA ?: any) => {
      if (Wrapper) {
        return <Wrapper>
          {
            ElemA ? <ElemA isEdit={editMode} onClick={()=>onClick()} type="button" >{ElemA.children}</ElemA> :
            <button onClick={()=>onClick()} type="button" ><FaPlus />{editMode ? 'Edit Row' : 'New Row'}</button>
          }
        </Wrapper>
      } else {
        return <div style={{marginTop:'10px', textAlign:'right'}}>
          {
            ElemA ? <ElemA isEdit={editMode} onClick={()=>onClick()} type="button" >{ElemA.children}</ElemA> :
            <button onClick={()=>onClick()} type="button" ><FaPlus />{editMode ? 'Edit Row' : 'New Row'}</button>
          }
        </div>
      }
    }

    return buttonWrapper(()=> generateNewRow(), props.tableWrappers?.addButtonWrapper, props.tableButtons?.add)
  },[editMode])
  
  const body = useMemo(()=>{
    return bodyGenerator()
  },[value])

  const children = useMemo(()=> props.children, [value, editMode,props.children, inputNameCheck])

  return (<div style={{width:'100%'}}>
    <div style={{margin:'10px 0px', padding:'10px', border: editMode ? '1px solid green' : 'none'}}>
      {editMode && <p>{props.editingCaption ?? `Editing Item ${__idWatch + 1}`}</p>}
        <Line name={`${props.inputName}.__id`} type="hidden" />
        <div>{children}</div>
        <div>{AddButton}</div>
    </div>
    <Table>
      <thead>{props.header !== "bottom" && headerGenerator}</thead>
      <tbody>{body}</tbody>
      <tfoot>{props.header !== "top" && props.header !== undefined && footerGenerator}</tfoot>
    </Table>
  </div>)
}

export default InputListToTable
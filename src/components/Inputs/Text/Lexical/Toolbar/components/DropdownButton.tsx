import React, {useState, useEffect, useRef} from 'react'
import {FaCaretDown} from "react-icons/fa"
import styled from "styled-components"
import { BaseButton } from './styled_components'

interface IDropdownButton {
  centered ?: boolean,
  options : {
    id : string,
    item: React.ReactNode, 
    clickHandler : (...args : any)=>void
  }[],
}

const DDWrapper = styled(BaseButton)`
  position: relative;  
  display:inline-flex;
  width: auto;
  text-align: left;
`
const DDList = styled.div`
  z-index:100;
  visibility: ${({show}) => show ? 'visible' : 'hidden'};
  position: absolute;
  top : 18px;
  left : 0;
  width: 100%;
`
const DDItemContainer = styled.ul`
    width: 100%;
    list-style: none;
    padding-inline: 0;
    padding-right: 6px;
    padding-left:6px;
    padding-top:5px;
    padding-bottom: 5px;
    background-color: #dedede;
    border-radius: 3px;
`
const DDItem = styled.li`
  padding: 3px 0px;
  text-align: ${({centered}) => centered === true ? 'center' : 'left'};

  &:hover {
    background-color: #c3c3c3;
  }
`

const DropdownButton = (props: IDropdownButton) => {
  const DDBRef = useRef<HTMLButtonElement|null>(null)
  const [currentState, setCurrentState] = useState({open:false, id : props.options[0].id})

  useEffect(()=>{
    const handleClick = (event:any) => {
      if (DDBRef.current && !DDBRef.current.contains(event.target)) {        
        setCurrentState((prev)=>({...prev, open: false}))
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClick);
    };
  },[DDBRef])

  return (
    <DDWrapper ref={DDBRef} onClick={()=>setCurrentState((prev) => ({...prev, open : !prev.open}))}>
      {props.options.filter(x => x.id === currentState.id)[0].item} <FaCaretDown />
      <DDList show={currentState.open}>
        <DDItemContainer>
          {props.options.map((opt, index) => <DDItem centered={props.centered} onClick={(e:any)=>{e.stopPropagation(); opt.clickHandler(e); setCurrentState({open:false,id:opt.id})}} key={`${opt.id.replaceAll(' ','_')}-${index}`} >{opt.item}</DDItem>)}
        </DDItemContainer>
      </DDList>
    </DDWrapper>
  )
}

export default DropdownButton
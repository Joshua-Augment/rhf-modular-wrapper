import React, {useRef, useState, useEffect} from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { DDItem, DDItemContainer, DDList, DDWrapper } from './core';

interface ISingleDropdown {
  value ?: string,
  children : React.ReactNode,
  previewThumb ?: React.ReactNode,
  centered ?: boolean 
}

const SingleDropdown = (props:ISingleDropdown) => {
  const DDBRef = useRef<HTMLButtonElement | null>(null);
  const [currentState, setCurrentState] = useState({
    open: false,
    id: props.value,
  });

  useEffect(() => {
    const handleClick = (event: any) => {
      console.group("[handleClick]")
      console.log("[DDBRef Contains] - ",DDBRef.current !== null ? DDBRef.current.contains(event.target) : 'null')
      console.log("[Event Target] - ",event.target)
      console.log("[DDB] - ",DDBRef.current)
      console.groupEnd()
      
      if (
        DDBRef.current &&
        !DDBRef.current.contains(event.target) &&
        currentState.open === true
      ) {
        setCurrentState((prev) => ({ ...prev, open: false }));
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClick);
    };
  }, [DDBRef]);

  return (
    <DDWrapper
      ref={DDBRef}
      onClick={() => setCurrentState((prev) => ({ ...prev, open: !prev.open }))}
    >
      {props.previewThumb}{" "}<FaCaretDown />
      <DDList show={currentState.open}>
        <DDItemContainer>
          <DDItem centered={props.centered ?? true} >
            {props.children}
          </DDItem>
        </DDItemContainer>
      </DDList>
    </DDWrapper>
  )
}

export default SingleDropdown
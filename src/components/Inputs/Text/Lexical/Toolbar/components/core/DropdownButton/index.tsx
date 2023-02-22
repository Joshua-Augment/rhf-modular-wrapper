import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { DDItem, DDItemContainer, DDList, DDWrapper } from "./core";

export interface IDropDownButton {
  selected?: string;
  centered?: boolean;
  options: {
    id: string;
    item: React.ReactNode;
    clickHandler: (...args: any) => void;
  }[];
}


const DropdownButton = (props: IDropDownButton) => {
  const DDBRef = useRef<HTMLButtonElement | null>(null);
  const [currentState, setCurrentState] = useState({
    open: false,
    id: props.options[0].id,
  });
 
  useEffect(() => {
    if (props.selected !== undefined && currentState.id !== props.selected) {
      setCurrentState((prev) => ({
        ...prev,
        id: props.selected ?? props.options[0].id,
      }));
    }
  }, [props.selected]);

  useEffect(() => {
    const handleClick = (event: any) => {
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
      {props.options.filter((x) => x.id === currentState.id)[0].item}{" "}
      <FaCaretDown />
      <DDList show={currentState.open}>
        <DDItemContainer>
          {props.options.map((opt, index) => (
            <DDItem
              centered={props.centered}
              onClick={(e: any) => {
                e.stopPropagation();
                opt.clickHandler(e);
                setCurrentState({ open: false, id: opt.id });
              }}
              key={`${opt.id.replaceAll(" ", "_")}-${index}`}
            >
              {opt.item}
            </DDItem>
          ))}
        </DDItemContainer>
      </DDList>
    </DDWrapper>
  );
};

export default DropdownButton;

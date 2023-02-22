import React from 'react'
import styled from "styled-components"
import { FaTimes } from 'react-icons/fa'

interface IBaseModal {
  show : boolean,
  onClose : () => void,
  title : React.ReactNode,
  children : React.ReactNode
}

const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #28282899;
  flex-grow: 0px;
  flex-shrink: 1px;
  z-index: 100;
  visibility: ${({show}) => show ? 'visible' : 'hidden'};
`

const Modal = styled.div`
  padding: 20px;
  min-height: 100px;
  min-width: 300px;
  display: flex;
  flex-grow: 0px;
  background-color: #fff;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0 20px #444;
  border-radius: 10px;
  width: 95%;  
  @media only screen and (min-width: 768px) {
  /* For everything bigger than 768px */
    width: 40%;
  }
`

const CloseButton = styled(FaTimes)`
  float:right;
`

const ModalTitle = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`
const ModalBody = styled.div`
  padding-top: 10px;
`

const BaseModal = (props: IBaseModal) => {
  return (
    <ModalBackdrop show={props.show}>
      <Modal>
        <ModalTitle>{props.title} <CloseButton onClick={()=>props.onClose()}/></ModalTitle>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </ModalBackdrop>
  )
}

export default BaseModal
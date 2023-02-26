import React from 'react'

interface IPreviewList {
  value ?: File[],
  name : string
}

const PreviewList = (props: IPreviewList) => {
  


  return (
    <ul>
      {
    props.value &&
    <ol>
      {
        props.value.map((_file,_index) => <li key={`${props.name}-pr-${_index}`}>{_file.name} - {_file.size} <FaTrash onClick={()=>props.onChange(props.value.filter((x,i) => i !== _index))} style={{cursor:'pointer'}} /></li>) 
      }
    </ol>
  }
    </ul>
  )
}

export default PreviewList
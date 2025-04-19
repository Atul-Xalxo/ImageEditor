import React from 'react'
import './editor.css'
import Layers from './Layers'
import WorkSpace from './WorkSpace'
import Options from './Options'

const Editor = ({previewImg}) => {
  return (
   <div className='editor'>
        <Layers previewImg = {previewImg} />
        <WorkSpace previewImg = {previewImg} />
        <Options previewImg = {previewImg} />
   </div>
  )
}

export default Editor
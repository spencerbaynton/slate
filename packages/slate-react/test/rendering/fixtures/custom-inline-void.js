/** @jsx h */

import React from 'react'
import h from '../../helpers/h'

function Emoji(props) {
  return (
    React.createElement('img', props.attributes)
  )
}

function renderNode(props) {
  switch (props.node.type) {
    case 'emoji': return Emoji(props)
  }
}

export const props = {
  renderNode,
}

export const state = (
  <state>
    <document>
      <paragraph>
        <emoji />
      </paragraph>
    </document>
  </state>
)

export const output = `
<div data-slate-editor="true" contenteditable="true" role="textbox">
  <div style="position:relative">
    <span>
      <span>
        <span data-slate-zero-width="true">&#x200A;</span>
      </span>
    </span>
    <span data-slate-void="true" draggable="true">
      <span style="height:0;color:transparent">
        <span>
          <span></span>
        </span>
      </span>
      <span contenteditable="false">
        <img>
      </span>
    </span>
    <span>
      <span>
        <span data-slate-zero-width="true">&#x200A;</span>
      </span>
    </span>
  </div>
</div>
`.trim()
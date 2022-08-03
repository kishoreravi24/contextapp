import React, { useContext } from 'react'
import { context } from './contextManager/Context'

export default function UpdateContext() {
    const {name,fun} = useContext(context);
  return (
    <div>
        <button onClick={() => fun('Jr')}>Change</button>
    </div>
  )
}

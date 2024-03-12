import React from 'react'

function Memos({name}) {
    console.log('memo')
  return (
    <div>
     {name}
    </div>
  )
}

export default React.memo(Memos)
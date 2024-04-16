import React, { useEffect } from 'react'
import './User.css'
const SpeakerEvent = ({post}) => {
  console.log(post)

  return (
   <>
   <div> {post.map((post)=><><li>{post.time}</li>
   </>)}</div>
  
   </>
  )
}

export default SpeakerEvent

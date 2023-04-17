import React from 'react'
import GIF from '../assets/Home GIF.gif'
import styled from 'styled-components'

const VideoContainer = styled.div`
width: 100%;
img {
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        {/* <video src={GIF} type="video/mp4" autoPlay muted loop/> */}
        <img src={GIF} alt='GIF Weirdos'/>
    </VideoContainer>
  )
}

export default CoverVideo
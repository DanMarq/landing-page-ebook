import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const videoLink = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'

export default function Video() {
    return (
       <>
        <ReactPlayer
            controls
            width='100%'
            height='auto'
            className="video-player"
            url={videoLink} />
       </>
    )
}
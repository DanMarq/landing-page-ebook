import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

const videoLink = 'https://youtu.be/CIW1KhDMJZE'

export default function Video() {
    return (
       <>
        <ReactPlayer
            width='100%'
            height='450px'
            className="video-player"
            url={videoLink} />
       </>
    )
}
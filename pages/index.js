import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
    const [videos, setVideos] = useState(['Haha', 'Haha', 'Haha', 'Haha'])
    const [isPresenting, setIsPresenting] = useState(false)

    const add = () => {
        setVideos(prev => prev.concat(['Haha']))
    }

    const remove = () => {
        if (videos.length > 1) setVideos(prev => prev.slice(0, prev.length - 1))
    }

    return (
        <>
            <Head>
                <style>
                    {`
                        #__next { height: 100% }
                    `}
                </style>
            </Head>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 8,
                    fontSize: 24,
                    transform: 'translateY(-50%)'
                }}
            >
                <span onClick={()=> add()}>+</span>
                <span>{ videos.length }</span>
                <span onClick={()=> remove()}>-</span>
            </div>
            <span
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    fontSize: 32,
                    fontWeight: 700,
                    color: isPresenting ? 'green' : 'red'
                }}
                onClick={() => setIsPresenting(prev => !prev)}
            >
                presenting
            </span>
            <div
                style={{
                    minHeight: '100%',
                    minWidth: '100%',
                    height: '100%',
                    width: '100%',
                    padding: '1rem',
                    display: "grid",
                    alignContent: 'center',
                    gridAutoRows: '33%',
                    gridTemplateColumns: videos.length > 3 || isPresenting ? '1fr 1fr 1fr' : '1fr '.repeat(videos.length),
                }}
            >
                {
                    videos.slice(0,isPresenting ? 4 : 9).map((video, index) => (
                        <div
                            key={index}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                border: '1px solid #d7d7d7',
                                gridColumn: isPresenting && index === 0 ? videos.length === 1 ? '1/4' : '1/3' : '',
                                gridRow: isPresenting ? index === 0 ? '1/4' : '' : videos.length < 3 ? '1/4' : ''
                            }}
                        >
                            { video }{ index }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

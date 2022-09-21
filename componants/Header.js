import React from 'react'
import Styles from '../styles/header.module.css'
import Image from 'next/image'

export default function header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.headerimage}>
                <Image 
                src={'/assets/image/retro-neon.jpg'}
                height={300}
                width={1000}
                
                />
            </div>
            <div className={Styles.headertitre}>
                <h1>RetroJ</h1>
                <Image 
                src={'/assets/image/mario.gif'}
                height={100}
                width={100}
                className={Styles.floatRight}
                />
            </div>
        </header>
    )
}

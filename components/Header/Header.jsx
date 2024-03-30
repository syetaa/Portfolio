'use client'
import Link from "next/link";
import styles from "./Header.module.css"
import {useTheme} from "@/hooks/user-theme"

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


const Header = () => {

    const {theme,setTheme} = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }


    return(
        <div>
            <div id="navpage" className={styles.textmain}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <div className={styles.links}>
                    <Link href="#navpage">Home</Link>    
                    <Link href="#skillspage">Skills</Link> 
                    <Link href="#portfoliopage">Portfolio</Link> 
                    <Link href="#aboutpage">About me</Link>     
                    <Link href="#contactpage">Contact</Link>
                </div>
                <div className={styles.btns}>
                    <div className={styles.light}>
                        <MdLightMode size={30} onClick={handleLightThemeClick}/>
                    </div>
                    <div className={styles.dark}>
                        <MdDarkMode size={30} onClick={handleDarkThemeClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Header};
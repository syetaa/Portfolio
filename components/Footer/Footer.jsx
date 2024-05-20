import styles from "./Footer.module.css"
import Image from "next/image";

import { IoIosArrowRoundUp } from "react-icons/io";

import logo_footer from "@/public/logo_footer.png"


const Footer = () => {
    return(
        <div>
            <div id="contactpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.cont1_1}>
                        <div className={styles.text1}>
                            <a href="#navpage">Home</a>
                        </div>
                        <div className={styles.text1}>
                            <a href="#skillspage">Skills</a>
                        </div>
                        <div className={styles.text1}>
                            <a href="#portfoliopage">Portfolio</a>
                        </div>
                        <div className={styles.text1}>
                            <a href="#aboutpage">About me</a>
                        </div>
                    </div>
                    <div className={styles.cont1_2}>
                        <div className={styles.text1}>
                            Email: <a href="#">soinovmich@yandex.ru</a>
                        </div>
                        <div className={styles.text1}>
                            GitHub: <a href="https://github.com/syetaa" target="_blank">@syetaa</a>
                        </div>
                        <div className={styles.text1}>
                            Tg: <a href="https://t.me/syetaaa0" target="_blank">@syetaaa0</a>
                        </div>
                        <div className={styles.text1}>
                            Calls: +7 (977) - 370 - 73 -76
                        </div>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.cont2_1}>
                        <a href="#navpage"><IoIosArrowRoundUp color="#fff" size={40}/></a>
                    </div>
                    <div className={styles.cont2_2}>
                        Copyright © 2024
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Footer};
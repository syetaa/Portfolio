import Image from "next/image";
import styles from "./HiThere.module.css"

import Image_main from "@/public/Gleb.png"


const HiThere = () => {
    return(
        <div>
            <div id="homepage" className={styles.textmain}>
                <div className={styles.cont}>
                    <div className={styles.cont0}>
                        <div className={styles.text1}>
                        HI THERE, <br/>IM MICHEL
                        </div>
                        <div className={styles.text2}>
                            I been doing web design, front-end and<br/> back-end development. Do you need a<br/> website design, site layout, or maybe a<br/> turnkey website? Then contact me
                        </div>
                    </div>
                    
                    <div className={styles.text3}>
                        <a href="https://t.me/syetaaa0" target="_blank">CONTACT ME</a>
                    </div>
                </div>
                <div className={styles.cont1}>
                    <Image src={Image_main} width={632} 
                    height={674} quality={100} alt="imghome" priority/>
                </div>
            </div>
        </div>
    )
}

export {HiThere};
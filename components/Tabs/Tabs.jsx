import Image from "next/image";
import styles from "./Tabs.module.css"

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

import card_img1 from "@/public/bi_vector-pen.png"

const Tabs = () => {
    return(
        <div>
            <div id="skillspage" className={styles.textmain}>
                <div className={styles.cont}>
                    <div className={styles.cont1_1}>
                        <div className={styles.card}>
                            <div className={styles.img}>
                                <FaReact size={100} color='#00C4F0' />
                            </div>
                            <div className={styles.text}>
                                React.js
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.img}>
                                <SiNextdotjs size={100} color='#00C4F0' />
                            </div>
                            <div className={styles.text}>
                                Next.js
                            </div>
                        </div>
                    </div>
                    <div className={styles.cont1_2}>
                        <div className={styles.card}>
                            <div className={styles.img}>
                                <IoLogoPython size={100} color='#00C4F0' />
                            </div>
                            <div className={styles.text}>
                                Python
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.img}>
                                <IoLogoJavascript size={100} color='#00C4F0' />
                            </div>
                            <div className={styles.text}>
                                JS
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className={styles.cont1}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <MdDesignServices size={100} color='#00C4F0'/>
                        </div>
                        <div className={styles.text}>
                            UX/UI Design
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.img}>
                        <MdOutlinePersonalVideo size={100} color='#00C4F0' />
                        </div>
                        <div className={styles.text}>
                            Frontend
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Tabs};
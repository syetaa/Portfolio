import Image from "next/image";
import styles from "./About.module.css"

import about_img1 from "@/public/about_img1.png"
import about_img2 from "@/public/about_img2.png"

const About = () => {
    return(
        <div>
            <div id="aboutpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.card1}>
                        <Image src={about_img1} alt="about_img1"/>
                    </div>
                    <div className={styles.card2}>
                        <Image src={about_img2} alt="about_img2"/>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        ABOUT ME
                    </div>
                    <div className={styles.text2}>
                        Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                        By trusting me, you will get the maximum return for your project, save your nerves and time.
                        If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
                    </div>
                </div>
            </div>
        </div>
    )
}

export {About};
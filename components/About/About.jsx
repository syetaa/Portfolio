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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis sed! Dolores libero minima, fugit molestias impedit facilis voluptates animi eaque non tenetur. Eos ullam, quo recusandae hic totam dicta nesciunt! Neque natus, fugit perspiciatis provident earum consequuntur eius consequatur quis doloremque ipsum minima harum sit consectetur dolorum nostrum accusamus quod illo, reiciendis facere similique dolores? Aperiam, fugit? Optio ducimus ut repellendus in iusto temporibus animi id minus a. Tenetur vitae dolor magnam architecto temporibus optio nesciunt molestias praesentium ducimus debitis adipisci animi consequatur numquam sint nemo, quasi omnis laborum? Nisi vero distinctio natus. Eaque, possimus nostrum tempore numquam autem, ipsam amet, obcaecati placeat nihil omnis aliquid tempora ducimus incidunt fugit nobis? Ad, sed? Fugiat cupiditate non ipsum?
                    </div>
                </div>
            </div>
        </div>
    )
}

export {About};
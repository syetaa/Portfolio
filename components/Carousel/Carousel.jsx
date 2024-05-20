'use client'
import styles from "./Carousel.module.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";


import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import img_carousel1 from "@/public/img_carousel1.png"
import img_carousel2 from "@/public/img_carousel2.png"
import img_carousel3 from "@/public/img_carousel3.png"
import img_carousel4 from "@/public/img_carousel4.png"

function Carousel() {

    const renderNextButton = ({ isDisabled }) => {
      return <FaArrowRight size={30} className={styles.next_btn}/>;
    };

   const renderPrevButton = ({ isDisabled }) => {
      return <FaArrowLeft size={30} className={styles.prev_btn}/>;
    };



    //Responsiveness 
  const responsive = {
    400: { items: 1 },
    840: { items: 1 },
    1220: { items: 1 },
    1600: { items: 1 },
    2200: { items: 1}
  };



   //The carousel items 
    const items = [
        <div key={1} className={styles.item}>
            <div className={styles.card}>
                <div className={styles.card_cont1}>
                    <a href="https://github.com/syetaa/NftIco" target="_blank"><Image src={img_carousel3} alt="carousel_img"/></a>
                </div>
                <div className={styles.card_cont2}>
                    <div className={styles.text1}>
                        NftICO
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                    </div>
                    <div className={styles.text3}>
                        <a href="https://github.com/syetaa/NftIco" target="_blank">More</a>  
                        <FaArrowRightLong />
                    </div>
                </div>  
            </div>
        </div>,

        <div key={2} className={styles.item}>
            <div className={styles.card}>
                <div className={styles.card_cont1}>
                <a href="https://github.com/syetaa" target="_blank"><Image src={img_carousel2} alt="carousel_img"/></a>
                </div>
                <div className={styles.card_cont2}>
                    <div className={styles.text1}>
                        BuyNFT
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                    </div>
                    <div className={styles.text3}>
                        <a href="https://github.com/syetaa" target="_blank">More</a>  
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>,

        <div key={3} className={styles.item}>
            <div className={styles.card}>
                <div className={styles.card_cont1}>
                <a href="https://github.com/syetaa" target="_blank"><Image src={img_carousel3} alt="carousel_img"/></a>
                </div>
                <div className={styles.card_cont2}>
                    <div className={styles.text1}>
                        NftICO
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                    </div>
                    <div className={styles.text3}>
                            <a href="https://github.com/syetaa/NftIco" target="_blank">More</a>  
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>,

        <div key={4} className={styles.item}>
            <div className={styles.card}>
                <div className={styles.card_cont1}>
                <a href="https://github.com/syetaa" target="_blank"><Image src={img_carousel1} alt="carousel_img"/></a>
                </div>
                <div className={styles.card_cont2}>
                    <div className={styles.text1}>
                        HBoard
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                    </div>
                    <div className={styles.text3}>
                        <a href="https://github.com/syetaa" target="_blank">More</a>  
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>,

        <div key={5} className={styles.item}>
            <div className={styles.card}>
                <div className={styles.card_cont1}>
                    <a href="https://github.com/syetaa/Hotels" target="_blank"><Image src={img_carousel4} alt="carousel_img" /></a>
                </div>
                <div className={styles.card_cont2}>
                    <div className={styles.text1}>
                        Hotels
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                    </div>
                    <div className={styles.text3}>
                        <a href="https://github.com/syetaa/Hotels" target="_blank">More</a>
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>,

    

  ];



    return (
      <>
        <div className={styles.cont}>
          <div className={styles.carousell}>
            <div className={styles.slider_main}>
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay="true"
                autoPlayInterval="1500"
                infinite="true"
                disableDotsControls="true"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}

              />
            </div>
          </div>
        </div>
        
        
        
      </>
    )
  }
  
  export default Carousel
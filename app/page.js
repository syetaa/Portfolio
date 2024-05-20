import Image from "next/image";
import styles from "./page.module.css";
import { HiThere } from "@/components/HiThere/HiThere";
import { Tabs } from "@/components/Tabs/Tabs";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import Carousel from "@/components/Carousel/Carousel";
import { About } from "@/components/About/About";

export default function Home() {
  return (
    <div>
      <HiThere/>
      <Tabs/>
      <Portfolio/>
      <Carousel/>
      {/* <About/> */}
    </div>
  );
}

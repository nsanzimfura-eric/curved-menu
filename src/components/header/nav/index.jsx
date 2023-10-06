import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa
        suscipit perspiciatis voluptatibus nobis, architecto dicta, voluptate
        accusamus praesentium possimus magnam unde in, perferendis cum rerum
        fugit odit? Temporibus quod harum, at explicabo reiciendis quam
        perspiciatis dignissimos tenetur, eum iste, corporis aspernatur magni in
        adipisci vitae facere. Maxime, officia quos culpa tempora iusto, dicta
        nostrum atque earum excepturi praesentium doloremque eum natus facere
        aspernatur officiis reiciendis inventore tempore amet? Dicta est
        voluptate corrupti dignissimos perspiciatis voluptatum, architecto
        quidem commodi debitis ab earum cupiditate hic qui suscipit totam
        facilis atque adipisci dolorum officia esse illum sint in. Blanditiis
        eligendi quam necessitatibus expedita provident porro, sunt modi minima
        labore non placeat beatae sequi molestias deserunt quos doloremque
        commodi ea reprehenderit cum consectetur recusandae nemo itaque. Odio
        inventore sapiente odit sit eligendi expedita voluptates dolores
        veritatis, deserunt modi beatae vitae sint quas provident nihil dolore
        atque. Temporibus accusamus nulla sit sequi aliquid. Velit aliquam
        maiores labore veniam soluta, nam dicta voluptatum recusandae odit ipsam
        laudantium nihil repellat iusto sed error. Esse ducimus quasi inventore
        voluptatem minus, dignissimos pariatur accusantium blanditiis natus,
        libero id! Eum libero tenetur minus, culpa fugit iste maxime
        consequuntur, exercitationem earum excepturi, sequi laborum in eveniet
        aliquid quibusdam vitae assumenda adipisci? Quibusdam dolor tenetur
        dolorem commodi fugit quaerat necessitatibus culpa qui omnis quisquam
        non numquam doloribus maiores, ipsam nihil sit quidem similique suscipit
        voluptas. Optio exercitationem error quos quis sapiente? Aspernatur
        obcaecati ipsa ullam illum cumque illo expedita beatae a reiciendis
        aliquam. Suscipit nobis vitae, minus error esse accusantium numquam rem
        sit nulla, exercitationem officia aperiam amet facere nisi et. Officiis
        id necessitatibus alias ipsa eum ad fugit sapiente tenetur reiciendis
        sed eligendi quae, suscipit dolorum molestiae qui dolorem repudiandae
        perspiciatis modi nulla nobis ullam consectetur fugiat quam. Incidunt
        corrupti quia non. Earum harum saepe eius libero, porro aliquam debitis.
      </div>
      <Curve />
    </motion.div>
  );
}

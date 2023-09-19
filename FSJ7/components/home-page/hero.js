import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      
      <div className={classes.images}>
        <Image
          src="/images/site/bk.png"
          alt="kiloechoalpha"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Kea</h1>
      <p>
        I blog about web development - especially frontend frameworks React.
      </p>
    </section>
  );
}

export default Hero;

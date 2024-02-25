// import { useRef } from "react";
// import "./porfolio.scss";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// const items = [
//   {
//     id: 1,
//     title: "Book Store",
//     img:"book.jpg",
//     desc: "The Bookstore Application utilizes a technology stack that includes React for dynamic user interfaces, HTML and CSS for front-end design, MongoDB as the back-end database, and Node.js for seamless communication, enabling administrators to manage book information and customers to navigate and explore the catalog effortlessly.",

//   },
//   {
//     id: 2,
//     title: "WeatherSpot Explore",
//     img: "/weather.png",
//     desc: " WeatherSpot Explore is a location-based real-time forecasts platform built using React and integrated with Rapid APIs for dynamic weather data retrieval.",

//   },
// ];

// const Single = ({ item }) => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

//   return (
//     <section >
//       <div className="container">
//         <div className="wrapper">
//           <div className="imageContainer" ref={ref}>
//             <img src={item.img} alt="" />
//           </div>
//           <motion.div className="textContainer" style={{y}}>
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//            <a href="https://weather-sahilkulkarni10.vercel.app">See Demo</a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Portfolio = () => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div className="portfolio" ref={ref}>
//       <div className="progress">
//         <h1>Projects</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;


import { useRef } from "react";
import "./porfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Book Store",
    img: "book.jpg",
    desc: "The Bookstore Application utilizes a technology stack that includes React for dynamic user interfaces, HTML and CSS for front-end design, MongoDB as the back-end database, and Node.js for seamless communication, enabling administrators to manage book information and customers to navigate and explore the catalog effortlessly.",
  },
  {
    id: 2,
    title: "WeatherSpot Explore",
    img: "/weather.png",
    desc: " WeatherSpot Explore is a location-based real-time forecasts platform built using React and integrated with Rapid APIs for dynamic weather data retrieval.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.id === 1 && (
              <a href="https://github.com/SahilKulkarni10" target="_blank" rel="noopener noreferrer">
                See Book Store Demo
              </a>
            )}
            {item.id === 2 && (
              <a href="https://weather-sahilkulkarni10.vercel.app" target="_blank" rel="noopener noreferrer">
                See WeatherSpot Explore Demo
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import parcours from "../../data/Parcours.json";

function TimelineCards({ parcour }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent ",
        backgroundSize: "cover",
        color: "#fff",
        boxShadow: "0px 0px 20px 0px #000",
        margin: "30px",
      }}
      contentArrowStyle={{ borderRight: "7px " }}
      iconStyle={{ background: "#9386E0" }}
      media="(max-width: 768px)"
      style={{ padding: "50px", margin: "0px" }}
    >
      <div className="">
        <h1 className="font-primary-font font-bold text-[25px] md:text-[40px] bg-clip-text text-transparent  bg-gradient-to-b from-gradient-color1 via-gradient-color3 to-gradient-color2">
          {parcour.title}
        </h1>
        <h1 className="font-secondary-font text-[15px] md:text-[25px]">
          {parcour.description}
        </h1>
      </div>
    </VerticalTimelineElement>
  );
}

export default function Timeline() {
  return (
    <>
      <motion.div className="md:flex text-start md:mt-10">
        <h1 className=" relative uppercase font-secondary-font text-white font-[600] text-center text-[25px] md:text-[50px]">
          Ton parcours
        </h1>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {parcours.map((parcour) => (
            <TimelineCards key={parcour.id} parcour={parcour} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

TimelineCards.propTypes = {
  parcour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

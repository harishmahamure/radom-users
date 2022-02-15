import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./card.css";

interface CardProps {
  url: string;
  altTag: string;
  contact: string;
  dob: string | null;
  location: string;
  password: string;
  name: string;
}
const Card: React.FC<CardProps> = ({
  url,
  altTag,
  dob,
  contact,
  location,
  password,
  name,
}) => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];

  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ]);

  return (
    <motion.div className="example-container" style={{ background }}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <div className="head">
          <img
            className="image"
            src={url}
            alt={altTag}
            height={150}
            width={150}
          />
        </div>
        <div className="card-body">
          <h1 style={{ fontSize: 24, textAlign: "center" }}>{name}</h1>
          <h2 className="subtitle">{contact}</h2>
        </div>
        <div className="card-footer">
          <hr></hr>
          <div className="horizontal-list">
            <div className="horizontal-list-item">
              <h2 className="emoji">🎂</h2>
              <p className="info-text">{dob}</p>
            </div>
            <div className="horizontal-list-item">
              <h2 className="emoji">🏚</h2>
              <p className="info-text">{location}</p>
            </div>
            <div className="horizontal-list-item">
              <h2 className="emoji">🔐</h2>
              <p className="info-text">{password}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;

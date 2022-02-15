import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./card.css";

interface Notication {
  show: boolean;
  message: string;
}
interface CardProps {
  url: string;
  altTag: string;
  contact: string;
  dob: string | null;
  location: string;
  password: string;
  name: string;
  addFriend: () => void;
  cancelRequest: () => void;
  showNotification: Notication;
  requests: number;
}
const Card: React.FC<CardProps> = ({
  url,
  altTag,
  dob,
  contact,
  location,
  password,
  name,
  addFriend,
  cancelRequest,
  showNotification,
  requests,
}) => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ]);
  return (
    <motion.div className="container" style={{ background }}>
      <h2 style={{ paddingBottom: 30, color: "white", textAlign: "center" }}>
        {requests <= 0
          ? `Don't stop! swipe right now ❤️`
          : `Added ${requests} 👫 total`}
      </h2>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x > 200) {
            addFriend();
          } else if (info.offset.x < -200) {
            cancelRequest();
          }
        }}
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
          <hr></hr>
          <p style={{ textAlign: "center", paddingTop: 5 }}>
            Swipe right to add me
          </p>
        </div>
      </motion.div>
      {showNotification.show && (
        <motion.div
          animate={{ y: -50 }}
          style={{
            background: "white",
            maxWidth: 320,
            minWidth: 240,
            borderRadius: 20,
            height: 50,
            position: "absolute",
            bottom: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <p style={{ padding: 20 }}>Send Request to ❤️ {name}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;

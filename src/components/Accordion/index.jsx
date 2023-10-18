import React from "react";
import { useState } from "react";
import "./Accordion.css";
const Accordion = ({ faqs }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion-wrapper">
      {faqs.map((faq, index) => (
        <AccordionItem
          faq={faq}
          num={index}
          onOpen={setCurOpen}
          curOpen={curOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;

export const AccordionItem = ({ faq, num, curOpen, onOpen }) => {
  const { title, text } = faq;
  const isOpen = curOpen === num ? true:false ;
  return (
    <div className={`accordion-item ${isOpen ? 'open': ''}`}>
      <div className="item-wrapper" onClick={() => onOpen(isOpen ? null: num)}>
        <div className={`item ${isOpen ? 'open-item' :''}`}>
          <span className="number">{num < 9 ? `0${num + 1}` : num}</span>
          <span className="title">{title}</span>
        </div>
        <span className={`icon ${isOpen ? 'open-item':''}`}>-</span>
      </div>
      {isOpen && <div>{text}</div>}
    </div>
  );
};

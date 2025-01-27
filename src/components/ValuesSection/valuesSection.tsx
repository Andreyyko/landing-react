import React, { useState, useEffect } from "react";

import { openModal, closeModal } from "../../utils/modalHandlers.ts";
import { values } from "../../data/values.ts";
import { Values } from "../../data/values.ts";  

import "./valuesSection.css";

const ValuesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Values | null>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal(setIsModalOpen, setSelectedValue);
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="values-section">
      <h2 className="values-title">Our Values</h2>
      <div className="values-container">
        <div className="values-grid">
          {values.map((value: Values) => ( 
            <div key={value.id} className="value-card">
              <h3 className="value-name">{value.title}</h3>
              <img src={value.image} alt={value.title} className="value-image" />
              <p className="value-description">{value.description}</p>
              <button
                onClick={() => openModal(setIsModalOpen, setSelectedValue, value)}
                className="value-button"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedValue && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => closeModal(setIsModalOpen, setSelectedValue)}
              className="modal-close-button"
            >
              ✖
            </button>
            <h3 className="modal-title">{selectedValue.title}</h3>
            <img
              src={selectedValue.image}
              alt={selectedValue.title}
              className="modal-image"
            />
            <p className="modal-description">{selectedValue.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ValuesSection;

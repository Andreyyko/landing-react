export const openModal = (setIsModalOpen, setSelectedValue, value) => {
    setSelectedValue(value);
    setIsModalOpen(true);
  };
  
export const closeModal = (setIsModalOpen, setSelectedValue) => {
    setIsModalOpen(false);
    setSelectedValue(null);
};


  
import React, { createContext, useState, useCallback } from "react";

export const UIContext = createContext({
  snackbar: {
    isOpen: false,
    message: "",
    hideDuration: 6000,
    onClose: () => {},
  }
})

export const UIProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const onClose = () => {
    setOpen(false);
  }

  return (
    <CarsContext.Provider
      value={{
        cars,
        loading,
        error,
        fetchCars,
        addCar,
        updateCar,
        deleteCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

/* <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Note archived"
  action={action}
/> */
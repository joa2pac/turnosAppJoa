import React from "react";

import { Reserva } from "../table/TablaReserva";

export interface MyModalProps {
  visible: Boolean;
  onClose: () => void;
  reserva: Reserva;
  handleReserva: () => void;
}

export const MyModal = (props: MyModalProps) => {
  const { visible, onClose, reserva, handleReserva } = props;

  const handleClose = (e: any) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <svg
            aria-hidden="true"
            className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="text-center mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {reserva.entrenamiento} {reserva.fecha}
          </h3>

          <div className="flex flex-col"></div>
          <div className="text-center">
            <button
              onClick={() => {
                handleReserva();
              }}
              disabled={reserva.reservados === reserva.limiteReserva}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Confirmá
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancelá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

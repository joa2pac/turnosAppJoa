import React from "react";

export interface ModalProps {
  onClose: () => void;
  visible: boolean;
  reserva: Reserva;
  handleCancelarReserva: () => void;
}

export interface Reserva {
  id: number;
  fecha: string;
  entrenamiento: string;
  estado: string;
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  visible,
  reserva,
  handleCancelarReserva,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-60"></div>
      <div className="bg-white rounded-md p-8 w-1/3 z-10">
        <h3 className="text-2xl font-semibold mb-4">Detalle de reserva</h3>
        <p>Fecha: {reserva.fecha}</p>
        <p>Entrenamiento: {reserva.entrenamiento}</p>
        <p>Estado: {reserva.estado}</p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleCancelarReserva}
            className="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Cancelar reserva
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

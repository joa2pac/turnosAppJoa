/* eslint-disable jsx-a11y/anchor-is-valid */
import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useState } from "react";
import { MyModal } from "../modal/MyModal";

export interface Reserva {
  id: number;
  fecha: string;
  entrenamiento: string;
  reservados: number;
  limiteReserva: number;
}

export interface Usuario {
  id: number;
  email: string;
  reservas: Reserva[];
}

export const mockUsuario: Usuario = {
  id: 1,
  email: "Joaquin_19@gmail.com",
  reservas: [],
};

export const mockReservas: Reserva[] = [
  {
    id: 1,
    fecha: "Jue 01 21:00",
    entrenamiento: "Clase",
    reservados: 3,
    limiteReserva: 14,
  },
  {
    id: 2,
    fecha: "Jue 01 22:00",
    entrenamiento: "Atletas",
    reservados: 8,
    limiteReserva: 14,
  },
  {
    id: 3,
    fecha: "Jue 01 23:00",
    entrenamiento: "Cross.traning",
    reservados: 14,
    limiteReserva: 14,
  },
];

export const TablaReserva = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  const [usuario, setUsuario] = useState<Usuario>(mockUsuario);

  const [selectedReserva, setSelectedReserva] = useState<Reserva>({} as Reserva);

  const [showModal, setShowModal] = useState(false);

  const selectReserva = (reserva: Reserva) => {
    setSelectedReserva(reserva);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const updateReserva = () => {
    const id = selectedReserva.id;
    const filteredReservas = reservas.filter((reserva) => reserva.id !== id);
    let updatedReservas = [...filteredReservas];
    const reserva = reservas.find((reserva) => reserva.id === id);
    if (reserva) {
      handleUsuarioReserva(reserva); // Llama a handleUsuarioReserva para guardar la reserva
      const updatedReserva = { ...reserva, reservados: reserva.reservados + 1 };
      updatedReservas.push(updatedReserva);
      updatedReservas = updatedReservas.sort((a, b) => {
        return a.id - b.id;
      });
      setReservas(updatedReservas);
      localStorage.setItem("Reservas", JSON.stringify(updatedReservas));
      setShowModal(false);
    }
  };

  const isReservado = (reserva: Reserva): boolean => {
    return usuario.reservas.some((r) => r.id === reserva.id);
  };

  useEffect(() => {
    const dataReservas = localStorage.getItem("Reservas");
    if (dataReservas) {
      setReservas(JSON.parse(dataReservas));
    }

    const dataUsuario = localStorage.getItem("Usuario");
    if (dataUsuario) {
      setUsuario(JSON.parse(dataUsuario));
    } else {
      localStorage.setItem("Usuario", JSON.stringify(mockUsuario));
      setUsuario(mockUsuario);
    }
  }, []);

  const handleUsuarioReserva = (reserva: Reserva) => {
    const updatedUsuario = { ...usuario, reservas: [...usuario.reservas, reserva] };
    setUsuario(updatedUsuario);
    localStorage.setItem("Usuario", JSON.stringify(updatedUsuario));
  };

  const renderReservas = reservas.length
    ? reservas.map((reserva) => {
        return (
          <tr key={reserva.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {reserva.fecha}
            </th>
            <td className="px-6 py-4">{reserva.entrenamiento}</td>
            <td className="px-6 py-4">
              {reserva.reservados}/{reserva.limiteReserva}
            </td>

            <td className="px-6 py-4">
              <button
                onClick={() => {
                  selectReserva(reserva);
                }}
                disabled={reserva.reservados === reserva.limiteReserva || isReservado(reserva)}
                type="button"
                className={`text-white ${
                  reserva.reservados === reserva.limiteReserva || isReservado(reserva)
                    ? "bg-gray-500"
                    : "bg-blue-700 hover:bg-blue-800"
                }   focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                data-modal-target="modalId"
                data-modal-toggle="popup-modal"
              >
                Reservá
              </button>
            </td>
          </tr>
        );
      })
    : undefined;

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Entrenamiento
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>

              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>{renderReservas}</tbody>
        </table>
        <MyModal
          onClose={handleClose}
          visible={showModal}
          reserva={selectedReserva}
          handleReserva={updateReserva}
        />
      </div>
    </>
  );
};

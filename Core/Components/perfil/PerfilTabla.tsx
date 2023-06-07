import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { Reserva } from "../table/TablaReserva";

export type ReservaEstadoType = "confirmado" | "cancelado";

export interface UsuarioReserva extends Reserva {
  estado: ReservaEstadoType;
}

export interface Usuario {
  id: number;
  email: string;
  reservas: UsuarioReserva[];
  creditos?: number;
}

export const mockUsuario: Usuario = {
  id: 1,
  email: "Joaquin_19@gmail.com",
  reservas: [],
  creditos: 30,
};

export const PerfilTabla = () => {
  const [reservas, setReservas] = useState<UsuarioReserva[]>([]);
  const [usuario, setUsuario] = useState<Usuario>(mockUsuario);
  const [selectedReserva, setSelectedReserva] = useState<UsuarioReserva>({} as UsuarioReserva);
  const [showModal, setShowModal] = useState(false);

  const selectReserva = (reserva: UsuarioReserva) => {
    setSelectedReserva(reserva);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const cancelarReserva = () => {
    const updatedUsuarioReservas: UsuarioReserva[] = reservas.map((reserva) => {
      if (reserva.id === selectedReserva.id) {
        return { ...reserva, estado: "cancelado" };
      }
      return reserva;
    });

    const updatedUsuario = {
      ...usuario,
      reservas: updatedUsuarioReservas,
    };

    setReservas(updatedUsuarioReservas);
    setUsuario(updatedUsuario);

    const reservasStoredData = localStorage.getItem("Reservas");

    if (reservasStoredData) {
      const reservasParsed = JSON.parse(reservasStoredData) as Reserva[];

      if (reservasParsed.length) {
        const updatedReservas = reservasParsed.map((reserva) => {
          if (reserva.id === selectedReserva.id) {
            return { ...reserva, reservados: reserva.reservados - 1 };
          }
          return reserva;
        });

        localStorage.setItem("Reservas", JSON.stringify(updatedReservas));
      }

      localStorage.setItem("Usuario", JSON.stringify(updatedUsuario));
    }

    setShowModal(false);
  };

  useEffect(() => {
    const usuario = localStorage.getItem("Usuario");
    if (usuario) {
      const usuarioStoredData = JSON.parse(usuario) as Usuario;
      const usuarioReservas = usuarioStoredData?.reservas;
      if (usuarioReservas.length) {
        setReservas(usuarioReservas);
        setUsuario((prevUsuario) => ({
          ...prevUsuario,
          reservas: usuarioReservas,
        }));
      }
    }
  }, []);

  const renderReservas = reservas.map((reserva) => (
    <tr key={reserva.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {reserva.fecha}
      </th>
      <td className="px-6 py-4">{reserva.entrenamiento}</td>
      <td className="px-6 py-4">{reserva.estado}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => selectReserva(reserva)}
          disabled={reserva.estado === "cancelado"}
          type="button"
          className={`text-white ${
            reserva.estado === "cancelado"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-800"
          } hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
          Cancelar
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        <Modal
          onClose={handleClose}
          visible={showModal}
          reserva={selectedReserva}
          handleCancelarReserva={cancelarReserva}
        />
      </div>
    </>
  );
};

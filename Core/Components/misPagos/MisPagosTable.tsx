import React, { useEffect, useState } from "react";
import { Reserva } from "../table/TablaReserva";
import { Usuario } from "../perfil/PerfilTabla";

export const MisPagosTable = () => {
  const [creditosDisponibles, setCreditosDisponibles] = useState(30);

  useEffect(() => {
    const usuario = localStorage.getItem("Usuario");
    if (usuario) {
      const usuarioStoredData = JSON.parse(usuario) as Usuario;
      const usuarioReservas = usuarioStoredData?.reservas;
      const totalReservados = usuarioReservas.length;
      setCreditosDisponibles(30 - totalReservados);
    }
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Vigencia
              </th>
              <th scope="col" className="px-6 py-3">
                Abono
              </th>
              <th scope="col" className="px-6 py-3">
                Disponible
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">05/07/2023</td>
              <td className="px-6 py-4">LIBRE</td>
              <td className="px-6 py-4">{creditosDisponibles}</td>
              <td className="px-6 py-4">ACTIVO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

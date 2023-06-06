import { PerfilTabla } from "@/Core/Components/perfil/PerfilTabla";
import { TablaReserva, mockReservas, mockUsuario } from "@/Core/Components/table/TablaReserva";
import { FormState } from "@/Core/Hooks/useForm";
import Link from "next/link";
import { useEffect } from "react";

export const Perfil = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <PerfilTabla />
    </div>
  );
};

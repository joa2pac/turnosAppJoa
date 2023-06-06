import { TablaReserva, mockReservas, mockUsuario } from "@/Core/Components/table/TablaReserva";
import { FormState } from "@/Core/Hooks/useForm";
import Link from "next/link";
import { useEffect } from "react";

export const Home = () => {
  function handleSubmit(data: FormState): void {
    throw new Error("Function not implemented.");
  }

  useEffect(() => {
    const reservas = localStorage.getItem("Reservas");
    if (!reservas) {
      localStorage.setItem("Reservas", JSON.stringify(mockReservas));
    }
    const usuario = localStorage.getItem("Usuario");
    if (!usuario) {
      localStorage.setItem("Usuario", JSON.stringify(mockUsuario));
    }
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen">
      {/* <div className="justify-center flex ...">
        <Counter />
      </div>

      <Form /> */}

      <TablaReserva />

      {/* <Appmodal /> */}
    </div>
  );
};

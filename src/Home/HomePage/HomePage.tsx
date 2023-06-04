import { Counter } from "../../components/counter/Counter";
import "tailwindcss/tailwind.css";
import { Form } from "../../components/form/Form";
import { FormState } from "../../hooks/Form";
import { TablaReserva, mockReservas, mockUsuario } from "../../components/table/TablaReserva";
import { useEffect } from "react";
import { ModalComp } from "../../components/table/ModalComp";
import { Appmodal } from "../../components/modal/Appmodal";

export const HomePage = () => {
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
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a className="text-xl font-bold text-blue-500" href="/">
            Logo
          </a>
          <ul className="flex space-x-4">
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/">
                Inicio
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/">
                Acerca
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/">
                Servicios
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido a nuestra página principal
        </h1>
        <p className="text-lg text-gray-700">
          Aquí puedes encontrar información sobre nuestros productos y servicios.
        </p>
      </main>

      {/* <div className="justify-center flex ...">
        <Counter />
      </div>

      <Form /> */}

      <TablaReserva />

      {/* <Appmodal /> */}

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2023 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

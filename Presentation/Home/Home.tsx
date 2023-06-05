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
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link className="text-xl font-bold text-blue-500" href="/">
            Logo
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-gray-700 hover:text-gray-900" href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" href="/">
                Acerca
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" href="/">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" href="/">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido Link nuestra página principal
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

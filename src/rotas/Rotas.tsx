import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../paginas/Login";
import { Perfil } from "../paginas/Perfil";
import { NovoUsuario } from "../paginas/NovoUsuario";
import { Principal } from "../componentes/layout/Principal";
import { Home } from "../paginas/Home";
import { Cursos } from "../paginas/Cursos";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuario" element={<NovoUsuario />} />

        <Route path="/principal" element={<Principal />}>
          <Route path="home" element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="cursos" element={<Cursos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

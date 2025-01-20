"use client"; // Asegúrate de que este archivo se ejecute en el lado del cliente

import { useEffect, useState } from "react";
import GameCard from "../components/GameCard"; // Importamos el componente GameCard
import "../styles/style.css"; // Importamos el archivo de estilos

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((response) => response.json())
      .then((data) => setGames(data.games))
      .catch((error) => console.error("Error al cargar los juegos:", error));
  }, []);

  return (
    <div className="container">
      <h1>Juegos</h1>
      <div className="games-grid">
        {games.length > 0 ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p>Cargando juegos...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

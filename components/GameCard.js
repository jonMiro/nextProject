"use client"; // Asegúrate de que esto se ejecute en el lado del cliente

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.poster} alt={game.titulo} className="game-poster" />
      <div className="game-info">
        <h2>{game.titulo}</h2>
        <p>
          <strong>Género:</strong> {game.genero.join(", ")}
        </p>
        <p>
          <strong>Año:</strong> {game.year}
        </p>
        <p>
          <strong>Rating:</strong> {game.rate}
        </p>
        <p>
          <strong>Estado:</strong> {game.estado}
        </p>
        <p>
          <strong>Comentario:</strong> {game.comentario}
        </p>
      </div>
    </div>
  );
};

export default GameCard;

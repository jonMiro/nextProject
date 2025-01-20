import styles from "../styles/userCard.css";

const UserCard = ({ nombre, email, estado }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{nombre}</h2>
      <p className="user-email">Email: {email}</p>
      <p className="user-status">Estado: {estado}</p>
    </div>
  );
};

export default UserCard;

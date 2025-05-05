import { useState } from "react";
import "./App.css";

export function TwitterCard({ userName, name, initialIsFollowing }) {
  // Estado para manejar si el usuario está siguiendo o no
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  // Texto y clase CSS del botón según el estado
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = `tw-followCard-button ${isFollowing ? "is-following" : ""}`;

  return (  
    <article className="tw-followCard">
      {/* Información del usuario */}
      <header className="tw-followCard-header">
        <img 
          className="tw-followCard-avatar" 
          alt={`Avatar de ${name}`} 
          src="https://avatars.githubusercontent.com/u/154621378?s=400&u=3b3a692438586ea40be39b6ca0438da5995c8746&v=4"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      {/* Botón para seguir/dejar de seguir */}
      <aside>
        <button className={buttonClassName} onClick={() => setIsFollowing(!isFollowing)}>
          {text}
        </button>
      </aside>
    </article>
  );
}

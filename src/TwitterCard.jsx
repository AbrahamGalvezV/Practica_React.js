import { useState } from 'react';
import './App.css';

export function TwitterCard({ userName, name, isFollowing }) {

    // Renombramos el estado para evitar conflicto con la prop
    const [isFollowingState, setIsFollowingState] = useState(isFollowing);

    // Definimos el texto y la clase del botón según el estado
    const text = isFollowingState ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowingState 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';

    // Maneja el clic del botón
    const handleClick = () => {
        setIsFollowingState(!isFollowingState);
    };

    return (
        <article className='tw-followCard'>
            {/* Información del usuario */}
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    alt={`Avatar de ${name}`} 
                    src="https://avatars.githubusercontent.com/u/154621378?s=400&u=3b3a692438586ea40be39b6ca0438da5995c8746&v=4"
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                {/* Alterna los estilos según el estado */}
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}

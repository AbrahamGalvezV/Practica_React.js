import './App.css';

export function TwitterCard ({ formattedUserName, userName, name, isFallouwing }) {

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Imagen del avatar Abraham.Gálvez.Vives@gmail.com" src="https://avatars.githubusercontent.com/u/154621378?s=400&u=3b3a692438586ea40be39b6ca0438da5995c8746&v=4"/>
                <div className='tw-followCard-info'>
                    <strong>
                        {name}                       
                    </strong>
                    <span className='tw-followCard-infoUserName'>
                        {formattedUserName}
                    </span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>

    )
}
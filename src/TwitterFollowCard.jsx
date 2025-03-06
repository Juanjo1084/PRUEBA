import { useState } from "react"

export default function TwitterFollowCard({
  formatUserName,
  userName = 'uknown', 
  name
}) {

    const [isFollowing, setIsFollowing] = useState(false)
 
 
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttomClassName = isFollowing ? 'btn-following' : 'btn'

    return (
    <article className="card">
      <header className="header">
        <img src={`https://unavatar.io/${userName}`} 
         alt="El avatar de midudev"/>
        <div className="user-info">
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside className="footer">
        <button className={buttomClassName} 
          onClick={(handleClick) => setIsFollowing(!isFollowing)}>
          {text}
        </button>
      </aside>
    </article>
  )
}

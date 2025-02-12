import "./App.css";
import { TwitterCard } from "./TwitterCard";

export function App() {
  const format = (userName) => `@${userName}`;
  
  const formattedUserName = (<span>@midudev</span>);


  return (
    <section className="App">
      <TwitterCard
        formattedUserName={formattedUserName}
        isFollowing
        userName="Abraham.G.V"
        name="Abraham.Gálvez.Vives"
      />
      <TwitterCard
        formattedUserName={formattedUserName}
        isFollowing
        userName="Abraham.G.V"
        name="Abraham.Gálvez.Vives"
      />
      <TwitterCard
        formattedUserName={formattedUserName}
        isFollowing
        userName="Abraham.G.V"
        name="Abraham.Gálvez.Vives"
      />
      <TwitterCard
        formattedUserName={formattedUserName}
        isFollowing
        userName="Abraham.G.V"
        name="Abraham.Gálvez.Vives"
      />
    </section>
  );
}

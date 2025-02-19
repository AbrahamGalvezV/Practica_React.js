import "./App.css";
import { TwitterCard } from "./TwitterCard";

export function App() {
  return (
    <section className="App">
      <TwitterCard
        userName="Abraham.G.V"
        name="Abraham Gálvez Vives"
        isFollowing={false}
      />
      <TwitterCard
        userName="Abraham.G.V"
        name="Abraham Gálvez Vives"
        isFollowing={true}
      />
    </section>
  );
}

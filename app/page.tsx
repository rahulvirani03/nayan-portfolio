import { ArtWall } from "./components/NewArtGallery";
import { NewContactUs } from "./components/NewContactUs";
import NewHero from "./components/NewHero";
import NewProjects from "./components/NewProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NewHero />
      <NewProjects />
      <ArtWall />
      <NewContactUs />
    </main>
  );
}

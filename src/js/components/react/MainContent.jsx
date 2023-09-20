import { EventCard } from "./EventCard"
const MainContent = () => {
  return (
    <main id="main-gallery" className="main-gallery main-container">
      <EventCard title="Mi titulo" imagen="" />
      <EventCard />
      <EventCard />
      <EventCard />
    </main>
  )
}

export { MainContent}
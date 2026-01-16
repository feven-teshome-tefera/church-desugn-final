import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Morning Worship Service",
      date: "Every Sunday",
      time: "10:00 AM - 11:30 AM",
      location: "Main Sanctuary",
      description: "Join us for worship, teaching, and fellowship. All are welcome.",
      category: "Worship",
    },
    {
      id: 2,
      title: "Sunday Evening Service",
      date: "Every Sunday",
      time: "5:30 PM - 6:30 PM",
      location: "Fellowship Hall",
      description: "A more intimate gathering focused on prayer and reflection.",
      category: "Worship",
    },
    {
      id: 3,
      title: "Wednesday Night Prayer Meeting",
      date: "Every Wednesday",
      time: "6:30 PM - 7:30 PM",
      location: "Prayer Room",
      description: "Come together to intercede for our church, community, and world.",
      category: "Prayer",
    },
    {
      id: 4,
      title: "Youth Group Meeting",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Youth Center",
      description: "Games, Bible study, and fellowship for students in grades 9-12.",
      category: "Youth",
    },
    {
      id: 5,
      title: "Community Food Drive",
      date: "Third Saturday of each month",
      time: "9:00 AM - 12:00 PM",
      location: "Church Parking Lot",
      description: "Help us distribute food to families in need in our community.",
      category: "Outreach",
    },
    {
      id: 6,
      title: "Mission Conference",
      date: "March 1-3, 2025",
      time: "All Day",
      location: "Main Sanctuary",
      description: "Three days of worship, teaching, and vision-casting for God's global work.",
      category: "Special Event",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Upcoming Events</h1>
            <p className="text-xl mt-6 opacity-95">Join us for worship, fellowship, and service</p>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-border rounded-lg p-8 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <span className="inline-block bg-primary-gradient text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {event.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="mt-6 text-primary font-semibold hover:text-primary/80 transition">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Visit Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Service Times</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li>
                    <strong>Sunday:</strong> 10:00 AM & 5:30 PM
                  </li>
                  <li>
                    <strong>Wednesday:</strong> 6:30 PM
                  </li>
                  <li>
                    <strong>Friday:</strong> 7:00 PM
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Address</h3>
                <p className="text-foreground/70">
                  123 Faith Street
                  <br />
                  Community City, ST 12345
                  <br />
                  (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

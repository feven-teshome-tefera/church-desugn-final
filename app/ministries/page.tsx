import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/dist/client/link"

export default function MinistriesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Ministries</h1>
            <p className="text-xl mt-6 opacity-95">Discovering your place in God's work</p>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Worship Ministry",
                  description:
                    "Our worship team leads our congregation in praising God through music, creating an atmosphere where people can encounter the presence of the Holy Spirit and deepen their connection with God.",
                  details:
                    "We offer multiple worship styles and participate in special services throughout the year. All musicians and singers are welcome to join us.",
                  },
                {
                  title: "Youth Ministry",
                  description:
                    "Empowering young people to grow in their faith, build lasting friendships, and discover God's purpose for their lives.",
                  details:
                    "We provide youth gatherings, Bible studies, community service projects, and spiritual mentorship for ages 13-18.",
                },
                {
                  title: "Community Outreach",
                  description:
                    "Extending Christ's love to our neighborhood through practical service, compassion, and meeting the needs of those around us.",
                  details:
                    "From food drives to community events, we actively serve our city. Join us in making a tangible difference in the lives of others.",
                },
                {
                  title: "Discipleship & Small Groups",
                  description:
                    "Creating spaces for spiritual growth, biblical study, and meaningful Christian community through intentional group gatherings.",
                  details:
                    "Our small groups meet throughout the week to study Scripture, pray together, and support one another in living out their faith.",
                },
                {
                  title: "Children's Ministry",
                  description:
                    "Nurturing the spiritual foundation of young children through age-appropriate teaching, worship, and care.",
                  details:
                    "We provide a safe, loving environment where children learn about Jesus and develop a lifelong faith. Childcare is available during all services.",
                },
                {
                  title: "Missions & Outreach",
                  description:
                    "Supporting global missions and local community needs, partnering with organizations that advance God's kingdom worldwide.",
                  details:
                    "We participate in mission trips, support missionaries, and collaborate with local nonprofits to address systemic issues and spread the Gospel.",
                },
              ].map((ministry) => (
                // <div className="bg-black">
                <div key={ministry.title} className="border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">{ministry.title}</h3>
                  <p className="text-foreground/80 mb-6">{ministry.description}</p>
                  <p className="text-foreground/70 mb-4 text-sm">{ministry.details}</p>
                  <button className="cursor-pointer text-primary font-semibold hover:text-primary/80 transition">
                    <a href="/ministries_get_involved">Get Involved →</a>
                  </button>
                </div>
                // </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Find Your Purpose</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Everyone has spiritual gifts and a role to play in God's kingdom. We'd love to help you discover where you
              can serve and grow.
            </p>
            {/* <button className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Connect with Us
            </button> */}
              <Link
                  href="/contact"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
                >
                  Connect with us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

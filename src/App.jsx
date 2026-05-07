export default function PortfolioHomepage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              Web Design • Marketing Operations • Automation
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Catherine Bornemann
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Web Designer and Digital Marketing Professional with experience in
              front-end development, marketing automation, analytics, email
              strategy, UX/UI optimization, and conversion-focused digital
              experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-black text-white font-medium shadow-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="mailto:kelowna@gmail.com"
                className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Core Skills</h2>

              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "HTML5 / CSS3",
                  "JavaScript",
                  "React / Vite",
                  "WordPress",
                  "Google Analytics",
                  "GitHub",
                  "SEO Optimization",
                  "UX/UI Design",
                  "Email Automation",
                  "Klaviyo",
                  "A/B Testing",
                  "Figma / Adobe",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-100 rounded-xl px-4 py-3"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">About</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I specialize in building digital experiences that combine web
            design, marketing strategy, analytics, and automation. My
            background includes web production, conversion optimization,
            lifecycle marketing, CMS management, SEO, and front-end
            development across hospitality, e-commerce, nonprofit, and media
            organizations.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3">Featured Projects</h2>
            <p className="text-gray-600">
              Selected projects demonstrating web design, marketing automation,
              analytics, and UX optimization.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:-translate-y-1 transition">
            <div className="h-52 bg-gray-200" />

            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Marketing Analytics Automation
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Built an automated reporting system using GitHub Actions,
                Google Analytics API, and email automation workflows to deliver
                scheduled marketing performance reports.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "GitHub Actions",
                  "Google Analytics",
                  "Node.js",
                  "Automation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-2 rounded-full bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="font-medium underline underline-offset-4"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="font-medium underline underline-offset-4"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:-translate-y-1 transition">
            <div className="h-52 bg-gray-200" />

            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Hospitality Booking & Marketing Platform
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Developed and optimized a hospitality booking and marketing
                ecosystem integrating SEO, email automation, analytics, and
                conversion-focused user journeys.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "SEO",
                  "Klaviyo",
                  "UX/UI",
                  "Conversion Optimization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-2 rounded-full bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="font-medium underline underline-offset-4"
                >
                  Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Experience Highlights</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold">
                Marketing Web Manager — Bread Bandits
              </h3>
              <p className="text-gray-500 mb-3">2023 – Present</p>
              <p className="text-gray-700 leading-relaxed">
                Redeveloped and maintained a wholesale ordering portal while
                supporting loyalty programs, marketing email workflows, and
                customer engagement initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Marketing Manager — Prescott House ADK
              </h3>
              <p className="text-gray-500 mb-3">2017 – 2024</p>
              <p className="text-gray-700 leading-relaxed">
                Built and scaled digital marketing systems supporting booking,
                SEO, paid advertising, email automation, and website
                optimization for a growing hospitality platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Great
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Interested in web design, marketing operations, analytics,
          automation, or digital strategy collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kelowna@gmail.com"
            className="px-6 py-3 rounded-2xl bg-black text-white shadow-lg hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

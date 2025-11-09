import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  // 👇 Only this line changed: now starts in dark mode
  const [darkMode, setDarkMode] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const sections = [
    {
      id: 1,
      title: "Hariom Tavar — Full-Stack Developer",
      subtitle:
        "🎓 B.Tech Student || Full Stack Developer 💻 || C++, Java, DSA || JavaScript, React.js, MySQL || 🚀 Learning, Building, Growing",
      cta: ["Social Media", "Personal Details"],
    },
    {
      id: 2,
      title: "Core Skills",
      columns: [
        {
          heading: "Front-End Development",
          body: "React.js, Tailwind CSS, responsive design, and UI animation.",
        },
        {
          heading: "Back-End & Databases",
          body: "Node.js, Express, and MySQL for scalable applications.",
        },
        {
          heading: "Problem Solving",
          body: "Strong foundation in Data Structures and Algorithms using C++ and Java.",
        },
      ],
    },
    {
      id: 3,
      title: "Technical Stack",
      items: [
        { label: "Languages", value: "C++, Java, JavaScript" },
        { label: "Frameworks", value: "React, Next.js, Express" },
        { label: "Tools", value: "VS Code, Git, Figma" },
        { label: "Database", value: "MySQL" },
      ],
    },
    {
      id: 4,
      title: "Education & Certification",
      cards: [
        {
          heading: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
          body: "B.Tech (Computer Science) — 2024–2028",
        },
        {
          heading: "MPBSE — PCM",
          body: "Higher Secondary Education (Physics, Chemistry, Math).",
        },
        {
          heading: "Enterprise Design Thinking",
          body: "IBM Certified Practitioner in Design Thinking.",
        },
        {
          heading: "AWS Well Architected Foundations",
          body: "AWS Certified Practitioner in Well Architected Foundations",
        },
      ],
    },
    {
      id: 5,
      title: "Let’s Build Something Together",
      paragraph:
        "I'm a Computer Science student with a deep passion for web & app development, tech, and problem-solving. I specialize in crafting innovative and scalable solutions, leveraging my expertise in Figma, Java, JavaScript, Tailwind CSS, Next.js, React, React Native, MySQL. Beyond coding, I thrive in team collaborations, brainstorming ideas, and turning concepts into reality. My mission is to build impactful solutions that drive change, not just work a job.",
      contact: [],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-[#51738c]"
      } overflow-x-hidden relative`}
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg shadow text-white hover:shadow-glow transition"
          style={{ backgroundColor: "#51738c" }}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* 🌌 Animated Background Glow */}
      <motion.div
        className="fixed inset-0 overflow-hidden -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-r from-[#51738c] to-blue-400 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 60, -40, 0], y: [0, 30, -50, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, -50, 40, 0], y: [0, -40, 60, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-32 relative z-10">
        {sections.map((s) => (
          <motion.section
            key={s.id}
            className="scroll-mt-20 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl bg-gradient-to-r from-[#51738c]/40 to-blue-400/40 opacity-0"
              whileInView={{ opacity: [0, 0.4, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            ></motion.div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center relative z-10">
              {s.title}
            </h1>

            {s.subtitle && (
              <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-6 relative z-10">
                {s.subtitle}
              </p>
            )}

            {s.cta && (
              <div className="flex justify-center gap-4 mb-10 relative z-10">
                {s.cta.map((c) => (
                  <motion.button
                    key={c}
                    whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(81,115,140,0.6)" }}
                    onClick={() =>
                      c === "Social Media"
                        ? setActiveCard("social")
                        : setActiveCard("personal")
                    }
                    className="px-6 py-3 rounded-lg shadow text-white backdrop-blur-md bg-[#51738c]/90 hover:bg-[#51738c] transition-all"
                  >
                    {c}
                  </motion.button>
                ))}
              </div>
            )}

            {s.columns && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {s.columns.map((col) => (
                  <motion.div
                    key={col.heading}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(81,115,140,0.6)" }}
                    className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl shadow transition-all border border-white/10"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#51738c] dark:text-white">
                      {col.heading}
                    </h3>
                    <p className="text-[#51738c] dark:text-gray-200">
                      {col.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {s.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {s.items.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(81,115,140,0.5)" }}
                    className="flex justify-between bg-white/20 dark:bg-gray-800/40 backdrop-blur-md rounded-lg p-4 shadow border border-white/10 transition-all"
                  >
                    <span className="font-medium text-[#51738c] dark:text-white">
                      {item.label}
                    </span>
                    <span className="italic text-[#51738c] dark:text-gray-300">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {s.cards && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {s.cards.map((c, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(81,115,140,0.6)" }}
                    className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg p-6 rounded-xl shadow border border-white/10 transition-all"
                  >
                    <h4 className="text-lg font-semibold mb-2 text-[#51738c] dark:text-white">
                      {c.heading}
                    </h4>
                    <p className="text-sm text-[#51738c] dark:text-gray-300">
                      {c.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {s.paragraph && (
              <p className="mt-6 text-center max-w-3xl mx-auto text-lg italic relative z-10">
                {s.paragraph}
              </p>
            )}

            {s.contact && (
              <div className="mt-6 flex flex-col items-center gap-2 relative z-10">
                {s.contact.map((c, idx) => (
                  <span key={idx} className="text-md italic">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>

      {activeCard && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveCard(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl shadow-2xl text-center cursor-default max-w-md w-full relative"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#51738c]/30 to-blue-400/30 blur-2xl"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 4 }}
            ></motion.div>

            {activeCard === "social" ? (
              <>
                <h2 className="text-2xl font-bold mb-4 relative z-10" style={{ color: "#51738c" }}>
                  🌍 Social Media
                </h2>
                <div className="space-y-2 relative z-10">
                  <a href="https://linkedin.com/in/hariomtavar" target="_blank" className="block hover:underline">
                    LinkedIn
                  </a>
                  <a href="https://github.com/hariomtavar" target="_blank" className="block hover:underline">
                    GitHub
                  </a>
                  <a href="https://twitter.com/hariomtavar" target="_blank" className="block hover:underline">
                    Twitter
                  </a>
                  <a href="https://instagram.com/hariomtavar39_" target="_blank" className="block hover:underline">
                    Instagram
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4 relative z-10" style={{ color: "#51738c" }}>
                  📞 Personal Details
                </h2>
                <p className="mb-2">📍 Indore, Madhya Pradesh</p>
                <p className="mb-2">📞 +91 98765 43210</p>
                <p className="mb-2">✉️ hariomtavar04@gmail.com</p>
                <p>🎓 B.Tech (CSE) — Shri Vaishnav Vidyapeeth Vishwavidyalaya</p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}

      <footer className="py-10 text-center text-sm opacity-70 relative z-10">
        © {new Date().getFullYear()} Hariom Tavar. All rights reserved.
      </footer>
    </div>
  );
}

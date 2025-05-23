import { Pizza } from "lucide-react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";
import { SummaryViewer } from "../summaries/summary-viewer";

const DEMO_SUMMARY = `
• 📘 JavaScript Cheat Sheet Summary 🚀💻
• JavaScript is a versatile, high-level programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications.
• 🌐 JavaScript is a core technology of the World Wide Web, alongside HTML and CSS.
• 🎯 JavaScript is the core scripting language for web development—used for interactive UIs, server-side logic, and modern app frameworks.  
• 📌 This cheat sheet covers key syntax, concepts, and pro tips for devs at any level.

# Document Details
• 📄 Type: Developer Reference Guide  
• 👥 For: Web developers, JS learners, frontend/backend engineers

# Key Highlights
• 🚀 Variables: Use \`let\`, \`const\`, and avoid \`var\` for predictable scoping  
• ⚙️ Functions: Master arrow functions and callbacks  
• 🔄 Loops: \`for\`, \`while\`, and array methods like \`.map()\`, \`.filter()\`, \`.reduce()\`  
• 📦 Objects & Arrays: Destructuring, spread/rest (\`...\`), and shorthand syntax  
• 📡 Async: Promises, async/await, and fetch API for handling requests

# Why It Matters
• 💡 JavaScript powers 98% of the web and is essential for building responsive, dynamic user experiences.  
• 🚀 A strong grasp boosts productivity and opens doors to modern frameworks like React, Vue, and Node.js.

# Main Points
• 🎯 Main insight: JS is versatile—works on client & server (with Node)  
• 💪 Key strength: Massive ecosystem, flexibility, rapid development  
• 🔥 Important outcome: Mastery enables full-stack development

# Pro Tips
• ⭐ Use \`const\` by default, \`let\` when reassignment is needed  
• 💎 Avoid callback hell—use async/await for cleaner async code  
• 🌟 Use modern ES6+ features (like template literals, arrow functions)

# Key Terms to Know
• 📚 Closure: A function "remembers" its lexical scope even when run outside it  
• 🔍 Hoisting: Variable/function declarations are moved to the top of their scope  
• ⚙️ Event Loop: Handles async operations in JS’s single-threaded model

# Bottom Line
• 💫 JavaScript is the language of the web. Write it clearly, learn it deeply, and build amazing things with it.
`;



export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem]
        -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%,74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 background-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
            >
              Watch how Easy-pdf transforms{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent ">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </MotionH3>
          </div>
        </div>

          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary Viewer */}
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SummaryViewer summary={DEMO_SUMMARY} />
            </MotionDiv>
          </div>
      </div>
    </section>
  );
}
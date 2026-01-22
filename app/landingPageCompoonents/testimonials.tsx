import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    title: "It’s just incredible!",
    message:
      "It’s just 1 month since I’m using the platform to manage academic resources, but the result is very satisfying! Materials are more organized than before.",
    name: "Jimmy Bartney",
    role: "Course Rep, 400L",
    avatar: "/avatars/user1.jpg",
  },
  {
    title: "Satisfied User Here!",
    message:
      "Never thought managing lecture notes and assignments could be this easy. Been using this system for 3 months and it keeps getting better.",
    name: "Natasha Romanoff",
    role: "Student, Computer Engineering",
    avatar: "/avatars/user2.jpg",
  },
  {
    title: "No doubt, this is the best!",
    message:
      "Didn’t know a platform could simplify access to academic resources like this. Highly recommended for both students and lecturers.",
    name: "Moritika Kazuki",
    role: "Lecturer",
    avatar: "/avatars/user3.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 px-4">
        <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">
          What they say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Users’ Kind Words
        </h2>
        <p className="text-gray-400">
          Here are some testimonials from users after using the platform to
          manage academic resources efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:scale-[1.02] transition"
          >
            <h3 className="text-lg font-semibold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.message}
            </p>

            <div className="border-t border-white/10 pt-4 flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-white font-medium text-sm">{item.name}</p>
                <p className="text-gray-400 text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons (optional) */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button className="w-10 h-10 rounded-full text-white border border-white/30 hover:bg-purple-600 flex items-center justify-center duration-200 hover:scale-110 transition-all">
          <ChevronLeft />
        </button>
        <button className="w-10 h-10 rounded-full text-white border border-white/30 hover:bg-purple-600 flex items-center justify-center duration-200 hover:scale-110 transition-all">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

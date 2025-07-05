import { Button } from "@/components/ui/button";

const categories = [
  {
    label: "Adventure",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "/categories/adventure",
  },
  {
    label: "Poetry",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "/categories/poetry",
  },
  {
    label: "Cookbooks",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    link: "/categories/cookbooks",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full py-16 bg-[#faf9f6] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-serif">
        Choose Your Book!
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-10">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={cat.link}
            className="relative group w-64 h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <span className="absolute left-6 bottom-6 text-white text-xl font-semibold drop-shadow-lg font-serif">
              {cat.label}
            </span>
          </a>
        ))}
      </div>
      <Button
        asChild
        size="lg"
        className="bg-black text-white px-8 py-3 font-semibold tracking-wide rounded shadow"
      >
        <a href="/">DISCOVER MORE</a>
      </Button>
    </section>
  );
}

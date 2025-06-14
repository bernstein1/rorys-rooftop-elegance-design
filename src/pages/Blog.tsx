
import Navigation from "@/components/Navigation";
import { CalendarDays } from "lucide-react";

const POSTS = [
  {
    title: "Seasonal Cocktails to Welcome Summer",
    date: "June 10, 2024",
    image: "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
    excerpt: "Fresh flavors, rooftop sunsets, and the inspiration behind our new signature mixes for this season.",
    author: "Jamie Chen",
  },
  {
    title: "NYC Rooftop Dining: Behind the Scenes",
    date: "May 28, 2024",
    image: "/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png",
    excerpt: "Peek into a day-in-the-life at Rory's Rooftop, where hospitality meets city energy.",
    author: "Rory Adams",
  },
];

const Blog = () => (
  <div className="min-h-screen pt-0 pb-16" style={{ backgroundColor: "hsl(46, 46%, 95%)" }}>
    <Navigation />
    <section className="max-w-5xl mx-auto px-4 pt-32">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-10 text-center">
        Rory's Rooftop Blog
      </h1>
      <p className="text-lg md:text-xl mb-12 text-muted-foreground text-center max-w-2xl mx-auto">
        Stories, culture, and cocktail inspiration straight from the rooftop.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {POSTS.map((post, i) => (
          <div
            key={i}
            style={{ backgroundColor: "hsl(346, 56%, 86%)" }} // pink
            className="rounded-2xl shadow-lg hover-scale transition-all flex flex-col"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-6 flex flex-col h-full">
              <span className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <CalendarDays className="w-4 h-4" /> {post.date}
              </span>
              <h2 className="text-2xl font-semibold text-primary mb-2">{post.title}</h2>
              <p className="text-base text-foreground/80 mb-4 flex-grow">{post.excerpt}</p>
              <span className="inline-block text-sm text-muted-foreground mt-auto">by {post.author}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-base">
          More stories coming soon. <a href="#contact" className="underline text-primary">Contact us</a> if you’d like to contribute!
        </p>
      </div>
    </section>
  </div>
);

export default Blog;

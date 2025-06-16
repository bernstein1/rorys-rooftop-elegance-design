
import Navigation from "@/components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

const POSTS = [
  {
    slug: "seasonal-cocktails-to-welcome-summer",
    title: "Seasonal Cocktails to Welcome Summer",
    date: "June 10, 2024",
    image: "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
    author: "Jamie Chen",
    content: `
      <p>
        Welcome to summer on Rory's Rooftop! We're celebrating with a range of cocktails that capture the spirit of the city and the sunset.
        <br /><br />
        Expect juicy watermelon spritzers, spicy mango slushes, and inventive takes on timeless classics—each designed for hot nights with friends.
        <br /><br />
        Explore the rooftop soon and taste the freshness yourself!
      </p>
    `
  },
  {
    slug: "nyc-rooftop-dining-behind-the-scenes",
    title: "NYC Rooftop Dining: Behind the Scenes",
    date: "May 28, 2024",
    image: "/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png",
    author: "Rory Adams",
    content: `
      <p>
        Behind the buzz of every night at Rory's, there's a dedicated team keeping the magic real.
        <br /><br />
        From prepping the outdoor bar to testing new dishes in the kitchen, our crew's hustle starts before sunset and peaks with the music and laughter overhead.
        <br /><br />
        This is what makes the rooftop experience unlike any other in NYC.
      </p>
    `
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-background">
        <Navigation />
        <p className="text-xl font-bold text-destructive mt-40">Article not found.</p>
        <button
          className="mt-6 px-6 py-2 bg-primary text-white rounded-lg"
          onClick={() => navigate("/blog")}
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <Navigation />
      <section className="max-w-2xl mx-auto px-4 pt-36 animate-fade-in">
        <button
          className="flex items-center gap-1 text-primary mb-6 hover:underline"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </button>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-2xl mb-6 shadow" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-muted-foreground text-sm mb-4">
          <CalendarDays className="w-4 h-4" />
          <span>{post.date}</span>
          <span>•</span>
          <span>by {post.author}</span>
        </div>
        <div className="prose prose-lg prose-primary max-w-none text-foreground/90" dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
    </div>
  );
};

export default BlogPost;

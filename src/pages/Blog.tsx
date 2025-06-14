
import Navigation from "@/components/Navigation";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

const POSTS = [
  {
    slug: "seasonal-cocktails-to-welcome-summer",
    title: "Seasonal Cocktails to Welcome Summer",
    date: "June 10, 2024",
    image: "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
    excerpt: "Fresh flavors, rooftop sunsets, and the inspiration behind our new signature mixes for this season.",
    author: "Jamie Chen",
    content: `
      Welcome to summer on Rory's Rooftop! We're celebrating with a range of cocktails that capture the spirit of the city and the sunset.
      <br /><br />
      Expect juicy watermelon spritzers, spicy mango slushes, and inventive takes on timeless classics—each designed for hot nights with friends.
      <br /><br />
      Explore the rooftop soon and taste the freshness yourself!
    `
  },
  {
    slug: "nyc-rooftop-dining-behind-the-scenes",
    title: "NYC Rooftop Dining: Behind the Scenes",
    date: "May 28, 2024",
    image: "/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png",
    excerpt: "Peek into a day-in-the-life at Rory's Rooftop, where hospitality meets city energy.",
    author: "Rory Adams",
    content: `
      Behind the buzz of every night at Rory's, there's a dedicated team keeping the magic real.
      <br /><br />
      From prepping the outdoor bar to testing new dishes in the kitchen, our crew's hustle starts before sunset and peaks with the music and laughter overhead.
      <br /><br />
      This is what makes the rooftop experience unlike any other in NYC.
    `
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-0 pb-16" style={{ backgroundColor: "hsl(346, 56%, 86%)" }}>
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-10 text-center">
          Rory's Rooftop Blog
        </h1>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground text-center max-w-2xl mx-auto">
          Stories, culture, and cocktail inspiration straight from the rooftop.
        </p>
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{ align: "start", slidesToScroll: 1, dragFree: true }}
          >
            <CarouselPrevious />
            <CarouselContent className="gap-8">
              {POSTS.map((post, i) => (
                <CarouselItem
                  key={post.slug}
                  className="basis-11/12 md:basis-1/2 max-w-2xl"
                >
                  {/* Clickable Card */}
                  <button
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="w-full group rounded-2xl shadow-lg hover-scale transition-all flex flex-col items-stretch cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-primary/30 bg-[hsl(46,46%,95%)] border-2 border-transparent hover:border-primary/30"
                    aria-label={`Read full article: ${post.title}`}
                  >
                    <div className="overflow-hidden rounded-t-2xl">
                      <img src={post.image} alt={post.title} className="w-full h-64 md:h-56 object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col h-full rounded-b-2xl">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <CalendarDays className="w-4 h-4" /> {post.date}
                      </span>
                      <h2 className="text-2xl font-semibold text-primary mb-2 group-hover:underline">{post.title}</h2>
                      <p className="text-base text-foreground/80 mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="inline-block text-sm text-muted-foreground">by {post.author}</span>
                        <ArrowRight className="w-5 h-5 text-primary opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                      </div>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-base">
            More stories coming soon. <a href="#contact" className="underline text-primary">Contact us</a> if you’d like to contribute!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Blog;

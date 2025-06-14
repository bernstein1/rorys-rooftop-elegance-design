import Navigation from "@/components/Navigation";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

// Add more posts for horizontal scrolling
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
  // More demo posts
  {
    slug: "sundown-specials",
    title: "Sundown Specials",
    date: "May 20, 2024",
    image: "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png",
    excerpt: "New happy hour bites and off-menu drinks, available only at sunset.",
    author: "Alex Rivera",
    content: `
      Discover our favorite sunset traditions and after-work specials, only at Rory's Rooftop.
    `
  },
  {
    slug: "music-on-the-roof",
    title: "Music on the Roof: Local DJ Lineup",
    date: "May 14, 2024",
    image: "/lovable-uploads/6ec2b153-5a0d-4d69-aa6d-d931b2fb9079.png",
    excerpt: "Meet the artists setting the soundtrack for Friday nights all summer long.",
    author: "Priya Desai",
    content: `
      Our rooftop comes alive on weekends—here's who you'll catch in the DJ booth this month!
    `
  },
  {
    slug: "staff-picks",
    title: "Staff Picks: Favorite Menu Moments",
    date: "May 2, 2024",
    image: "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png",
    excerpt: "Behind-the-scenes on the staff's most-loved items (and why they're obsessed).",
    author: "Carmen Liu",
    content: `
      From spicy slush cocktails to late-night truffle fries, here's what our staff can't stop eating and drinking.
    `
  },
  {
    slug: "editorial-feature",
    title: "Editorial Feature: Rooftop Vibes",
    date: "Apr 20, 2024",
    image: "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
    excerpt: "A visitor's experience, in their own words.",
    author: "Guest Writer",
    content: `
      An outside look: read how a guest experienced the rooftop from day to night.
    `
  },
  // Repeat a few posts for extended scroll demo
  {
    slug: "late-night-menu",
    title: "Late Night Menu Revelations",
    date: "Apr 15, 2024",
    image: "/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png",
    excerpt: "Nothing hits like rooftop bites at midnight—here’s our secret menu.",
    author: "Jules Porter",
    content: `
      Hungry late? You need to see what's on our midnight board.
    `
  },
  {
    slug: "summer-movies-on-the-roof",
    title: "Summer Movies on the Roof",
    date: "Apr 2, 2024",
    image: "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png",
    excerpt: "Which cult classics will we screen this month? Preview the list.",
    author: "Rory Adams",
    content: `
      Rooftop movies are back! Here's your chance to vote for what you want to watch.
    `
  },
  {
    slug: "garden-on-the-roof",
    title: "Garden on the Roof: Urban Greens",
    date: "Mar 20, 2024",
    image: "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png",
    excerpt: "Did you know our herbs grow right above you?",
    author: "Jamie Chen",
    content: `
      See how our kitchen uses rooftop-grown greens in your favorite drinks and plates.
    `
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-0 pb-16" style={{ backgroundColor: "hsl(346, 56%, 86%)" }}>
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
          Rory's Rooftop Blog
        </h1>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
          Stories, culture, and cocktail inspiration straight from the rooftop.
        </p>
        {/* ScrollArea wraps the carousel and provides a nice horizontal scroll bar directly underneath */}
        <div className="relative">
          <ScrollArea className="w-full pb-4" type="scroll" scrollHideDelay={0}>
            <Carousel
              className="w-full"
              opts={{ align: "start", slidesToScroll: 1, dragFree: true }}
            >
              <CarouselPrevious />
              <CarouselContent className="gap-4 sm:gap-6">
                {POSTS.map((post, i) => (
                  <CarouselItem
                    key={post.slug}
                    className="max-w-xs sm:max-w-sm basis-4/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2"
                  >
                    {/* Clickable Card */}
                    <button
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="w-full group rounded-xl shadow-md hover-scale transition-all flex flex-col items-stretch cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-primary/30 bg-[hsl(46,46%,95%)] border border-border hover:border-primary/30 h-full min-h-[380px]"
                      aria-label={`Read full article: ${post.title}`}
                    >
                      <div className="overflow-hidden rounded-t-xl">
                        <img src={post.image} alt={post.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-4 flex flex-col h-full rounded-b-xl">
                        <span className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <CalendarDays className="w-4 h-4" /> {post.date}
                        </span>
                        <h2 className="text-lg font-semibold text-primary mb-1 group-hover:underline text-left">{post.title}</h2>
                        <p className="text-sm text-foreground/80 mb-2 flex-grow text-left">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="inline-block text-xs text-muted-foreground">by {post.author}</span>
                          <ArrowRight className="w-4 h-4 text-primary opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </ScrollArea>
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

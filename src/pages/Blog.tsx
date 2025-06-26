
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Rooftop Cocktails: Our Signature Creations",
    excerpt: "Discover the stories behind our most beloved cocktails and the inspiration that drives our mixology team.",
    date: "June 20, 2024",
    image: "/lovable-uploads/cocktail.png",
    slug: "rooftop-cocktails-signature-creations"
  },
  {
    id: 2,
    title: "NYC's Best Sunset Views: Why Rory's Takes the Crown",
    excerpt: "From the High Line to the Hudson River, explore what makes our rooftop the perfect spot to watch the city transform at golden hour.",
    date: "June 18, 2024",
    image: "/lovable-uploads/manhattan-sunset.png",
    slug: "nyc-best-sunset-views"
  },
  {
    id: 3,
    title: "Private Events Done Right: Planning Your Perfect Rooftop Celebration",
    excerpt: "Everything you need to know about hosting your next corporate event, birthday party, or wedding celebration with us.",
    date: "June 15, 2024",
    image: "/lovable-uploads/cheers.png",
    slug: "private-events-planning-guide"
  },
  {
    id: 4,
    title: "Seasonal Menu Updates: Summer's Fresh Flavors",
    excerpt: "Our culinary team shares the inspiration behind this season's menu additions and the local ingredients that make them special.",
    date: "June 12, 2024",
    image: "/lovable-uploads/meal.png",
    slug: "seasonal-menu-summer-flavors"
  }
];

export default function Blog() {
  return (
    <div id="main-content" className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Stories from the Rooftop
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Behind-the-scenes stories, cocktail inspirations, and everything that makes Rory's special.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80"
                  asChild
                >
                  <a href={`/blog/${post.slug}`} className="inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More stories coming soon. Follow us on{" "}
            <a 
              href="https://instagram.com/rorysrooftop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>{" "}
            for daily updates.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

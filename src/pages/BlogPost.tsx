
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sanitizeHtml } from "@/lib/sanitizer";

const blogPosts = {
  "rooftop-cocktails-signature-creations": {
    title: "The Art of Rooftop Cocktails: Our Signature Creations",
    date: "June 20, 2024",
    image: "/lovable-uploads/cocktail.png",
    content: `
      <p>At Rory's Rooftop Bar, every cocktail tells a story. High above the bustling streets of the Meatpacking District, our mixology team crafts drinks that capture the essence of New York City's energy and sophistication.</p>
      
      <h2>The Manhattan Sunset</h2>
      <p>Our signature Manhattan Sunset isn't just a drink—it's an experience. As the golden hour paints the Hudson River in brilliant hues, this bourbon-based cocktail mirrors the moment with its rich amber color and complex flavor profile.</p>
      
      <h2>Rooftop Mule: A Modern Classic</h2>
      <p>The Rooftop Mule puts our unique spin on the beloved Moscow Mule. Served in our custom copper mugs, this cocktail combines premium vodka with house-made ginger beer and a secret blend of herbs that captures the urban garden vibe of our rooftop setting.</p>
      
      <h2>Craft Meets Innovation</h2>
      <p>Our bartenders are artists, combining traditional techniques with modern innovation. Each cocktail is carefully balanced, using only the finest spirits and fresh, seasonal ingredients sourced from local purveyors.</p>
    `
  },
  "nyc-best-sunset-views": {
    title: "NYC's Best Sunset Views: Why Rory's Takes the Crown",
    date: "June 18, 2024",
    image: "/lovable-uploads/manhattan-sunset.png",
    content: `
      <p>In a city filled with incredible vantage points, Rory's Rooftop Bar offers something truly special. Our elevated position in the Meatpacking District provides unobstructed views that showcase New York City at its most beautiful.</p>
      
      <h2>The Perfect Vantage Point</h2>
      <p>From our rooftop, guests can see the Hudson River stretching toward New Jersey, the iconic Manhattan skyline, and the architectural marvels that make this city unique. As the sun sets behind the buildings, the entire sky becomes a canvas of colors.</p>
      
      <h2>Golden Hour Magic</h2>
      <p>There's something magical about watching the transition from day to night from our rooftop. The city lights begin to twinkle as the natural light fades, creating a moment of perfect harmony between urban life and natural beauty.</p>
    `
  },
  "private-events-planning-guide": {
    title: "Private Events Done Right: Planning Your Perfect Rooftop Celebration",
    date: "June 15, 2024",
    image: "/lovable-uploads/cheers.png",
    content: `
      <p>Planning a private event at Rory's Rooftop Bar is about creating unforgettable moments against the backdrop of Manhattan's stunning skyline. Our events team specializes in bringing your vision to life.</p>
      
      <h2>Choosing the Right Package</h2>
      <p>We offer several event packages to suit different needs and group sizes. From intimate celebrations to full venue buyouts, our flexible spaces can accommodate your unique requirements.</p>
      
      <h2>Menu Customization</h2>
      <p>Our culinary team works with you to create a custom menu that reflects your tastes and dietary preferences. Whether you prefer cocktail-style appetizers or a full dinner service, we'll craft the perfect dining experience.</p>
      
      <h2>Timing is Everything</h2>
      <p>The magic of a rooftop event often lies in the timing. We'll help you plan your event to take advantage of the best lighting, weather conditions, and atmospheric moments that make Rory's special.</p>
    `
  },
  "seasonal-menu-summer-flavors": {
    title: "Seasonal Menu Updates: Summer's Fresh Flavors",
    date: "June 12, 2024",
    image: "/lovable-uploads/meal.png",
    content: `
      <p>Summer at Rory's brings fresh inspiration to our menu. Our culinary team has crafted new dishes and cocktails that celebrate the season's bounty while maintaining the sophisticated edge that defines our rooftop experience.</p>
      
      <h2>Fresh Seasonal Ingredients</h2>
      <p>We partner with local farmers and suppliers to bring the freshest seasonal ingredients to our menu. Summer tomatoes, fresh herbs, and crisp vegetables form the foundation of our new dishes.</p>
      
      <h2>Light and Refreshing</h2>
      <p>Our summer menu focuses on lighter fare that complements the warm weather and outdoor setting. Think fresh salads, grilled seafood, and refreshing cocktails that keep you cool while you enjoy the rooftop atmosphere.</p>
      
      <h2>Cocktail Innovation</h2>
      <p>Our bartenders have been experimenting with seasonal fruits and herbs to create cocktails that capture the essence of summer in New York City. These limited-time offerings showcase the creativity and skill of our mixology team.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" className="max-w-4xl mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/blog">Back to Blog</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <Button variant="ghost" className="mb-6" asChild>
          <a href="/blog" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </a>
        </Button>

        <article>
          <header className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
            />
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
          </header>

          <Card className="p-8">
            <div 
              className="prose prose-lg max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ 
                __html: sanitizeHtml(post.content) 
              }}
            />
          </Card>
        </article>

        <div className="text-center mt-12">
          <Button asChild>
            <a href="/blog">Read More Stories</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

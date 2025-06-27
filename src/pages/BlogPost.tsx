
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div id="main-content" className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Blog Post: {slug}</h1>
          <p className="text-muted-foreground">Blog post content coming soon...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;

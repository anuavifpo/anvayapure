import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Blog = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const categories = [...new Set(blogPosts.map(post => post.category))];
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Anvaya Pure Blog",
    "description": "Expert articles on A2 ghee benefits, Ayurveda, traditional cooking, and natural wellness",
    "url": "https://anvayapure.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Anvaya Pure"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - Ghee Benefits, Ayurveda & Traditional Cooking"
        description="Discover expert articles on A2 ghee health benefits, Ayurvedic wisdom, cold-pressed oil benefits, and traditional Indian cooking tips from Anvaya Pure."
        canonical="/blog"
        keywords="ghee benefits blog, Ayurveda articles, traditional cooking, cold pressed oil, Indian food blog, healthy cooking tips"
        jsonLd={jsonLd}
      />
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-wide px-4">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li className="text-foreground">Blog</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              The Anvaya Journal
            </h1>
            <p className="text-lg text-muted-foreground">
              Wisdom from our kitchen to yours. Explore articles on traditional cooking, 
              Ayurvedic wellness, and the art of pure, natural food.
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 border-b border-border">
        <div className="container-wide px-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium">
              All Posts
            </span>
            {categories.map(category => (
              <span 
                key={category}
                className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium text-muted-foreground cursor-pointer transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container-wide px-4">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="group grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredPost.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} min read
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-wide px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group block bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/10] bg-muted overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <div className="container-narrow px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Get Wellness Tips in Your Inbox
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Subscribe for monthly articles on traditional cooking, Ayurvedic wellness, 
            and exclusive recipes.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
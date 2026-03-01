import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const prefersReducedMotion = useReducedMotion();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Anvaya Pure",
      "logo": {
        "@type": "ImageObject",
        "url": "https://anvayapure.com/logo.svg"
      }
    },
    "datePublished": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://anvayapure.com/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        type="article"
        keywords={post.keywords}
        jsonLd={articleJsonLd}
      />
      <Header />

      {/* Breadcrumb */}
      <nav className="container-wide px-4 py-4 border-b border-border">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground truncate max-w-[200px]">{post.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <article>
        <header className="py-12 md:py-20">
          <div className="container-narrow px-4">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                {post.category}
              </span>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <span>By {post.author}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container-wide px-4 mb-12">
          <div className="aspect-[21/9] bg-muted rounded-2xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container-narrow px-4 pb-16 md:pb-24">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none 
              prose-headings:font-serif prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:mb-2
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
              prose-table:text-sm
              prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-medium
              prose-td:p-3 prose-td:border-b prose-td:border-border"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/## /g, '</p><h2>').replace(/### /g, '</p><h3>').replace(/#### /g, '</p><h4>').replace(/<br \/><br \/>/g, '</p><p>') }}
          />
        </div>

        {/* Author Box */}
        <div className="container-narrow px-4 pb-16">
          <div className="bg-muted/50 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">{post.author}</h3>
                <p className="text-sm text-muted-foreground">
                  Contributing writer at Anvaya Pure, sharing wisdom on traditional food, 
                  Ayurveda, and natural wellness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container-narrow px-4 pb-16 md:pb-24">
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Experience Pure, Traditional Quality
            </h2>
            <p className="text-background/70 mb-8 max-w-lg mx-auto">
              Try our A2 Bilona Ghee and Cold-Pressed Oils, made exactly as described in this article.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ghee"
                className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
              >
                Shop Ghee
              </Link>
              <Link 
                to="/oil"
                className="inline-flex items-center justify-center px-6 py-3 border border-background/30 text-background rounded-full font-medium hover:bg-background/10 transition-colors"
              >
                Shop Oils
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-wide px-4">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">
              You Might Also Like
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    className="group block bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[16/10] bg-muted overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {relatedPost.readTime} min read
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
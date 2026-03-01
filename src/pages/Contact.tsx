import { Link } from "react-router-dom";
import { ChevronRight, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";

const Contact = () => {
  const generalFaqs = faqs.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <nav className="container-wide py-4 border-b border-border">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground">Contact</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <span className="inline-block text-caption uppercase tracking-widest text-primary mb-4">
            Get in Touch
          </span>
          <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products, process, or anything else? 
            We're here to help. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:hello@anvayapure.com"
              className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-2">For general inquiries</p>
                <p className="text-sm text-primary">hello@anvayapure.com</p>
              </div>
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-2">Mon-Sat, 10am-6pm IST</p>
                <p className="text-sm text-primary">+91 98765 43210</p>
              </div>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-2">Quick responses</p>
                <p className="text-sm text-primary">Chat with us</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-background p-8 md:p-10 rounded-xl shadow-sm">
              <h2 className="font-serif text-heading text-foreground mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Priya"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Sharma"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="priya@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="bulk">Bulk Orders</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">Visit Us</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">AnvayaPure Foods Pvt. Ltd.</p>
                    <p className="text-muted-foreground">
                      123, Farm Fresh Complex<br />
                      Satellite Road, Ahmedabad<br />
                      Gujarat 380015, India
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">Business Hours</h3>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p className="mb-2">
                      <span className="text-foreground font-medium">Monday - Friday:</span><br />
                      10:00 AM - 6:00 PM IST
                    </p>
                    <p className="mb-2">
                      <span className="text-foreground font-medium">Saturday:</span><br />
                      10:00 AM - 2:00 PM IST
                    </p>
                    <p>
                      <span className="text-foreground font-medium">Sunday:</span><br />
                      Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sage/10 p-6 rounded-xl">
                <h3 className="font-serif text-xl text-foreground mb-3">Bulk Orders</h3>
                <p className="text-muted-foreground mb-4">
                  Looking to order for your restaurant, hotel, or retail store? 
                  We offer special pricing for bulk orders.
                </p>
                <a href="mailto:bulk@anvayapure.com" className="text-primary font-medium hover:underline">
                  bulk@anvayapure.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-narrow">
          <FAQAccordion faqs={generalFaqs} title="Frequently Asked Questions" />
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Can't find what you're looking for?{" "}
              <a href="mailto:hello@anvayapure.com" className="text-primary hover:underline">
                Email us directly
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

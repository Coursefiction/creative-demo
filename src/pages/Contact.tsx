
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-creative-pink via-creative-purple to-creative-blue">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Let's Create Together
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your vision into reality? We'd love to hear about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-serif font-bold mb-6 gradient-text">
                Start Your Project
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your creative needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-creative-blue focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="branding">Brand Identity</option>
                    <option value="web-design">Web Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="print-design">Print Design</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="consulting">Creative Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full creative-gradient hover-glow text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-serif font-bold mb-6 gradient-text">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help bring your creative vision to life. Reach out through any of these channels.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Email Us",
                    content: "hello@coursefiction.com",
                    description: "For general inquiries and project discussions"
                  },
                  {
                    title: "Call Us",
                    content: "+1 (555) 123-4567",
                    description: "Monday to Friday, 9AM - 6PM EST"
                  },
                  {
                    title: "Visit Us",
                    content: "123 Creative Street, Design District, NY 10001",
                    description: "Schedule an appointment for in-person meetings"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="hover-glow transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{contact.title}</CardTitle>
                      <CardDescription className="text-creative-blue font-semibold">
                        {contact.content}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{contact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="creative-gradient text-white">
                <CardHeader>
                  <CardTitle>Quick Response Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    We pride ourselves on quick response times. You'll hear back from us within 24 hours, guaranteed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our creative process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. A simple logo design might take 1-2 weeks, while a complete brand identity and website could take 6-8 weeks."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We have flexible packages to suit different budgets and needs."
              },
              {
                question: "What's included in your brand identity service?",
                answer: "Our brand identity service includes logo design, color palette, typography selection, brand guidelines, business card design, and letterhead templates."
              },
              {
                question: "Can you help with ongoing creative support?",
                answer: "Yes! We offer retainer packages for ongoing creative support, including social media graphics, marketing materials, and brand maintenance."
              }
            ].map((faq, index) => (
              <Card key={index} className="animate-on-scroll hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

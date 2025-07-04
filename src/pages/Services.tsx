
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid, Star, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
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

  const services = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Brand Identity",
      description: "Complete brand development including logo design, color palettes, typography, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterheads"],
      color: "from-creative-blue to-creative-purple"
    },
    {
      icon: <LayoutGrid className="h-8 w-8" />,
      title: "Web Design",
      description: "Modern, responsive websites that engage users and drive conversions across all devices.",
      features: ["Responsive Design", "User Experience", "E-commerce", "CMS Integration"],
      color: "from-creative-purple to-creative-pink"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Strategic digital campaigns that amplify your brand and reach your target audience effectively.",
      features: ["Social Media", "Content Creation", "SEO Optimization", "Analytics"],
      color: "from-creative-orange to-creative-pink"
    },
    {
      icon: <LayoutGrid className="h-8 w-8" />,
      title: "Print Design",
      description: "High-quality print materials that make a lasting impression in the physical world.",
      features: ["Brochures", "Posters", "Packaging", "Exhibition Stands"],
      color: "from-creative-cyan to-creative-blue"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      color: "from-creative-pink to-creative-purple"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Creative Consulting",
      description: "Strategic creative guidance to help your brand stand out in competitive markets.",
      features: ["Brand Strategy", "Creative Direction", "Market Analysis", "Trend Forecasting"],
      color: "from-creative-blue to-creative-cyan"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-creative-purple via-creative-pink to-creative-orange">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Creative Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive creative solutions tailored to elevate your brand and engage your audience
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide end-to-end creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full hover-glow group cursor-pointer transition-all duration-300 hover:scale-105 glass-effect border-0">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <ChevronRight className="h-4 w-4 text-creative-blue mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Our Creative Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into understanding your brand, goals, and target audience."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive creative strategy tailored to your objectives."
              },
              {
                step: "03",
                title: "Design",
                description: "Our team brings your vision to life with innovative design solutions."
              },
              {
                step: "04",
                title: "Delivery",
                description: "We ensure flawless execution and provide ongoing support for your project."
              }
            ].map((process, index) => (
              <div key={index} className="animate-on-scroll text-center" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-creative-blue to-creative-purple rounded-full flex items-center justify-center text-white font-bold text-xl hover-glow">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-creative-blue to-creative-purple opacity-30"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your creative needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$999",
                description: "Perfect for small businesses and startups",
                features: ["Logo Design", "Business Cards", "Basic Brand Guidelines", "2 Revisions"],
                color: "from-creative-blue to-creative-cyan",
                popular: false
              },
              {
                name: "Professional",
                price: "$2,999",
                description: "Comprehensive solution for growing businesses",
                features: ["Complete Brand Identity", "Website Design", "Marketing Materials", "Unlimited Revisions", "3 Months Support"],
                color: "from-creative-purple to-creative-pink",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Tailored solutions for large organizations",
                features: ["Full Creative Package", "Multi-platform Design", "Dedicated Account Manager", "Priority Support", "Custom Solutions"],
                color: "from-creative-orange to-creative-pink",
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className={`h-full hover-glow transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-creative-purple shadow-lg' : ''}`}>
                  <CardHeader className="text-center">
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-creative-purple to-creative-pink text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-creative-blue mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full bg-gradient-to-r ${plan.color} hover-glow text-white`}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 creative-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <Button asChild size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/10">
            <Link to="/contact">
              Start Your Project <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

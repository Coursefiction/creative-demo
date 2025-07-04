
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="gradient-text">Creative</span>{' '}
              <span className="text-white">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where imagination meets innovation. We transform your boldest ideas into stunning visual realities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="creative-gradient hover-glow text-white px-8 py-6 text-lg">
                <Link to="/portfolio">
                  View Our Work <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-effect border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">
                  Start Your Project
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Why Choose Creative Excellence?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We blend artistic vision with technical expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-creative-blue" />,
                title: "Award-Winning Design",
                description: "Our creative team has been recognized with multiple industry awards for innovative design solutions."
              },
              {
                icon: <LayoutGrid className="h-8 w-8 text-creative-purple" />,
                title: "Versatile Portfolio",
                description: "From branding to web design, we offer comprehensive creative services across all mediums."
              },
              {
                icon: <ChevronRight className="h-8 w-8 text-creative-orange" />,
                title: "Results-Driven",
                description: "Every project is crafted with your business goals in mind, ensuring maximum impact and ROI."
              }
            ].map((feature, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-8 rounded-2xl glass-effect hover-glow group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into our creative universe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Tech Startup Branding",
                category: "Brand Identity"
              },
              {
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "E-commerce Platform",
                category: "Web Design"
              },
              {
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Digital Campaign",
                category: "Marketing"
              }
            ].map((project, index) => (
              <div key={index} className="animate-on-scroll group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-2xl hover-glow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-300">{project.category}</p>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild size="lg" className="creative-gradient hover-glow text-white">
              <Link to="/portfolio">
                View Full Portfolio <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 creative-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your creative vision to life with innovative design solutions.
          </p>
          <Button asChild size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/10">
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

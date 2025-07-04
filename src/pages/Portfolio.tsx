
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const portfolioItems = [
    {
      id: 1,
      title: "TechStart Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete brand identity for innovative tech startup"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern e-commerce platform with seamless UX"
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Creative digital campaign that increased engagement by 300%"
    },
    {
      id: 4,
      title: "Mobile App UI Design",
      category: "web",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Intuitive mobile app interface design"
    },
    {
      id: 5,
      title: "Restaurant Brand Package",
      category: "branding",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete branding solution for upscale restaurant"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Viral social media campaign with creative visuals"
    },
    {
      id: 7,
      title: "Corporate Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional corporate website with modern design"
    },
    {
      id: 8,
      title: "Product Launch Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Strategic product launch with multi-channel approach"
    },
    {
      id: 9,
      title: "Fashion Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant brand identity for luxury fashion house"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-creative-cyan via-creative-blue to-creative-purple">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Creative Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our diverse collection of creative projects and successful brand transformations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'creative-gradient text-white hover-glow' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="animate-on-scroll group" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl hover-glow bg-white shadow-lg">
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm mb-4">{item.description}</p>
                      <Button size="sm" className="bg-white/20 glass-effect text-white hover:bg-white/30">
                        View Project <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project info overlay for mobile */}
                  <div className="md:hidden p-6 bg-white">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <Button size="sm" className="creative-gradient text-white">
                      View Project <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Project Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The measurable results of our creative solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Delivered", color: "from-creative-blue to-creative-cyan" },
              { number: "98%", label: "Client Satisfaction", color: "from-creative-purple to-creative-pink" },
              { number: "250%", label: "Avg. ROI Increase", color: "from-creative-orange to-creative-pink" },
              { number: "15+", label: "Industry Awards", color: "from-creative-cyan to-creative-blue" }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 creative-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together and add your project to our portfolio of success.
          </p>
          <Button asChild size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/10">
            <a href="/contact">
              Start Your Project <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

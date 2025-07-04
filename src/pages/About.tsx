
import { useEffect } from 'react';
import { Star } from 'lucide-react';

const About = () => {
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
      <section className="relative py-32 bg-gradient-to-br from-creative-blue via-creative-purple to-creative-pink">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              About Our Creative Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Passionate creators dedicated to transforming visions into visual masterpieces
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 gradient-text">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between imagination and reality, Creative by Coursefiction began as a small collective of passionate designers and innovative thinkers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've evolved into a comprehensive creative agency, helping businesses of all sizes tell their stories through compelling visual narratives and cutting-edge design solutions.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and innovation has earned us recognition in the industry and the trust of clients worldwide.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Creative team at work"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new creative territories to deliver fresh, original solutions.",
                color: "from-creative-blue to-creative-cyan"
              },
              {
                title: "Excellence",
                description: "Every project receives our full attention to detail, ensuring the highest quality in every deliverable.",
                color: "from-creative-purple to-creative-pink"
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from working closely with our clients as partners in the creative process.",
                color: "from-creative-orange to-creative-pink"
              }
            ].map((value, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-8 rounded-2xl glass-effect hover-glow group cursor-pointer transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Meet Our Creative Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented individuals united by a passion for creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Chen",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emily Rodriguez",
                role: "UX Specialist",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332c96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="animate-on-scroll text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="group">
                  <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden hover-glow transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-creative-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 creative-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Awards Won" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

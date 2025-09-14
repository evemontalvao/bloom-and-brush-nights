import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-evening/40"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-semibold text-primary-foreground mb-8 leading-tight">
          Brush & Bloom
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Where twilight conversations meet quiet joy, and the smell of incense mingles with creativity. 
          Intimate art gatherings on a private Barcelona terrace.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <button className="bg-primary/90 hover:bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium transition-all duration-300 shadow-soft hover:shadow-dreamy backdrop-blur-sm">
            Join the Waitlist
          </button>
          <button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-body font-medium transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
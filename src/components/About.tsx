const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-sage">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8">
          The Experience
        </h2>
        
        <div className="prose prose-lg max-w-3xl mx-auto font-body text-foreground/80 leading-relaxed space-y-6">
          <p className="text-xl">
            Step into our candlelit sanctuary, where easels wait between potted plants and soft music 
            carries through the evening air. This is not a classroom—it's a space for presence, 
            vulnerability, and the kind of creative connection that happens when we slow down together.
          </p>
          
          <p>
            Our intimate gatherings welcome artists and beginners alike to a private Barcelona terrace 
            transformed into an oasis of calm. Share wine, stories, and the gentle rhythm of brush on canvas 
            as the city settles into dusk around us.
          </p>
          
          <p>
            Each evening is carefully curated with small groups, vetted guests, and an atmosphere 
            that honors both solitude and connection—where you're free to lose yourself in your art 
            or find yourself in conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
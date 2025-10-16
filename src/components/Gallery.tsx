import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const Gallery = () => {
  const galleryImages = [
    { id: 1, url: gallery1, alt: "Kenora Fitness - Strength Training Area" },
    { id: 2, url: gallery2, alt: "Kenora Spa - Luxury Treatment Room" },
    { id: 3, url: gallery3, alt: "Kenora Fitness - Group Fitness Class" },
    { id: 4, url: gallery4, alt: "Kenora Fitness - Personal Training Session" },
    { id: 5, url: gallery5, alt: "Kenora Wellness - Yoga Studio" },
    { id: 6, url: gallery6, alt: "Kenora Fitness - Cardio Equipment Area" },
    { id: 7, url: gallery7, alt: "Kenora Spa - Sauna & Relaxation Area" },
    { id: 8, url: gallery8, alt: "Kenora Fitness - Functional Training" },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the Kenora lifestyle through our members' journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-gold transition-smooth group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/kenorafitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold hover:text-gold transition-smooth"
          >
            Follow us on Instagram @kenorafitness
            <span className="text-gold">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

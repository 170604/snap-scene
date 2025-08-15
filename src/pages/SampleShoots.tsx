import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sampleImages = [
  "assets/IMG_1697.jpg",
  "assets/IMG_1709.jpg",
  "assets/IMG_1714.jpg",
  "assets/IMG_1934.jpg",
  "assets/IMG_1967.jpg",
  "assets/IMG_1990.jpg",
  "assets/IMG_2224.jpg",
  "assets/IMG_2230.jpg",
  "assets/IMG_2241.jpg",
  "assets/IMG_2257.jpg",
  "assets/IMG_2264.jpg",
  "assets/IMG_1709.jpg",
];

const SampleShoots = () => {
  return (
    <>
      <Header />

     <section className="container mx-auto px-4 pt-36 pb-10">
        <h1 className="text-4xl font-bold text-center mb-10">Sample Shoots</h1>


        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Sample ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SampleShoots;

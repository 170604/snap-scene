import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sampleImages = [
  "assets/IMG_1697.jpg",
  "assets/ps edit-67.jpg",
  "assets/IMG_7008.JPEG",
  "assets/IMG_7002.JPEG",
  "assets/IMG_7019.JPEG",
  "assets/IMG_1967.jpg",
  "assets/IMG_2224.jpg",
  "assets/IMG_2230.jpg",
  "assets/IMG_2241.jpg",
  "assets/IMG_7021.JPEG",
  "assets/Ragavendra Cafe-2.jpg",
  "assets/Ragavendra Cafe-48.jpg",
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

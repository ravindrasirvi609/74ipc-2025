import { Users, Building, Beaker, Factory, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function FederatingAssociations() {
  const associations = [
    {
      name: "IPA",
      fullName: "Indian Pharmaceutical Association",
      logo: "/logos/IPA_logo.png",
      description: "Promoting pharmaceutical industry excellence",
    },
    {
      name: "IHPA",
      fullName: "Indian Hospital Pharmacists Association",
      logo: "/logos/IHPA_logo.png",
      description: "Advancing hospital pharmacy practice",
    },
    {
      name: "APTI",
      fullName: "Association of Pharmaceutical Teachers of India",
      logo: "/logos/apti_logo.png",
      description: "Leading pharmaceutical education",
    },
    {
      name: "IPGA",
      fullName: "Indian Pharmaceutical Graduates Association",
      logo: "/logos/IPGA_logo.png",
      description: "Supporting pharmaceutical graduates",
    },
    {
      name: "AIDCOC",
      fullName: "All India Drug Control Officers Confederation",
      logo: "/logos/AIDCOC_logo.png",
      description: "Ensuring drug quality and safety",
    },
  ];

  return (
    <section className="py-20 bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Federating Associations
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            The Indian Pharmaceutical Congress brings together leading
            associations across the pharmaceutical ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {associations.map((association, index) => {
            return (
              <div
                key={index}
                className="bg-secondary-800 rounded-lg p-6 text-center hover:bg-secondary-700 transition-colors group"
              >
                <div className="bg-pharmaceutical-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-pharmaceutical-500 transition-colors">
                  <Image
                    src={association.logo}
                    alt={association.name + " logo"}
                    className="h-12 w-12 object-contain"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pharmaceutical-400">
                  {association.name}
                </h3>
                <h4 className="text-sm font-semibold mb-3 text-white">
                  {association.fullName}
                </h4>
                <p className="text-secondary-300 text-sm">
                  {association.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-300 text-lg">
            United in our mission to advance pharmaceutical sciences and
            practice in India
          </p>
        </div>
      </div>
    </section>
  );
}

import { Users, Building, Beaker, Factory, ShoppingCart } from "lucide-react";

export default function FederatingAssociations() {
  const associations = [
    {
      name: "IPA",
      fullName: "Indian Pharmaceutical Association",
      icon: Factory,
      description: "Promoting pharmaceutical industry excellence",
    },
    {
      name: "IHPA",
      fullName: "Indian Hospital Pharmacists Association",
      icon: Building,
      description: "Advancing hospital pharmacy practice",
    },
    {
      name: "APTI",
      fullName: "Association of Pharmaceutical Teachers of India",
      icon: Users,
      description: "Leading pharmaceutical education",
    },
    {
      name: "IPGA",
      fullName: "Indian Pharmaceutical Graduates Association",
      icon: Beaker,
      description: "Supporting pharmaceutical graduates",
    },
    {
      name: "AIDCOC",
      fullName: "All India Drug Control Officers Confederation",
      icon: ShoppingCart,
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
            const IconComponent = association.icon;
            return (
              <div
                key={index}
                className="bg-secondary-800 rounded-lg p-6 text-center hover:bg-secondary-700 transition-colors group"
              >
                <div className="bg-pharmaceutical-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-pharmaceutical-500 transition-colors">
                  <IconComponent className="h-8 w-8 text-white" />
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

import { useState, useEffect } from 'react';
import { Code, Smartphone, Cloud, Headphones, Database, Palette, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: typeof Code;
  price: string;
}

export default function Services() {
  const [apiData, setApiData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const serviceIcons = [Code, Smartphone, Cloud, Headphones, Database, Palette];
  const servicePrices = ['$999', '$1,499', '$1,999', '$799', '$1,299', '$899'];

  const staticServices: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks and best practices.',
      icon: Code,
      price: '$2,499',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless performance.',
      icon: Smartphone,
      price: '$3,999',
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enterprise-level applications.',
      icon: Cloud,
      price: '$1,999',
    },
    {
      id: 4,
      title: 'Technical Support',
      description: '24/7 dedicated support and maintenance for your digital products and services.',
      icon: Headphones,
      price: '$499/mo',
    },
    {
      id: 5,
      title: 'Database Management',
      description: 'Design, optimization, and management of databases for maximum performance.',
      icon: Database,
      price: '$1,499',
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces that enhance user experience and engagement.',
      icon: Palette,
      price: '$1,799',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setApiData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayServices: Service[] = apiData.length > 0
    ? apiData.map((item, index) => ({
        id: item.id,
        title: item.title.split(' ').slice(0, 3).join(' '),
        description: item.body.slice(0, 100) + '...',
        icon: serviceIcons[index % serviceIcons.length],
        price: servicePrices[index % servicePrices.length],
      }))
    : staticServices;

  return (
    <div className="min-h-screen pt-20 pb-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs
            and drive digital transformation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
              <p className="text-gray-600">Loading services...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <div>
                  <p className="text-red-800 font-semibold">Error loading services</p>
                  <p className="text-red-600 text-sm">{error}</p>
                  <p className="text-red-600 text-sm mt-2">Showing static services instead.</p>
                </div>
              </div>
            </div>
          )}

          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 capitalize">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <span className="text-2xl font-bold text-blue-600">
                          {service.price}
                        </span>
                        <Link
                          to="/contact"
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We specialize in creating tailored solutions that fit your unique
            requirements. Let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}

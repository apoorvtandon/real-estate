import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Buy a home',
      description: 'Explore a vast selection of over a million homes for sale on our website. Our tailored services ensure you find the perfect house that you will be proud to call home.',
      linkText: 'Find A Home',
      icon: '🏠', // Replace with actual icon if needed
      link: '/search',
    },
    {
      title: 'Rent a home',
      description: 'Discover a wide range of rental homes that meet your needs and preferences. With over a million listings, finding your ideal rental property has never been easier.',
      linkText: 'Find A Home for Rent',
      icon: '💵', // Replace with actual icon if needed
      link: '/search',
    },
    {
      title: 'Sell a home',
      description: 'Ready to sell your home? Our platform offers access to millions of potential buyers, ensuring a smooth and successful selling process. List your property with us today.',
      linkText: 'Create Listing',
      icon: '🤝', // Replace with actual icon if needed
      link: '/create-listing',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <Link to={service.link} className="text-pink-500 font-semibold hover:underline">
              {service.linkText} &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

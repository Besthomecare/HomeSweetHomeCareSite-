import { Link } from 'wouter';

export interface ServiceProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ id, icon, title, description, features }: ServiceProps) => {
  return (
    <div id={id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="h-48 bg-secondary flex items-center justify-center">
        <div className="text-5xl text-accent">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-merrifield font-bold text-primary mb-3">{title}</h3>
        <p className="text-textDark mb-4">{description}</p>
        <ul className="text-textDark mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-accent mt-1 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/services#${id}`}>
          <a className="inline-block text-accent font-semibold hover:underline">
            Learn more 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 inline-block ml-1"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

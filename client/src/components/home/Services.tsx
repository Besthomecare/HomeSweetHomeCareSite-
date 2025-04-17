import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    id: 'companionship',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    title: 'Companionship',
    description: 'Our caregivers provide meaningful companionship to prevent loneliness, including conversation, shared activities, and emotional support.',
    features: [
      'Social engagement & conversation',
      'Recreational activities & hobbies',
      'Emotional support & encouragement'
    ]
  },
  {
    id: 'personal-care',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>,
    title: 'Personal Care',
    description: 'Dignified assistance with activities of daily living to help your loved ones maintain hygiene and comfort.',
    features: [
      'Bathing & grooming assistance',
      'Dressing & mobility support',
      'Toileting & incontinence care'
    ]
  },
  {
    id: 'medication-reminders',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    title: 'Medication Reminders',
    description: 'Ensure your loved ones take their medications as prescribed with our helpful reminder services.',
    features: [
      'Timely medication reminders',
      'Medication organization assistance',
      'Prescription pickup coordination'
    ]
  },
  {
    id: 'housekeeping',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>,
    title: 'Housekeeping',
    description: 'We help maintain a clean, safe living environment for your loved ones with light housekeeping services.',
    features: [
      'Light cleaning & tidying',
      'Laundry & linen changing',
      'Organization & clutter reduction'
    ]
  },
  {
    id: 'meal-preparation',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    title: 'Meal Preparation',
    description: 'Nutritious meals prepared according to dietary needs, preferences, and restrictions.',
    features: [
      'Custom meal planning',
      'Grocery shopping assistance',
      'Nutritious meal preparation'
    ]
  },
  {
    id: 'transportation',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>,
    title: 'Transportation',
    description: 'Safe and reliable transportation for appointments, errands, and social activities.',
    features: [
      'Medical appointment transport',
      'Shopping & errand assistance',
      'Social outings & activities'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merrifield font-bold text-primary mb-4">Our Care Services</h2>
          <p className="text-lg text-textDark max-w-3xl mx-auto">We offer a range of personalized care services designed to help your loved ones maintain their independence while receiving the support they need.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="btn-primary">
              Get Personalized Care Plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

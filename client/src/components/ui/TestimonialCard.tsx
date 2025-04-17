interface TestimonialProps {
  quote: string;
  name: string;
  relation: string;
  rating: number;
  initials: string;
}

const TestimonialCard = ({ quote, name, relation, rating, initials }: TestimonialProps) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-6 relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="pt-6">
        <p className="text-textDark italic mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              {initials}
            </div>
          </div>
          <div>
            <p className="font-bold text-primary">{name}</p>
            <p className="text-sm text-textDark">{relation}</p>
            <div className="flex mt-1">
              {Array.from({ length: rating }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

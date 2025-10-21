const MobileStickyCta = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 md:hidden grid grid-cols-2 gap-2 p-3 bg-white border-t border-gray-200 shadow-lg z-50">
      <a 
        href="tel:+19412000848"
        className="text-center font-bold py-3 px-3 rounded-xl bg-gray-900 text-white transition-all duration-200 active:scale-95"
        data-testid="button-call-now-sticky"
      >
        Call Now
      </a>
      <a 
        href="https://calendar.google.com/appointments/schedules/AcZssZ1HmfJNob7zkiWgHb1185gbsl_v8EOAfqEP5Lili91nLoHV5brvq7oFCxGoVdsFDXoKjhaRsPYY"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center font-bold py-3 px-3 rounded-xl text-white transition-all duration-200 active:scale-95"
        style={{ backgroundColor: '#E7B77E' }}
        data-testid="button-book-consultation-sticky"
      >
        Book Free Consult
      </a>
    </div>
  );
};

export default MobileStickyCta;

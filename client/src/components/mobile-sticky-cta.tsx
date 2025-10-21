const MobileStickyCta = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 md:hidden grid grid-cols-2 gap-2 p-2.5 bg-white border-t border-gray-200 shadow-lg z-50">
      <a 
        href="tel:+19412000848"
        className="text-center font-bold text-sm py-3 px-2 rounded-lg bg-primary text-white transition-all duration-200 active:scale-95 hover:bg-primary/90"
        data-testid="button-call-now-sticky"
      >
        Call Now
      </a>
      <a 
        href="https://calendar.google.com/appointments/schedules/AcZssZ1HmfJNob7zkiWgHb1185gbsl_v8EOAfqEP5Lili91nLoHV5brvq7oFCxGoVdsFDXoKjhaRsPYY"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center font-bold text-sm py-3 px-2 rounded-lg bg-accent text-white transition-all duration-200 active:scale-95 hover:bg-accent/90"
        data-testid="button-book-consultation-sticky"
      >
        Book Free Consult
      </a>
    </div>
  );
};

export default MobileStickyCta;

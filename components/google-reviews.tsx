import { Star, CheckCircle } from 'lucide-react';

const googleReviews = [
  {
    name: 'Ram Nathan',
    time: '1 year ago',
    review: 'Exceptional Experience at Manha Medical Centre! I recently visited Manha Medical...',
    initial: 'R',
    color: 'bg-blue-600'
  },
  {
    name: 'Muhammad Ramzan',
    time: '1 year ago',
    review: 'Everything is perfect and smooth. I recommend Dr. Sheha as she is very gentle and patient. The receptionists are very helpful as...',
    initial: 'M',
    color: 'bg-slate-700'
  },
  {
    name: 'Mohamed Rishlam U...',
    time: '1 year ago',
    review: 'We recently visited pedestrian Dr.Faiza Rizwan, Good Doctor ,Staffs & Ambient also good..reasonable fee also...',
    initial: 'M',
    color: 'bg-emerald-600'
  },
  {
    name: 'Wazhma Shireen',
    time: '1 year ago',
    review: 'Thank you dr sharmeen for treating me well',
    initial: 'W',
    color: 'bg-amber-600'
  }
];

export function GoogleReviews() {
  return (
    <section className="section-pad bg-secondary/10 border-t border-border/50">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Trusted by our patients on Google
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Read real 5-star experiences shared by patients who visited Manha Medical Center.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {googleReviews.map((item, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-[2rem] border border-border/80 shadow-lg flex flex-col justify-between card-hover relative"
            >
              <div>
                {/* Header with Avatar & Google Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-11 w-11 rounded-full ${item.color} text-white font-bold flex items-center justify-center text-base shadow-sm`}>
                      {item.initial}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-foreground leading-tight flex items-center gap-1">
                        {item.name}
                        <CheckCircle className="h-3.5 w-3.5 text-blue-500 fill-blue-500/20" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.time}</div>
                    </div>
                  </div>
                  {/* Google "G" Icon Badge */}
                  <div className="h-7 w-7 rounded-full bg-white shadow-md border border-border/40 flex items-center justify-center shrink-0">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.32 7.24 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.12 0 9.87 0 12s.43 3.88 1.19 5.42l4.09-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.24 0 3.17 2.68 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.review}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-semibold text-primary">
                Verified Google Review
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
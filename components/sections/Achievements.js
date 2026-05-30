const Achievements = () => {
  return (
    <section class="py-24 bg-white dark:bg-slate-950">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        {/* <!-- Header --> */}
        <div class="text-center mb-14">
          <span class="inline-block text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
            — Our Achievements
          </span>

          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Numbers That Speak
          </h2>
        </div>

        {/* <!-- Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Card 1 --> */}
          <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="text-4xl mb-4">📂</div>

            <h3 class="text-4xl font-bold text-indigo-600 mb-2">4000+</h3>

            <p class="text-slate-600 dark:text-slate-400 font-medium">
              Projects Completed
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="text-4xl mb-4">😊</div>

            <h3 class="text-4xl font-bold text-indigo-600 mb-2">3500+</h3>

            <p class="text-slate-600 dark:text-slate-400 font-medium">
              Happy Customers
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="text-4xl mb-4">📗</div>

            <h3 class="text-4xl font-bold text-indigo-600 mb-2">5000+</h3>

            <p class="text-slate-600 dark:text-slate-400 font-medium">
              Published Books
            </p>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="text-4xl mb-4">🏆</div>

            <h3 class="text-4xl font-bold text-indigo-600 mb-2">10+</h3>

            <p class="text-slate-600 dark:text-slate-400 font-medium">
              Best Sellers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

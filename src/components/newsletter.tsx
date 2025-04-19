export default function Newsletter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-2xl font-light tracking-wider mb-4">
          JOIN OUR WORLD
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to receive updates on our latest collections and exclusive
          events.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

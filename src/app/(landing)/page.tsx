export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-black">
        <h1 className="text-5xl font-bold text-white">Welcome to Maltivasity</h1>
        <p className="mt-4 text-xl text-gray-200">
          Gamified learning for the future.
        </p>
        <div className="mt-8">
          <a
            href="/signup"
            className="px-8 py-4 text-lg font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-700"
          >
            Get Started
          </a>
        </div>
      </section>
      <section className="flex flex-wrap justify-center mt-16">
        <div className="w-full p-4 md:w-1/3">
          <h2 className="text-2xl font-bold text-center">
            Engage with Other Students
          </h2>
          <p className="mt-2 text-center text-gray-500">
            Collaborate and compete with peers through interactive challenges
            and leaderboards.
          </p>
        </div>
        <div className="w-full p-4 md:w-1/3">
          <h2 className="text-2xl font-bold text-center">
            Schedule Zoom Calls
          </h2>
          <p className="mt-2 text-center text-gray-500">
            Connect directly with instructors through integrated Zoom call
            scheduling.
          </p>
        </div>
        <div className="w-full p-4 md:w-1/3">
          <h2 className="text-2xl font-bold text-center">Gamified Learning</h2>
          <p className="mt-2 text-center text-gray-500">
            Earn rewards and badges as you progress through your courses.
          </p>
        </div>
      </section>
      <footer className="flex justify-center py-6 mt-16 bg-gray-900">
        <div className="text-center text-gray-500">
          <p>&copy; 2024 Maltivasity. All rights reserved.</p>
          <p>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>{" "}
            |
            <a href="/privacy" className="hover:underline">
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

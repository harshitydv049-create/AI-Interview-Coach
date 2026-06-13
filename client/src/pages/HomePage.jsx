function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">

        {/* Icon */}
        <div className="text-6xl mb-6">🤖</div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-indigo-700 mb-4">
          AI Interview Coach
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-4">
          Practice real interview questions and get instant AI-powered feedback
        </p>

        {/* Features list */}
        <div className="flex justify-center gap-6 mb-10 text-sm text-gray-500">
          <span>✅ 5 Job Roles</span>
          <span>✅ Real Questions</span>
          <span>✅ Instant Feedback</span>
          <span>✅ Score Tracking</span>
        </div>

        {/* Start Button */}
        <button
          onClick={() => alert('Lets go! Role selection coming soon.')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-10 py-4 rounded-xl transition duration-200 shadow-lg hover:shadow-xl"
        >
          Start Interview →
        </button>

        {/* Bottom note */}
        <p className="text-gray-400 text-sm mt-6">
          Free to use · No login required · Powered by Claude AI
        </p>

      </div>
    </div>
  );
}

export default HomePage;
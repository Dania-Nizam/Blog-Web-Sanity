import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800  dark:text-white  p-6 md:p-12 lg:p-20 shadow-lg">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800 hover:text-gray-500">
            About <span className="text-gray-800 hover:text-gray-500">DN Blog</span>
          </h1>
          <h4 className="text-2xl font-medium text-gray-500">
            A Developer's Notebook for Creativity and Insight
          </h4>
        </div>

        {/* Introduction */}
        <p className="text-lg leading-relaxed text-gray-600">
          (DN) Blog is a platform where developers share their thoughts, experiences, and technical insights. It serves as a mix of personal reflections and professional documentation, targeting audiences ranging from fellow developers to tech enthusiasts. Here’s what makes a DN Blog unique:
        </p>

        {/* Key Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features of a DN Blog:</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {[
              {
                title: 'Technical Insights',
                description:
                  'DN blogs often delve into complex programming concepts, solutions to technical challenges, or innovative approaches to coding.',
              },
              {
                title: 'Problem-Solving Focus',
                description:
                  'Developers document problems they’ve faced and the step-by-step process of resolving them. This serves as a learning resource for others.',
              },
              {
                title: 'Open Source and Collaboration',
                description:
                  'Many DN blogs include links to GitHub repositories, snippets of code, or contributions to open-source projects, fostering community collaboration.',
              },
              {
                title: 'Personal Touch',
                description:
                  'Unlike formal technical documentation, DN blogs often feature the author’s voice, anecdotes, and opinions, making them relatable and engaging.',
              },
              {
                title: 'Learning and Growth',
                description:
                  'They highlight learning journeys, such as picking up a new language or framework, and share lessons learned from mistakes and successes.',
              },
              {
                title: 'Tutorials and Demos',
                description:
                  'Many posts include practical tutorials, complete with example projects, visual aids, and real-world applications.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-black  hover:bg-gray-300 dark:hover:bg-slate-400 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Write a DN Blog? */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Write a DN Blog?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
            <li>Knowledge Sharing: Helping others by sharing solutions and tips.</li>
            <li>Building Credibility: Establishing yourself as an expert in your domain.</li>
            <li>Community Engagement: Connecting with like-minded individuals.</li>
            <li>Career Opportunities: Showcasing expertise to potential employers or collaborators.</li>
            <li>Self-Reflection: Consolidating what you’ve learned and identifying areas for growth.</li>
          </ul>
        </div>

        {/* Closing Note */}
        <p className="text-lg leading-relaxed text-gray-600 text-center">
          Whether you're an experienced developer or just starting out, a DN Blog is an excellent way to contribute to the tech community and document your journey.
        </p>
      </div>
    </div>
  );
};

export default About;

// File: src/HomePage.jsx
import React from "react";
import "./App.css"; // Add styling here or use Tailwind if configured

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto grid gap-8">
        <div className="shadow-lg rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
          <img
            src="/profile-photo.jpg"
            alt="Nelly Kavengi Alex"
            className="w-40 h-40 mx-auto mb-4 rounded-full border-4 border-blue-300"
          />
          <h1 className="text-4xl font-bold text-blue-900">Nelly Alex</h1>
          <p className="text-xl text-gray-700 mt-2">
            Data Scientist | Statistician | Python Enthusiast | Cloud Specialist
          </p>
          <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
            Turning data into insight and action – exploring the intersection of statistics,
            programming, and real-world impact in health and development.
          </p>
          <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
            Interests: Cloud Computing, Cloud Security, Cloud Network. AWS Certified
            Cloud Practitioner with hands-on experience in deploying secure, scalable
            cloud infrastructure.
          </p>
        </div>

        {/* Resume Section */}
        <Section title="Resume">
          <SubSection title="Academic Background" items={["BSc. in Applied Statistics with Computing – Moi University"]} />
          <SubSection
            title="Work Experience"
            items={["Data Analyst – Kenya National Bureau of Statistics", "Freelance Business Analyst – Various Clients"]}
          />
          <SubSection
            title="Certifications"
            items={[
              "AWS Certified Cloud Practitioner",
              "AWS Educate Machine Learning Foundations",
              "Advanced Python for Data Science",
              "Microsoft Office Specialist Certification",
              "STATA Certification",
              "SPSS Certification"
            ]}
          />
          <SubSection
            title="Skills"
            items={[
              "Programming: Python, R, SQL",
              "Cloud: AWS (EC2, S3, IAM, CloudWatch, Lambda, VPC), Azure Fundamentals",
              "Tools: GitHub, Power BI, VS Code",
              "Libraries: Scikit-Learn, Seaborn, Matplotlib, Pandas",
              "Techniques: Machine Learning, Time Series Analysis, Web Scraping, Data Visualization"
            ]}
          />
        </Section>

        {/* Projects Section */}
        <Section title="Projects">
          <Project
            title="Predicting Survival Chances on the Titanic"
            description="Developed a predictive model using Adaboost and deployed it using Streamlit for real-time predictions."
            link="https://github.com/Kavengi00/Titanic-Project"
          />
          <Project
            title="Web Scraping NHL Player Stats"
            description="Built a Python script with BeautifulSoup to extract and analyze NHL player statistics from a live sports website."
            link="https://medium.com/@kavengialex/beautiful-soup-meets-the-nhl-a-python-journey-into-sports-data-357957e09090"
          />
          <Project
            title="Interactive Dashboards with Power BI"
            description="Created dynamic dashboards using Power BI to visualize business and health datasets."
            link="https://medium.com/@kavengialex/power-bi-in-action-unlocking-hotel-management-insights-through-data-d4bf75f5a7b1"
          />
        </Section>

        {/* Lab Challenges */}
        <Section title="Lab Challenge Writeups">
          <Project
            title="Netflix Cleaning Project"
            description="Cleaned Netflix dataset for analysis. Handled missing data, corrected data types, standardized columns."
            link="https://medium.com/@kavengialex/netflix-data-detective-a-python-journey-from-chaos-to-clean-insights-cbe7aa7c2edc"
          />
          <Project
            title="Who Survived the Titanic?"
            description="Univariate and bivariate analysis, feature profiling, visual storytelling using Seaborn and Matplotlib."
            link="https://medium.com/@kavengialex/who-survived-the-titanic-an-exploratory-journey-with-data-and-visuals-cbd38de06a17"
          />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="shadow-lg rounded-2xl p-6 bg-white border border-gray-200">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SubSection({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <ul className="list-disc list-inside text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Project({ title, description, link }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        View Project
      </a>
    </div>
  );
}

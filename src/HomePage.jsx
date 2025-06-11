// File: src/HomePage.jsx
import React from "react";
import "./App.css"; // Add styling here or use Tailwind if configured
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaUniversity, FaBriefcase, FaCertificate, FaCode, FaProjectDiagram } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto grid gap-8">
        <div className="shadow-lg rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
          <img
            src="C:/Users/ADMIN/Downloads/DSC_1017-removebg-preview.png"
            alt="Nelly Kavengi Alex"
            className="w-40 h-40 mx-auto mb-4 rounded-full border-4 border-blue-300"
          />
          <h1 className="text-4xl font-bold text-blue-900">Nelly Alex</h1>
          <p className="text-xl text-gray-700 mt-2">
            <FaCode className="inline mr-2" />Data Scientist | Statistician | Python Enthusiast | Cloud Specialist
          </p>
          <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
          I am a passionate Data Scientist and Statistician with a strong foundation in applied statistics, machine learning, and computing. I specialize in transforming raw data into actionable insights, using statistical thinking, ML algorithms, and programming to solve real-world challenges across health, development, and business sectors.
          As an AWS Certified Cloud Practitioner, I have experience deploying secure and scalable cloud infrastructure. My current focus areas include Cloud Computing, Cloud Security, and Networking, all driven by my commitment to impactful, data-informed decision-making that creates meaningful real-world outcomes.
          </p>
        </div>

        {/* Resume Section */}
        <Section title={<><FaUniversity className="inline mr-2" />Resume</>}>
          <SubSection title="Academic Background" items={["BSc. in Applied Statistics with Computing – Moi University"]} />
          <SubSection
            title={<><FaBriefcase className="inline mr-2" />Work Experience</>}
            items={["Data Analyst – Kenya National Bureau of Statistics", "Freelance Business Analyst – Various Clients"]}
          />
          <SubSection
            title={<><FaCertificate className="inline mr-2" />Certifications</>}
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
            title={<><FaCode className="inline mr-2" />Skills</>}
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
        <Section title={<><FaProjectDiagram className="inline mr-2" />Projects</>}>
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
        <Section title={<><FaProjectDiagram className="inline mr-2" />Lab Challenge Writeups</>}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Netflix Cleaning Project</h3>
            <p><strong>Problem Statement:</strong> Raw Netflix dataset required extensive cleaning for analysis</p>
            <p><strong>Approach:</strong> Identified and handled missing data, corrected data types, and standardized column entries for consistency</p>
            <p><strong>Tools Used:</strong> Python, Pandas, Jupyter Notebook</p>
            <p><strong>Lessons Learned:</strong> Gained hands-on practice in data cleaning essentials for reliable analysis</p>
            <a href="https://medium.com/@kavengialex/netflix-data-detective-a-python-journey-from-chaos-to-clean-insights-cbe7aa7c2edc"
            target="_blank" className="text-blue-600 underline mt-1 inline-block">
            View Lab Writeup
            </a>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Who Survived the Titanic?</h3>
            <p><strong>Problem Statement:</strong> Analyze passenger data for survival prediction</p>
            <p><strong>Approach:</strong> Univariate, bivariate analysis, KDE plots, Z-score capping</p>
            <p><strong>Tools Used:</strong> Pandas, Seaborn, Matplotlib</p>
            <p><strong>Lessons Learned:</strong> Importance of visualization, outlier treatment, and data cleaning</p>
            <a href="https://medium.com/@kavengialex/who-survived-the-titanic-an-exploratory-journey-with-data-and-visuals-cbd38de06a17"
               target="_blank" className="text-blue-600 underline mt-1 inline-block">
               View Lab Writeup
            </a>
          </div>
        </Section>

        {/* Contact Section */}
        <Section title={<><FaEnvelope className="inline mr-2" />Contact</>}>
          <div className="flex flex-col gap-4 text-lg text-gray-700">
            <a href="https://linkedin.com/in/nelly-alex-56ab55299" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/Kavengi00" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:underline">
              <FaGithub size={20} /> GitHub
            </a>
            <a href="mailto:kavengialex@gmail.com" className="flex items-center gap-2 text-red-600 hover:underline">
              <FaEnvelope size={20} /> Email
            </a>
            <div className="flex items-center gap-2">
              <FaPhone size={20} /> +254-757-860828
            </div>
          </div>
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

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, BookOpen, Code, Building, Globe, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['Objective', 'Skills', 'Experience', 'Virtual Experience', 'Education', 'Projects', 'Certifications', 'Publications'];

  return (
    <nav className="sticky top-0 bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Iko Tambaya</h1>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(' ', '-')}`}
                className="block py-2 md:py-0 hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function IkoTambaya() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/assets/iko_tambaya.jpg"
              alt="Iko Tambaya"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-2xl font-bold text-gray-900">Iko Tambaya</h2>
            <p className="text-gray-600">
              B.Tech. (FUTMinna, Nigeria), MSc (Reading, UK), MSc (Hull, UK)
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center justify-center">
                <MapPin size={18} className="mr-2" /> Birmingham, UK | B16
              </p>
              <p className="flex items-center justify-center">
                <Phone size={18} className="mr-2" /> 07454 5*****
              </p>
              <p className="flex items-center justify-center">
                <Mail size={18} className="mr-2" /> ik*********@gmail.com
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://github.com/ikotambaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/iko-tambaya-50b938122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://doi.org/10.20900/jsr20230007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                  aria-label="Publication"
                >
                  <BookOpen size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-12">
            <motion.section
              id="objective"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Objective</h3>
              <p className="text-gray-700">
                A data and sustainability specialist with a multidisciplinary background, holding MSc degrees in Artificial
                Intelligence and Data Science and Sustainable Built Environments. My work bridges machine learning and applied
                analytics with practical experience in building performance, low-carbon design, and urban sustainability. I have
                developed predictive models, conducted time series forecasting, and worked with building simulation tools such as
                IES VE and RdSAP to support energy efficiency and climate-responsive design. Proficient in Python, SQL, and data
                visualisation, I can turn complex data into clear, actionable insights. I am well suited to roles in data science,
                machine learning, building retrofit and low carbon roles, and environmental analytics, where both technical depth
                and domain awareness are valued.
              </p>
            </motion.section>

            <motion.section
              id="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills and Abilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Programming & Data Analysis:</strong> Python, SQL, Pandas, NumPy, Scikit-learn, TensorFlow, NetworkX, BeautifulSoup, Data Cleaning, Feature Engineering</li>
                <li><strong>Machine Learning & Predictive Analytics:</strong> Predictive Modelling, Regression Analysis, Classification Analysis, LSTM, Convolutional Neural Networks (CNNs), Time Series Forecasting, Model Deployment</li>
                <li><strong>Data Visualization:</strong> Tableau, Streamlit, Matplotlib, Seaborn</li>
                <li><strong>Built Environment & Simulation Tools:</strong> Energy in Buildings, building management systems, IoTs, Green Building Assessments, Building Physics, Passive design, engineering project management, building simulation (IES VE), AutoCAD, SketchUp, RdSAP</li>
                <li><strong>Regulations & Standards:</strong> UK Building Regulations Part L, TM59 (Thermal Comfort), TM52 (Adaptive Comfort), TM54 (Energy Performance), SAP, EPC, CIBSE Guides, BREEAM Standards, PAS 2035</li>
                <li><strong>Version Control & Collaboration:</strong> Git, Technical Documentation, Stakeholder Engagement, project support</li>
              </ul>
            </motion.section>

            <motion.section
              id="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium">Sustainability Design – Competition Winner</h4>
                  <p className="text-gray-600">UPP Foundation & University of Hull | Dec 2024 - Mar 2025</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Designed an interactive flood and rainfall prediction dashboard using ML, React.js, and Vite.js</li>
                    <li>Deployed live data integration for real-time climate visualisation</li>
                    <li>
                      <a
                        href="https://openbadgefactory.com/v1/assertion/2133b9d0ad4e49139569294c2ac1ffc1a9e7d5fe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                        aria-label="View Award Badge"
                      >
                        <BookOpen size={20} className="inline mr-1" /> View Award Badge
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-medium">R&D Team Member</h4>
                  <p className="text-gray-600">Green Building Council of Nigeria | Nov 2022 - Nov 2024</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Led development of Nigeria’s first carbon emissions database for buildings</li>
                    <li>Delivered data analyses across 5 cities, informing national green policy</li>
                    <li>Presented findings at team meetings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Team Assistant (Volunteer)</h4>
                  <p className="text-gray-600">The Thrive Project - Australia (Remote) | Nov 2023 - Apr 2024</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Delivered research on climate adaptation, deforestation, and water sensitive design</li>
                    <li>Organised team meetings, attended meetings, and presented minutes of meetings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Projects Assistant</h4>
                  <p className="text-gray-600">Kaduna State Government, Nigeria | Jan 2022 – Apr 2024</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Used IES VE to simulate energy-efficient school designs, improving comfort and reducing energy demand</li>
                    <li>Supervised project rollouts, developed report templates and dashboards for progress tracking</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="virtual-experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Virtual Industry Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium">British Airways – Data Science Simulation</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Built classification models to analyse feedback and improve service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Commonwealth Bank Australia – Data Analytics Simulation</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Developed simple pipelines and reviewed customer risks</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-medium flex items-center">
                    <Code size={20} className="mr-2" /> Flood Prediction Dashboard
                  </h4>
                  <p className="text-gray-600">An interactive dashboard built with React.js, Vite.js, and machine learning for real-time flood and rainfall predictions.</p>
                  <a
                    href="https://github.com/ikotambaya/flood-prediction-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                    aria-label="View Flood Prediction Dashboard Repository"
                  >
                    View Repository
                  </a>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-medium flex items-center">
                    <Building size={20} className="mr-2" /> Carbon Emissions Database
                  </h4>
                  <p className="text-gray-600">Developed Nigeria’s first carbon emissions database for buildings, integrating data from 5 cities.</p>
                  <a
                    href="https://github.com/ikotambaya/carbon-emissions-db"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                    aria-label="View Carbon Emissions Database Repository"
                  >
                    View Repository
                  </a>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-medium flex items-center">
                    <Globe size={20} className="mr-2" /> Energy-Efficient School Design
                  </h4>
                  <p className="text-gray-600">Simulated energy-efficient school designs using IES VE, reducing energy demand by 20%.</p>
                  <a
                    href="https://github.com/ikotambaya/energy-efficient-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                    aria-label="View Energy-Efficient School Design Repository"
                  >
                    View Repository
                  </a>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              id="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium">University of Hull, United Kingdom <span className="text-gray-600">2025</span></h4>
                  <p className="text-gray-700">MSc Artificial Intelligence and Data Science - Distinction</p>
                  <p className="text-gray-600">Relevant Coursework: Big Data and Data Mining, Python for AI and Data Science, Fundamentals of Data Science, Fundamentals of Artificial Intelligence, Applied AI, Research and Applications of AI in Natural and Built Environments, Research Skills.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">University of Reading, United Kingdom <span className="text-gray-600">2021</span></h4>
                  <p className="text-gray-700">MSc Design & Management of Sustainable Built Environments - Merit</p>
                  <p className="text-gray-600">Relevant Coursework: Passive and Climate-Responsive Design, Indoor Environmental Quality and Thermal Comfort, Building Physics and Simulation, ICT and Energy Management, Energy in Buildings, Urban Sustainability, Engineering Project Management, Green Building Assessment, Urban Microclimate, Research Skills.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Federal University of Technology Minna, Nigeria <span className="text-gray-600">2017</span></h4>
                  <p className="text-gray-700">B.Tech. (IET) Building Technology – Second Class Honours (Upper Division)</p>
                  <p className="text-gray-600">Relevant Coursework: Building Services, Building Substructures, Superstructures and Finishes, Structural Design, Building Materials and Manufacturing Processes, Site Practice, Building Science, Building Design, Industrial Design, Machine Drawing, Technical Drawing, AutoCAD, Building Construction, Bills of Quantities, Research Skills.</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="certifications"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certifications</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Understanding Domestic Retrofit (Level 2) – Unyte Academy, 2024</li>
                <li>Python Scripting for IES VE – IES Ltd, 2024</li>
                <li>Energy Modelling Summer School – IES Ltd, 2024</li>
              </ul>
            </motion.section>

            <motion.section
              id="publications"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Research & Publications</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Tambaya, I. (2023). Combining Building Simulation and Sensitivity Analysis for Residential Passive Design. Journal of Sustainable Research.{' '}
                  <a
                    href="https://doi.org/10.20900/jsr20230007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                    aria-label="View Publication"
                  >
                    DOI link
                  </a>
                </li>
                <li>Tambaya, I., & Mboli, J. (Under Review). Hybrid Deep Learning for Indoor Environmental Quality Prediction, Journal of Cleaner Production</li>
              </ul>
            </motion.section>

            <motion.section
              id="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h3>
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-4 max-w-lg"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, ExternalLink, GraduationCap, User, Briefcase, Target, BookOpen, ChevronDown, Star, Code, Zap } from 'lucide-react';
import profileImg from './profile.JPG';
import demoVideo from './doctorhuntdemovideo.mp4';
import interviewDostDemo from './interviewdostdemovideo.mp4';



function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);
  const [showInterviewVideo, setShowInterviewVideo] = useState(false);



  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-30 transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AS
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Projects', 'Research', 'Interests'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-12 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <img 
                  src={profileImg}
                  alt="Abhishek Singh" 
                  className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              
              <div className="text-center lg:text-left flex-grow">
                <div className="mb-6">
                  <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
                    Abhishek Singh
                  </h1>
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span className="text-xl text-white/80 font-light">MTech CSE, IIIT Delhi</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70 hover:text-white transition-colors group/contact">
                    <Phone className="w-5 h-5 text-blue-400 group-hover/contact:animate-bounce" />
                    <span className="font-medium">9593552291</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                    <a href="https://www.linkedin.com/in/abhishek-singh-121b6a26a/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 group/link">
                      <Linkedin className="w-5 h-5 group-hover/link:animate-bounce" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/Abhi2000IIITD" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-110 group/link">
                      <Github className="w-5 h-5 group-hover/link:animate-bounce" />
                      <span>GitHub</span>
                    </a>
                    <a href="mailto:abhishek24008@iiitd.ac.in"  
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-110 group/link"
                    >
                      <Mail className="w-5 h-5 group-hover/link:animate-bounce" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="animate-bounce text-white/60 hover:text-white transition-colors"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section id="about" className="mb-12 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl group-hover:animate-pulse">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
            </div>
            <p className="text-white/80 leading-relaxed text-lg hover:text-white transition-colors duration-300">
              As an M.Tech CSE student at IIITD, I possess a robust skill set spanning MERN stack development and modern DevOps tooling, 
              including Docker, Kubernetes, Prometheus, and Grafana. My passion for innovation drives my research in advanced networking,
               where I optimize multipath configurations for latency-sensitive edge devices using FEC techniques and pioneering transformer 
               neural architectures. Complementing this, I have a strong grasp of core computer science fundamentals (OS, DBMS, DSA, System 
               Design, SQL) and a foundational understanding of machine learning. I am eager to apply my diverse expertise in challenging 
               roles within development, networks, and DevOps.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10 hover:border-teal-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl group-hover:animate-pulse">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-teal-400/50 to-transparent"></div>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 hover:pl-12 transition-all duration-300 group/edu">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full group-hover/edu:w-2 transition-all duration-300"></div>
                <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/30">
                  <h3 className="text-2xl font-semibold text-white mb-2">MTech in Computer Science & Engineering</h3>
                  <p className="text-blue-400 font-medium text-lg mb-3">IIIT Delhi</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full">2nd Year (Currently)</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full">Expected: 2026</span>
                    <span className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-3 py-1 rounded-full font-semibold">
                      CGPA: 8.47
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 hover:pl-12 transition-all duration-300 group/edu">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-400 rounded-full group-hover/edu:w-2 transition-all duration-300"></div>
                <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-teal-400/30">
                  <h3 className="text-2xl font-semibold text-white mb-2">BTech in Computer Science & Engineering</h3>
                  <p className="text-teal-400 font-medium text-lg mb-3">Siksha 'O' Anusandhan, Deemed to be University</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full">Graduated: 2024</span>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full font-semibold">
                      CGPA: 9.06
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl group-hover:animate-pulse">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Projects</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* DoctorHunt Application */}
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group/project">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-blue-400 group-hover/project:animate-spin" />
                  <h3 className="text-xl font-semibold text-white">DoctorHunt Application</h3>
                </div>
                <p className="text-white/80 mb-6 text-sm leading-relaxed group-hover/project:text-white transition-colors">
                  Doctorhunt is a comprehensive web application facilitating doctor appointments, enabling patients to efficiently 
                  search and book based on medical condition, time, and locality, while doctors can manage their schedules across 
                  various locations and track bookings. Developed with a robust four-microservice architecture, it leverages Docker 
                  and Kubernetes for GCP deployment. This scalable system demonstrated handling over 10,000 concurrent users within 
                  30 seconds, utilizing Prometheus, Grafana, and Apache JMeter for performance optimization and real-time monitoring.
                </p>
                <div className="flex gap-3 flex-wrap">
                <button 
                  onClick={() => setShowVideo(!showVideo)}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  {showVideo ? 'Hide Video' : 'Demo Video'}
                </button>

                <a
                  href="https://github.com/Abhi2000IIITD/DoctorHunt-Application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-4 py-2 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>

              {showVideo && (
                <video controls className="rounded-xl mt-4 w-full shadow-xl">
                  <source src={demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              </div>

              {/* Interview Dost */}
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 group/project">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-teal-400 group-hover/project:animate-bounce" />
                  <h3 className="text-xl font-semibold text-white">Interview Dost</h3>
                </div>
                <p className="text-white/80 mb-6 text-sm leading-relaxed group-hover/project:text-white transition-colors">
                  This innovative application provides personalized, last-minute interview preparation by leveraging Gemini AI 
                  to generate customized answers and introductory speeches based on the user's profile and job requirements. 
                  Users can save their details, export generated content to PDF for offline access, and receive real-time guidance 
                  through an integrated chatbot for personal doubts. This comprehensive tool aims to equip individuals with confidence
                  and tailored responses for any interview.
                </p>

                <div className="flex gap-3 flex-wrap">
                  <button 
                    onClick={() => setShowInterviewVideo(!showInterviewVideo)}
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {showInterviewVideo ? 'Hide Video' : 'Demo Video'}
                  </button>

                  <a
                    href="https://github.com/Abhi2000IIITD/InterviewDost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-4 py-2 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>

                {showInterviewVideo && (
                  <video controls className="rounded-xl mt-4 w-full shadow-xl">
                    <source src={interviewDostDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>


              {/* News App */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group/project">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-orange-400 group-hover/project:animate-pulse" />
                  <h3 className="text-xl font-semibold text-white">News Application</h3>
                </div>
                <p className="text-white/80 mb-6 text-sm leading-relaxed group-hover/project:text-white transition-colors">
                  This Kotlin-based news application offers a highly personalized news consumption experience, allowing users
                   to select news from multiple categories and search by keyword or date via News API integration. The app 
                   intelligently learns user preferences, progressively tailoring displayed news based on past category 
                   selections. Beyond core content delivery, it incorporates sensor integration for adaptive UI (e.g., 
                   auto-adjusting screen brightness based on ambient light) and features text-to-speech functionality to 
                   enhance accessibility for differently-abled users.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/App.apk"
                    download
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download APK
                  </a>

                  <a
                    href="https://github.com/shivangigaur1/News-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-4 py-2 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Speech Noise Separation */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group/project">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-purple-400 group-hover/project:animate-spin" />
                  <h3 className="text-xl font-semibold text-white">Speech Noise Separation using ML</h3>
                </div>
                <p className="text-white/80 mb-6 text-sm leading-relaxed group-hover/project:text-white transition-colors">
                  This machine learning project focuses on noise separation from speech audio. It employs a two-phase approach: initially,
                   a signal processing pipeline extracts noise components from audio files by applying various transformations 
                   (sine, cosine, exponential) followed by cepstral analysis and delta cepstrum computation. In the subsequent 
                   machine learning phase, the system extracts rich audio features, including MFCCs and spectral properties, from both 
                   noisy and pre-cleaned audio. A MultiOutputRegressor model, specifically utilizing Support Vector Regression (SVR), is
                    then trained with extensive hyperparameter tuning to accurately map these noisy audio features to their corresponding
                     clean representations, ultimately enabling the effective prediction and reconstruction of de-noised speech from new audio inputs.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Abhi2000IIITD/Speaker-Source-Separation-Using-Machine-Learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-4 py-2 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MTech Thesis Work */}
        <section id="research" className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl group-hover:animate-pulse">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">MTech Thesis Work</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
            </div>
            <ul className="space-y-4">
              {[
                'Focuses on optimizing edge device network performance.',
                'Integrates various FEC techniques (Reed-Solomon, LDPC, Turbo codes).',
                
                'Utilizes a multipath interface to send data across multiple paths.',
                'Compares multipath latency and tail latency against single-path setups.',
                'Aims to outperform single-path despite multipath overheads.',
                'Explores Transformer neural architectures for further latency reduction.',
                'Enables proactive data decoding/reformation before full reception.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0 group-hover/item:animate-pulse"></div>
                  <span className="text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Areas of Interest */}
        <section id="interests" className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl group-hover:animate-pulse">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Areas of Interest</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent"></div>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                'DBMS',
                'Operating System',
                'OOPS & System Design',
                'Web Development',
                'Mobile Development',
                'Computer Networks',
                'Machine Learning'
              ].map((interest, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white px-6 py-3 rounded-full text-sm font-medium border border-blue-400/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
}

export default App;
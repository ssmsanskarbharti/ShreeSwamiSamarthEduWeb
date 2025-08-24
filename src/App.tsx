import React, { useState } from "react";
//import hostel2 from './images/hostel2.jpg';
//import { Play } from "lucide-react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Star,
  Users,
  BookOpen,
  Home,
  CheckCircle,
  Send,
  Award,
  Shield,
  Heart,
  Target,
  GraduationCap,
  Building,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-royal-blue text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+91 9595198319</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail size={14} />
                <span>ssmsankarbharti@gmail.com</span>
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Bortal, Udgir, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/public/images/smsbps logo.jpeg" // <-- Put your logo in public/images/
                  alt="My Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-royal-blue font-merriweather">
                  S M Sanskar Bharti School
                </h1>
                <p className="text-sm text-gray-600">
                  Nurturing Knowledge & Values
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-700 hover:text-royal-blue font-medium transition-colors relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-school-gold transition-all group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-royal-blue font-medium transition-colors relative group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-school-gold transition-all group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("school")}
                  className="text-gray-700 hover:text-royal-blue font-medium transition-colors relative group"
                >
                  Academics
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-school-gold transition-all group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("hostel")}
                  className="text-gray-700 hover:text-royal-blue font-medium transition-colors relative group"
                >
                  Hostel
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-school-gold transition-all group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-royal-blue font-medium transition-colors relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-school-gold transition-all group-hover:w-full"></span>
                </button>
                {/* <a
                  href="https://www.anandipublicschool.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-school-gold hover:bg-yellow-500 text-royal-blue font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  Visit our campus
                </a> */}
                <button
                  onClick={() => scrollToSection("video")}
                  className="bg-school-gold hover:bg-yellow-500 text-royal-blue font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  {" "}
                  Visit our campus{" "}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-royal-blue p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-royal-blue w-full text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-royal-blue w-full text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("school")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-royal-blue w-full text-left"
                >
                  Academics
                </button>
                <button
                  onClick={() => scrollToSection("hostel")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-royal-blue w-full text-left"
                >
                  Hostel
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-royal-blue w-full text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection("video")}
                  className="bg-school-gold hover:bg-yellow-500 text-royal-blue font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  {" "}
                  Visit our campus{" "}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-royal-blue bg-opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-school-gold text-royal-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Welcome to Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-merriweather leading-tight">
                Shree S M Sanskar Bharti Public School
              </h1>
              <p className="text-xl mb-4 text-blue-100">Bortal, Udgir</p>
              <p className="text-2xl sm:text-3xl mb-8 text-school-gold font-merriweather">
                Nurturing Knowledge & Values
              </p>
              <p className="text-lg mb-12 text-blue-100 max-w-2xl">
                Empowering students with quality education, moral values, and
                comprehensive development in a nurturing environment that
                prepares them for future success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("school")}
                  className="bg-school-gold hover:bg-yellow-500 text-royal-blue font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore School
                </button>
                <button
                  onClick={() => scrollToSection("hostel")}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-royal-blue text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  Explore Hostel
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 font-merriweather">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <CheckCircle
                      className="text-school-gold flex-shrink-0"
                      size={20}
                    />
                    <span>Quality Education with Modern Teaching</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <CheckCircle
                      className="text-school-gold flex-shrink-0"
                      size={20}
                    />
                    <span>Experienced & Qualified Faculty</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <CheckCircle
                      className="text-school-gold flex-shrink-0"
                      size={20}
                    />
                    <span>Safe & Secure Hostel Facilities</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <CheckCircle
                      className="text-school-gold flex-shrink-0"
                      size={20}
                    />
                    <span>Comprehensive Extracurricular Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-royal-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold text-royal-blue mb-2">2500+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div className="text-center">
              <div className="bg-royal-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-3xl font-bold text-royal-blue mb-2">25+</h3>
              <p className="text-gray-600">Expert Teachers</p>
            </div>
            <div className="text-center">
              <div className="bg-royal-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-royal-blue mb-2">25+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-royal-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-3xl font-bold text-royal-blue mb-2">100%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-school-gold/10 text-royal-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Our Institution
            </div>
            <h2 className="text-4xl font-bold text-royal-blue mb-6 font-merriweather">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our dedicated leadership team brings years of experience and
              passion for education, ensuring every student receives the best
              possible learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Secretary */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 ring-4 ring-school-gold/20">
                <img
                  src="/images/secretary.jpeg"
                  alt="Nandkumar J Nalandwar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-royal-blue mb-2 font-merriweather">
                Nandkumar J Nalandwar
              </h3>
              <p className="text-school-gold font-semibold mb-4">Secretary</p>
              <p className="text-gray-600 text-sm">
                Leading the institution with vision and dedication to
                educational excellence and student development.
              </p>
            </div>

            {/* President */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 ring-4 ring-school-gold/20">
                <img
                  src="/images/avtar2.png"
                  alt="Seema N Nalandwar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-royal-blue mb-2 font-merriweather">
                Seema N Nalandwar
              </h3>
              <p className="text-school-gold font-semibold mb-4">President</p>
              <p className="text-gray-600 text-sm">
                Guiding institutional growth and ensuring quality education
                standards for comprehensive student development.
              </p>
            </div>

            {/* Principal */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 ring-4 ring-school-gold/20">
                <img
                  src="/images/avtar1.jpg"
                  alt="Nagarj Telaganeedi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-royal-blue mb-2 font-merriweather">
                Nagarj Telaganeedi
              </h3>
              <p className="text-school-gold font-semibold mb-4">Principal</p>
              <p className="text-gray-600 text-sm">
                Implementing innovative teaching methodologies and maintaining
                high academic standards for student success.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-royal-blue text-white p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="text-school-gold mr-4" size={32} />
                <h3 className="text-2xl font-bold font-merriweather">
                  Our Mission
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To provide holistic education that nurtures academic excellence,
                moral values, and character development. We are committed to
                creating confident, responsible, and compassionate individuals
                who contribute positively to society.
              </p>
            </div>
            <div className="bg-school-gold text-royal-blue p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Heart className="text-royal-blue mr-4" size={32} />
                <h3 className="text-2xl font-bold font-merriweather">
                  Our Vision
                </h3>
              </div>
              <p className="leading-relaxed">
                To be a leading educational institution that empowers students
                with knowledge, skills, and values necessary for success in an
                ever-changing world, fostering lifelong learning and global
                citizenship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Section */}
      <section id="school" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-royal-blue/10 text-royal-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Academic Excellence
            </div>
            <h2 className="text-4xl font-bold text-royal-blue mb-6 font-merriweather">
              Our School Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide a comprehensive educational experience with modern
              facilities, experienced faculty, and a nurturing environment for
              holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="School Building"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-royal-blue mb-8 font-merriweather">
                Excellence in Education
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our state-of-the-art facilities and experienced faculty ensure
                comprehensive development of every child. We focus on creating
                an environment where students can thrive academically, socially,
                and personally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle
                    className="text-school-gold mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Modern Teaching Methods
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle
                    className="text-school-gold mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Qualified Teachers
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle
                    className="text-school-gold mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Extracurricular Activities
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle
                    className="text-school-gold mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Modern Infrastructure
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle
                    className="text-school-gold mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Character Building
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle
                    className="text-school-gold mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">
                    Sports Facilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Section */}
      <section id="hostel" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-school-gold/10 text-royal-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Residential Facilities
            </div>
            <h2 className="text-4xl font-bold text-royal-blue mb-6 font-merriweather">
              Hostel Facilities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our hostel provides a safe, hygienic, and disciplined environment
              where students can focus on their studies while developing
              independence and essential life skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="./images/hostel1.jpg"
                  alt="Hostel Room"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="./images/hostel3.jpg"
                  alt="Hostel Dining"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="./images/hostel4.jpg"
                  alt="Hostel Study Room"
                  className="w-full h-48 object-cover rounded-xl shadow-lg col-span-2"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-royal-blue mb-8 font-merriweather">
                Home Away From Home
              </h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We ensure a home-like atmosphere with proper care and
                supervision. Our hostel is designed to support students' overall
                development in a secure and nurturing environment.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                With nutritious meals, comfortable accommodation, and
                round-the-clock security, students can focus entirely on their
                academic and personal growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <Home className="text-royal-blue mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-royal-blue text-lg mb-2">
                    Comfortable Rooms
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Well-furnished rooms with modern amenities
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <Shield className="text-royal-blue mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-royal-blue text-lg mb-2">
                    24/7 Security
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock supervision and safety
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <Users className="text-royal-blue mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-royal-blue text-lg mb-2">
                    Caring Staff
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Dedicated wardens and support staff
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <Heart className="text-royal-blue mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-royal-blue text-lg mb-2">
                    Nutritious Meals
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Healthy and balanced diet plans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* YouTube Video Section */}
      <section id="video" className="py-16 px-4 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Campus Tour</h2>
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PmYTzTeZlH4?si=SMClRBUBSwoaXYH4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-school-gold/10 text-royal-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Find Us
            </div>
            <h2 className="text-4xl font-bold text-royal-blue mb-6 font-merriweather">
              Visit Our Campus
            </h2>
            <p className="text-lg text-gray-700">
              Located in the heart of Bortal, Udgir - easily accessible and
              well-connected
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Bortal, Udgir Location Map"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-royal-blue bg-opacity-20 rounded-xl flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <MapPin
                      className="text-royal-blue mx-auto mb-3"
                      size={40}
                    />
                    <h4 className="font-bold text-royal-blue text-xl mb-2">
                      Bortal, Udgir
                    </h4>
                    <p className="text-gray-600">Latur, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://maps.app.goo.gl/vpHSTwZLu5JxJyho7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-royal-blue hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MapPin size={20} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-royal-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-school-gold/20 text-school-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold mb-6 font-merriweather">
              Contact Us
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Ready to join our educational family? Get in touch with us for
              admissions, inquiries, or any information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-school-gold font-merriweather">
                Reach Out to Us
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-school-gold/20 p-3 rounded-lg">
                    <MapPin className="text-school-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Campus Address
                    </h4>
                    <p className="text-blue-100 leading-relaxed">
                      Shree S M Sanskar Bharti Public School
                      <br />
                      Bortal, Udgir
                      <br />
                      Latur, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-school-gold/20 p-3 rounded-lg">
                    <Phone className="text-school-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phone Number</h4>
                    <p className="text-blue-100">+91 9595198319</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-school-gold/20 p-3 rounded-lg">
                    <Mail className="text-school-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Email Address
                    </h4>
                    <p className="text-blue-100">ssmsanskarbharti@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-800 rounded-xl">
                <h4 className="font-semibold text-lg mb-4 text-school-gold">
                  Office Hours
                </h4>
                <div className="space-y-2 text-blue-100">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-8 text-royal-blue font-merriweather">
                  Send Us a Message
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    // Replace with your WhatsApp number (with country code, no + or spaces)
                    const phoneNumber = "+919595198319";

                    // Encode message
                    const message = `Hello, my name is ${formData.name}.
                    Email: ${formData.email}
                    Message: ${formData.message}`;

                    // WhatsApp link
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;

                    // Redirect to WhatsA
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-school-gold focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-school-gold focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-school-gold focus:border-transparent resize-none transition-colors"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-royal-blue hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-school-gold rounded-full flex items-center justify-center">
                  <GraduationCap className="text-royal-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-school-gold font-merriweather">
                    SMS Bharti School
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Nurturing Knowledge & Values
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering students with quality education, moral values, and
                comprehensive development in a nurturing environment.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-school-gold">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-school-gold transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("school")}
                    className="hover:text-school-gold transition-colors"
                  >
                    Academics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("hostel")}
                    className="hover:text-school-gold transition-colors"
                  >
                    Hostel
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-school-gold transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-school-gold">
                Contact Info
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Bortal, Udgir</li>
                <li>Maharashtra, India</li>
                <li>+91 9595198319</li>
                <li>ssmsanskarbharti@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 Shree S M Sanskar Bharti Public School. All rights
                reserved.
              </p>
              <p className="text-sm text-gray-500 text-center md:text-right">
                Designed & Developed by{" "}
                <span className="relative group cursor-pointer text-school-gold font-semibold">
                  Prasad Kulkarni
                  {/* Hidden contact number - visible on hover */}
                  <span className="absolute left-1 top-full mt-3 px-5 py-1 bg-royal-blue text-yellow text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    +919607482906
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

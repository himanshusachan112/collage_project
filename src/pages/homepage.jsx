import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { apiConnector } from '../utils/Apiconnecter';
import { internroutes,jobroutes, hackathonroutes } from '../apis/apis';

const HomePage = () => {
  const authStatus = useSelector((state) => state.Auth.token);
  const [hackathons, setHackathons] = useState([]);
  const [internships, setInternships] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    
    const fetchInternships = async () => {
        try {
            console.log(internroutes.GET_INTERNSHIP_API)
            const response = await apiConnector("GET",internroutes.GET_INTERNSHIP_API);
            console.log(response.data);
            setInternships(response.data.data);
        } catch (err) {
            console.error('Error fetching internships:', err);
        }
    };
    fetchInternships();
}, []);
useEffect(() => {
  
  const fetchJobs = async () => {
      try {
          console.log(jobroutes.GET_JOB_API)
          const response = await apiConnector("GET",jobroutes.GET_JOB_API);
          console.log(response.data);
          setJobs(response.data.data);
      } catch (err) {
          console.error('Error fetching jobs:', err);
      }
  };
  fetchJobs();
}, []);

useEffect(() => {
  
  const fetchHackathons = async () => {
      try {
          const response = await apiConnector("GET",hackathonroutes.GET_HACKATHON_API);
          console.log(response.data.data)
          setHackathons(response.data.data);
      } catch (err) {
          console.error('Error fetching hackathons:', err);
      }
  };

  fetchHackathons();
}, []);


  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Job, Internship, or Hackathon</h1>
          <p className="text-lg mb-8">Explore opportunities with top companies, start your career journey, or participate in exciting hackathons.</p>
          <div className="flex justify-center gap-4">
            <Link
              to={authStatus ? "/jobs/all" : "/login"}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              to={authStatus ? "/internships/all" : "/login"}
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors"
            >
              Explore Internships
            </Link>
            <Link
              to={authStatus ? "/hackathons/all" : "/login"}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors"
            >
              Browse Hackathons
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Jobs</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                  <p className="text-gray-600 mb-4">{job.company} | {job.batch}</p>
                  <Link
                    to={authStatus ? job.link : "/login"}
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Internships</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {internships.map((internship, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{internship.role}</h3>
                  <p className="text-gray-600 mb-4">{internship.company} | {internship.batch}</p>
                  <Link
                    to={authStatus ? internship.link : "/login"}
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Featured Hackathons */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Hackathons</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {hackathons.map((hackathon, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{hackathon.name}</h3>
                  <p className="text-gray-600 mb-4">{hackathon.company} | {hackathon.status}</p>
                  <Link
                    to={authStatus ? hackathon.link : "/login"}
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* How It Works / Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1: Register</h3>
              <p className="text-gray-600">Sign up and create your profile to start applying for jobs, internships, or hackathons.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2: Browse Opportunities</h3>
              <p className="text-gray-600">Explore various listings tailored to your interests and career goals.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Step 3: Apply</h3>
              <p className="text-gray-600">Submit your application and get ready to take the next step in your career journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"This platform helped me land my dream job! The process was smooth and efficient."</p>
              <p className="font-semibold">- Jane Doe, Software Engineer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"I found an amazing internship that kick-started my career. Highly recommend!"</p>
              <p className="font-semibold">- John Smith, Marketing Intern</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"The hackathons listed here are top-notch. Great opportunities to network and learn."</p>
              <p className="font-semibold">- Alice Johnson, Hackathon Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alumni */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with Our Alumni</h2>
          <p className="text-lg mb-8">Join our community and get insights and advice from those who’ve walked the path before you.</p>
          <Link
            to={authStatus ? "/alumni-network" : "/login"}
            className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Contact Alumni
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

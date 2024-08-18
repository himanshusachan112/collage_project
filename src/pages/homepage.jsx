// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';

// const HomePage = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gray-800 text-white py-16">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold mb-4">Find Your Dream Job, Internship, or Hackathon</h1>
//           <p className="text-lg mb-8">Explore opportunities with top companies, start your career journey, or participate in exciting hackathons.</p>
//           <div className="flex justify-center gap-4">
//             <Link
//               to="/jobs"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
//             >
//               Browse Jobs
//             </Link>
//             <Link
//               to="/internships"
//               className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors"
//             >
//               Explore Internships
//             </Link>
//             <Link
//               to="/hackathons"
//               className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors"
//             >
//               Browse Hackathons
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Featured Jobs */}
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">Featured Jobs</h2>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 4,
//               },
//             }}
//           >
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
//                 <p className="text-gray-600 mb-4">Company XYZ | Remote</p>
//                 <Link
//                   to="/jobs/software-engineer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
//                 <p className="text-gray-600 mb-4">Company ABC | San Francisco, CA</p>
//                 <Link
//                   to="/jobs/frontend-developer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
//                 <p className="text-gray-600 mb-4">Company DEF | Remote</p>
//                 <Link
//                   to="/jobs/data-scientist"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">UX Designer</h3>
//                 <p className="text-gray-600 mb-4">Company GHI | New York, NY</p>
//                 <Link
//                   to="/jobs/ux-designer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             {/* Add more featured jobs as needed */}
//           </Swiper>
//         </div>
//       </section>

//       {/* Featured Internships */}
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">Featured Internships</h2>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 4,
//               },
//             }}
//           >
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Marketing Intern</h3>
//                 <p className="text-gray-600 mb-4">Company ABC | New York, NY</p>
//                 <Link
//                   to="/internships/marketing-intern"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Design Intern</h3>
//                 <p className="text-gray-600 mb-4">Company XYZ | Remote</p>
//                 <Link
//                   to="/internships/design-intern"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Engineering Intern</h3>
//                 <p className="text-gray-600 mb-4">Company DEF | San Francisco, CA</p>
//                 <Link
//                   to="/internships/engineering-intern"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Finance Intern</h3>
//                 <p className="text-gray-600 mb-4">Company GHI | Remote</p>
//                 <Link
//                   to="/internships/finance-intern"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             {/* Add more featured internships as needed */}
//           </Swiper>
//         </div>
//       </section>

//       {/* Featured Hackathons */}
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">Featured Hackathons</h2>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 4,
//               },
//             }}
//           >
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Hackathon XYZ</h3>
//                 <p className="text-gray-600 mb-4">Location | Date</p>
//                 <Link
//                   to="/hackathons/hackathon-xyz"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">Innovate 2024</h3>
//                 <p className="text-gray-600 mb-4">Location | Date</p>
//                 <Link
//                   to="/hackathons/innovate-2024"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">CodeFest</h3>
//                 <p className="text-gray-600 mb-4">Location | Date</p>
//                 <Link
//                   to="/hackathons/codefest"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">TechSprint</h3>
//                 <p className="text-gray-600 mb-4">Location | Date</p>
//                 <Link
//                   to="/hackathons/techsprint"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </SwiperSlide>
//             {/* Add more featured hackathons as needed */}
//           </Swiper>
//         </div>
//       </section>

//       {/* How It Works / Benefits */}
//       <section className="py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">How It Works</h2>
//           <div className="flex flex-wrap justify-center gap-8">
//             <div className="w-full md:w-1/3 p-4">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-4">Step 1: Create an Account</h3>
//                 <p className="text-gray-600">Sign up to create your profile and start exploring opportunities.</p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 p-4">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-4">Step 2: Browse Opportunities</h3>
//                 <p className="text-gray-600">Search for jobs and internships that match your skills and interests.</p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 p-4">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-4">Step 3: Apply and Get Hired</h3>
//                 <p className="text-gray-600">Submit your application and get ready for your new career adventure!</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
//           <div className="flex flex-wrap justify-center gap-8">
//             <div className="w-full md:w-1/3 p-4">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <p className="text-gray-600 mb-4">"This platform helped me land my dream job within weeks. Highly recommend!"</p>
//                 <p className="font-semibold">~Harsh Raj</p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 p-4">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <p className="text-gray-600 mb-4">"The internship opportunities are top-notch. I got valuable experience and made great connections."</p>
//                 <p className="font-semibold">~Adarsh Kumar</p>
//               </div>
//             </div>
//             {/* Add more testimonials as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Contact Alumni */}
//       <section className="py-12 bg-blue-600 text-white text-center">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-4">Contact Alumni</h2>
//           <p className="text-lg mb-8">Connect with our alumni to get insights, advice, and guidance for your career path.</p>
//           <Link
//             to="/alumni-contact"
//             className="bg-blue-800 px-6 py-3 rounded-lg shadow-md hover:bg-blue-900 transition-colors"
//           >
//             Contact Alumni
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomePage;

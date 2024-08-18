// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';

// const InternshipPage = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-green-600 text-white py-16">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold mb-4">Explore Internships</h1>
//           <p className="text-lg mb-8">Discover exciting internship opportunities that match your career goals.</p>
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

//       {/* All Internships */}
//       <section className="py-12">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">All Internships</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-semibold mb-2">Product Intern</h3>
//               <p className="text-gray-600 mb-4">Company JKL | Remote</p>
//               <Link
//                 to="/internships/product-intern"
//                 className="text-blue-600 hover:underline"
//               >
//                 View Details
//               </Link>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-semibold mb-2">Sales Intern</h3>
//               <p className="text-gray-600 mb-4">Company MNO | Chicago, IL</p>
//               <Link
//                 to="/internships/sales-intern"
//                 className="text-blue-600 hover:underline"
//               >
//                 View Details
//               </Link>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-semibold mb-2">HR Intern</h3>
//               <p className="text-gray-600 mb-4">Company PQR | Los Angeles, CA</p>
//               <Link
//                 to="/internships/hr-intern"
//                 className="text-blue-600 hover:underline"
//               >
//                 View Details
//               </Link>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-semibold mb-2">Operations Intern</h3>
//               <p className="text-gray-600 mb-4">Company STU | Boston, MA</p>
//               <Link
//                 to="/internships/operations-intern"
//                 className="text-blue-600 hover:underline"
//               >
//                 View Details
//               </Link>
//             </div>
//             {/* Add more internships as needed */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default InternshipPage;

// import React from "react";

// // Inline SVGs for pixel-perfect match (replace with your own SVGs if needed)
// const icons = [
//   // Quick Loan Approval (green)
//   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//     <path
//       d="M4 12l6 6L20 6"
//       stroke="#2560A8"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>,
//   // 100% Secure Process (blue shield)
//   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//     <path
//       d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
//       stroke="#2560A8"
//       strokeWidth="2.5"
//     />
//   </svg>,
//   // Transparent Process (blue doc)
//   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//     <rect
//       x="6"
//       y="3"
//       width="12"
//       height="18"
//       rx="2"
//       stroke="#2560A8"
//       strokeWidth="2.5"
//     />
//     <path
//       d="M9 7h6M9 11h6M9 15h3"
//       stroke="#2560A8"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//     />
//   </svg>,
//   // Competitive Interest Rates (blue %)
//   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//     <rect
//       x="4"
//       y="4"
//       width="16"
//       height="16"
//       rx="8"
//       stroke="#2560A8"
//       strokeWidth="2.5"
//     />
//     <path
//       d="M9 15l6-6"
//       stroke="#2560A8"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//     />
//     <circle cx="9" cy="9" r="1.5" fill="#2560A8" />
//     <circle cx="15" cy="15" r="1.5" fill="#2560A8" />
//   </svg>,
//   // Digital-First Experience (placeholder image)
//   <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
//     <span className="text-xs text-blue-600">
//       {/* SVG Rupee Icon */}
//       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M5 5H15M5 9H15M10 5V17M10 17C10 14 13 13 15 13" stroke="#11507C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     </span>
//   </div>,
//   // Dedicated Support (blue headset)
//   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" stroke="#2560A8" strokeWidth="2.5" />
//     <path
//       d="M8 15v2a2 2 0 002 2h4a2 2 0 002-2v-2"
//       stroke="#2560A8"
//       strokeWidth="2.5"
//     />
//     <path d="M8 15a4 4 0 018 0" stroke="#2560A8" strokeWidth="2.5" />
//   </svg>,
// ];

// // Angles for 6 icons (evenly spaced around the circle)
// const iconAngles = [270, 330, 30, 90, 150, 210];

// // Angles for 5 icons (evenly spaced around the inner circle)
// const innerIconAngles = [270, 342, 54, 126, 198];

// const features = [
//   {
//     icon: icons[0],
//     title: "Quick Loan Approval",
//     text: "Get your loan approved within 30 mins with minimal documentation and hassle-free process.",
//     iconBg: "bg-[#E6F4EA]",
//     color: "text-[#2560A8]",
//     side: "left",
//   },
//   {
//     icon: icons[1],
//     title: "100% Secure Process",
//     text: "Your data is protected with bank-grade security and end-to-end encryption for complete peace of mind.",
//     iconBg: "bg-[#E6F0F7]",
//     color: "text-[#2560A8]",
//     side: "left",
//   },
//   {
//     icon: icons[2],
//     title: "Transparent Process",
//     text: "No hidden charges or surprises. Clear terms and conditions with complete transparency in all dealings.",
//     iconBg: "bg-[#E6F0F7]",
//     color: "text-[#2560A8]",
//     side: "left",
//   },
//   {
//     icon: icons[3],
//     title: "Competitive Interest Rates",
//     text: "Enjoy the lowest interest rates in the market with flexible repayment options tailored to your needs.",
//     iconBg: "bg-[#E6F0F7]",
//     color: "text-[#2560A8]",
//     side: "right",
//   },
//   {
//     icon: icons[4],
//     title: "Digital-First Experience",
//     text: "Complete your entire loan journey online with our user-friendly mobile and web platform.",
//     iconBg: "bg-[#E6F0F7]",
//     color: "text-[#2560A8]",
//     side: "right",
//   },
//   {
//     icon: icons[5],
//     title: "Dedicated Support",
//     text: "Get personalized assistance from our expert loan advisors available 24/7 to help you.",
//     iconBg: "bg-[#E6F0F7]",
//     color: "text-[#2560A8]",
//     side: "right",
//   },
// ];

// const WhyChoose = () => {
//   const headingStyle = {
//     fontFamily: 'Poppins',
//     fontWeight: 500,
//     fontSize: 'clamp(24px, 5vw, 30px)',
//     lineHeight: '140%',
//     letterSpacing: '0%',
//     textAlign: 'center',
//     color: '#2D2D2D'
//   };

//   const subheadingStyle = {
//     fontFamily: 'Poppins',
//     fontWeight: 400,
//     fontSize: 'clamp(16px, 4vw, 20px)',
//     lineHeight: '140%',
//     letterSpacing: '0%',
//     textAlign: 'center',
//     color: '#0D4059'
//   };

//   const featureTitleStyle = {
//     fontFamily: 'Poppins',
//     fontWeight: 400,
//     fontSize: 'clamp(16px, 3.5vw, 20px)',
//     lineHeight: '140%',
//     letterSpacing: '0%',
//     color: '#0D4059'
//   };

//   const featureTextStyle = {
//     fontFamily: 'Poppins',
//     fontWeight: 400,
//     fontSize: 'clamp(12px, 2.5vw, 14px)',
//     lineHeight: '140%',
//     letterSpacing: '0%',
//     color: '#0D4059'
//   };

//   return (
//     <div className="bg-[#F5F5F5] py-8 sm:py-12 lg:py-16 text-[#0D4183] px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <h2
//           className="text-center mb-3 sm:mb-4 lg:mb-6"
//           style={headingStyle}
//         >
//           Why Choose Us?
//         </h2>
//         <p
//           style={subheadingStyle}
//           className="mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4"
//         >
//           Smart financing solutions for every business.
//           <br className="hidden sm:block" />
//           Transparent, reliable, and built for your success.
//         </p>
        
//         {/* Mobile Layout (stacked) */}
//         <div className="block lg:hidden">
//           {/* Central Circle */}
//           <div className="flex justify-center mb-8 sm:mb-10">
//             <div
//               className="relative flex items-center justify-center"
//               style={{ 
//                 width: 'min(280px, 80vw)', 
//                 height: 'min(280px, 80vw)' 
//               }}
//             >
//               {/* Placeholder for outer circle */}
//               <div
//                 className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-200"
//                 style={{ boxShadow: "0 0 0 6px #E6F0F7" }}
//               />
              
//               {/* Placeholder for middle circle */}
//               <div
//                 className="absolute rounded-full bg-gradient-to-br from-blue-100 to-blue-200"
//                 style={{ 
//                   width: '67.5%',
//                   height: '67.5%',
//                   top: '16.25%',
//                   left: '16.25%'
//                 }}
//               />
              
//               {/* MBL Text Centered */}
//               <div
//                 className="absolute flex items-center justify-center z-30 bg-white rounded-full shadow-lg"
//                 style={{
//                   width: '37.5%',
//                   height: '37.5%',
//                   top: '31.25%',
//                   left: '31.25%'
//                 }}
//               >
//                 <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#17407C] font-poppins">
//                   MBL
//                 </span>
//               </div>
              
//               {/* Feature Icons Around */}
//               {iconAngles.map((deg, i) => {
//                 const r = 45;
//                 const angle = (deg * Math.PI) / 180;
//                 const x = 50 + r * Math.cos(angle);
//                 const y = 50 + r * Math.sin(angle);
//                 const f = features[i];
//                 return (
//                   <span
//                     key={i}
//                     style={{
//                       position: "absolute",
//                       left: `${x}%`,
//                       top: `${y}%`,
//                       transform: "translate(-50%, -50%)",
//                       background: "#fff",
//                       borderRadius: "50%",
//                       width: '12%',
//                       height: '12%',
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       zIndex: 50,
//                       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                       border: `2px solid #E6F0F7`,
//                     }}
//                   >
//                     <span className="text-sm">{f.icon}</span>
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
          
//           {/* Features List for Mobile */}
//           <div className="space-y-4 sm:space-y-6">
//             {features.map((f, i) => (
//               <div key={i} className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg p-4 sm:p-5 shadow-sm">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 bg-blue-50 rounded-full">
//                   <span className="text-sm sm:text-base">{f.icon}</span>
//                 </div>
//                 <div className="flex-1">
//                   <h3
//                     style={featureTitleStyle}
//                     className={`mb-1 sm:mb-2 ${f.color} font-medium`}
//                   >
//                     {f.title}
//                   </h3>
//                   <p
//                     style={featureTextStyle}
//                     className="leading-relaxed"
//                   >
//                     {f.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop Layout (original with improvements) */}
//         <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 relative max-w-6xl mx-auto">
//           {/* Left Features */}
//           <div className="flex-1 flex flex-col gap-8 xl:gap-10 items-end justify-center">
//             {features.slice(0, 2).map((f, i) => (
//               <div key={i} className="flex items-start gap-3 xl:gap-4 max-w-sm">
//                 <div className="w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center flex-shrink-0">
//                   <span className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center">{f.icon}</span>
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <h3
//                     style={featureTitleStyle}
//                     className={`mb-1 xl:mb-2 ${f.color} font-medium`}
//                   >
//                     {f.title}
//                   </h3>
//                   <p
//                     style={featureTextStyle}
//                     className="leading-relaxed"
//                   >
//                     {f.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Center Circles */}
//           <div
//             className="flex flex-col items-center justify-center relative mx-6 xl:mx-8"
//             style={{ 
//               minWidth: '340px', 
//               minHeight: '340px', 
//               width: '340px', 
//               height: '340px' 
//             }}
//           >
//             {/* Placeholder for outer circle */}
//             <div
//               className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-200"
//               style={{ boxShadow: "0 0 0 6px #E6F0F7" }}
//             />
            
//             {/* Placeholder for middle circle */}
//             <div
//               className="absolute rounded-full bg-gradient-to-br from-blue-100 to-blue-200"
//               style={{ 
//                 width: '67.5%',
//                 height: '67.5%',
//                 top: '16.25%',
//                 left: '16.25%'
//               }}
//             />
            
//             {/* MBL Text Centered */}
//             <div
//               className="absolute flex items-center justify-center z-30 bg-white rounded-full shadow-lg"
//               style={{
//                 width: '37.5%',
//                 height: '37.5%',
//                 top: '31.25%',
//                 left: '31.25%'
//               }}
//             >
//               <span className="text-2xl xl:text-3xl font-bold text-[#17407C] font-poppins">
//                 MBL
//               </span>
//             </div>
            
//             {/* Feature Icons Around (mathematically placed) */}
//             {iconAngles.map((deg, i) => {
//               const r = 50;
//               const angle = (deg * Math.PI) / 180;
//               const x = 50 + r * Math.cos(angle);
//               const y = 50 + r * Math.sin(angle);
//               const f = features[i];
//               return (
//                 <span
//                   key={i}
//                   style={{
//                     position: "absolute",
//                     left: `${x}%`,
//                     top: `${y}%`,
//                     transform: "translate(-50%, -50%)",
//                     background: "#fff",
//                     borderRadius: "50%",
//                     width: '10%',
//                     height: '10%',
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     zIndex: 50,
//                     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                     border: `2px solid #E6F0F7`,
//                   }}
//                 >
//                   {f.icon}
//                 </span>
//               );
//             })}
            
//             {/* Inner circle icons */}
//             {innerIconAngles.map((deg, i) => {
//               const r = 33.75;
//               const angle = (deg * Math.PI) / 180;
//               const x = 50 + r * Math.cos(angle);
//               const y = 50 + r * Math.sin(angle);
//               const f = features[i];
//               return (
//                 <span
//                   key={i}
//                   style={{
//                     position: "absolute",
//                     left: `${x}%`,
//                     top: `${y}%`,
//                     transform: "translate(-50%, -50%)",
//                     background: "#fff",
//                     borderRadius: "50%",
//                     width: '8%',
//                     height: '8%',
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     zIndex: 35,
//                     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                     border: `2px solid #E6F0F7`,
//                   }}
//                 >
//                   {f.icon}
//                 </span>
//               );
//             })}
//           </div>
          
//           {/* Right Features */}
//           <div className="flex-1 flex flex-col gap-8 xl:gap-10 items-start justify-center">
//             {features.slice(3, 5).map((f, i) => (
//               <div key={i} className="flex items-start gap-3 xl:gap-4 max-w-sm">
//                 <div className="w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center flex-shrink-0">
//                   <span className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center">{f.icon}</span>
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <h3
//                     style={featureTitleStyle}
//                     className={`mb-1 xl:mb-2 ${f.color} font-medium`}
//                   >
//                     {f.title}
//                   </h3>
//                   <p
//                     style={featureTextStyle}
//                     className="leading-relaxed"
//                   >
//                     {f.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Bottom Features for Desktop */}
//         <div className="hidden lg:flex justify-center mt-12 xl:mt-16 gap-8 xl:gap-12">
//           {features.slice(2, 4).map((f, i) => (
//             <div key={i} className="flex items-start gap-3 xl:gap-4 max-w-sm">
//               <div className="w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center flex-shrink-0">
//                 <span className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center">{f.icon}</span>
//               </div>
//               <div className="flex flex-col justify-center">
//                 <h3
//                   style={featureTitleStyle}
//                   className={`mb-1 xl:mb-2 ${f.color} font-medium`}
//                 >
//                   {f.title}
//                 </h3>
//                 <p
//                   style={featureTextStyle}
//                   className="leading-relaxed"
//                 >
//                   {f.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoose;




import React from 'react'

const NewWhy = () => {
  return (
    <div className="w-full flex justify-center items-center py-4">
      <img
        src="/whypicccccc.png"
        alt="Why Choose Us"
        className="max-w-full h-auto object-contain"
      />
    </div>
  )
}

export default NewWhy


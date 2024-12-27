// // // // import Image from "next/image";
// // // // import { TbTruckDelivery } from "react-icons/tb";
// // // // import { RxCross2 } from "react-icons/rx";

// // // // export default function Home() {
// // // //   return (
// // // //     <div className="h-full bg p-24 text-white">
// // // //       {/* Hero Section */}
// // // //       <section className="p-8">
// // // //         <h1 className="text-4xl font-bold mb-4">
// // // //           Build ecom sites, super fast
// // // //         </h1>
// // // //         <p className="text-lg">
// // // //           This template was built to help you rapidly, and modularly, build out
// // // //           high quality e-commerce concepts using pre-built content blocks,
// // // //           components and styles. Customise and play around with the template to
// // // //           match your specific requirements, and most of all have fun with it!
// // // //         </p>
// // // //       </section>

// // // //       <div className=" grid grid-cols-2 grid-rows-2 gap-7 p-6">
// // // //         {/* Styles Section */}
// // // //         <section className="p-8 divbg">
// // // //           <h1 className="text-3xl font-bold mb-4">Use the styles</h1>
// // // //           <p className="text-lg mb-4">
// // // //             Styles in Figma mean you don’t have to repetitively enter values for
// // // //             typography, colors, and elevations, minimizing the risk of
// // // //             inconsistencies and streamlining the design process. Within this
// // // //             template, you can find color and type styles, and their definitions
// // // //             on the style guide page. To use them, simply select them from the
// // // //             Figma style panel as shown below.
// // // //           </p>
// // // //           <div className="flex  justify-between items-end">
// // // //             {/* Replace the src attributes with actual image URLs */}
// // // //             <Image
// // // //               src="/i1.png"
// // // //               width={200}
// // // //               height={200}
// // // //               className=" w-[1200ox] h-44 rounded-t-xl"
// // // //               alt="Style 1"
// // // //             />
// // // //             <Image
// // // //               src="/i2.png"
// // // //               width={200}
// // // //               height={200}
// // // //               className=" w-[1200ox] h-80 rounded-t-xl"
// // // //               alt="Style 2"
// // // //             />
// // // //             <Image
// // // //               src="/i3.png"
// // // //               width={200}
// // // //               className=" w-[1200ox] h-44 rounded-t-xl"
// // // //               height={200}
// // // //               alt="Style 3"
// // // //             />
// // // //           </div>
// // // //         </section>
// // // //         <section className="p-8 divbg">
// // // //           <h1 className="text-3xl font-bold mb-4">Use the components</h1>
// // // //           <p className="text-lg mb-4">
// // // //             There’s a bunch of pre-configured components for you to use in this
// // // //             free template. Simply go to the Style Guide page and under the
// // // //             components header you can see everything included.
// // // //             <br />
// // // //             Buttons, steppers, filter options and more for you to integrate into
// // // //             your screens and modify to your tastes and requirements.
// // // //           </p>
// // // //           <div className="flex gap-4">
// // // //             {/* Replace the src attributes with actual image URLs */}
// // // //             <div>
// // // //               <Image
// // // //                 src="/g2.jpeg"
// // // //                 width={200}
// // // //                 height={200}
// // // //                 alt="Style 1"
// // // //                 className="overflow-hidden h-64"
// // // //               />
// // // //               The Dandy Chair
// // // //               <br />
// // // //               £250
// // // //             </div>
// // // //             <div>
// // // //               <Image
// // // //                 src="/lp.jpeg"
// // // //                 width={200}
// // // //                 height={200}
// // // //                 className="overflow-hidden h-64"
// // // //                 alt="Style 1"
// // // //               />
// // // //               Small tables
// // // //               <br />
// // // //               £250
// // // //             </div>
// // // //             <div className=" flex flex-col justify-between">
// // // //               <button className=" btn1 p-2 flex justify-center items-center bg-black ">Button</button>
// // // //               <button className=" btn1 p-2 flex justify-center items-center bg-black ">Button</button>
// // // //               <button className=" btn1 p-2 flex justify-center items-center bg-black ">Button</button>
// // // //               <button className=" btn1 p-2 flex justify-center items-center bg-black ">Button</button>
// // // //             </div>
// // // //             <div>
// // // //               <input type="checkbox" name="" id="" />
// // // //               <label className=" px-1" htmlFor="">
// // // //                 Furniture
// // // //               </label>
// // // //               <br />
// // // //               <input type="checkbox" name="" id="" />
// // // //               <label className=" px-1" htmlFor="">
// // // //                 Homeware
// // // //               </label>
// // // //               <br />
// // // //               <input type="checkbox" name="" id="" />
// // // //               <label className=" px-1" htmlFor="">
// // // //                 Vases
// // // //               </label>
// // // //               <br />
// // // //               <input type="checkbox" name="" id="" />
// // // //               <label className=" px-1" htmlFor="">
// // // //                 Products
// // // //               </label>
// // // //               <br />
// // // //               <input type="checkbox" name="" id="" />
// // // //               <label className=" px-1" htmlFor="">
// // // //                 Components
// // // //               </label>
// // // //               <br />
// // // //               <input type="checkbox" name="" id="" />
// // // //               <label className=" px-1" htmlFor="">
// // // //                 Styleguide
// // // //               </label>
// // // //               <br />
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //         {/* Layouts Section */}
// // // //         <section className="p-8 divbg ">
// // // //           <div>
// // // //             <h1 className="text-3xl font-bold mb-4">Check the layouts</h1>
// // // //             <p className="text-lg mb-4">
// // // //               As well as components and styles, we’ve built a bunch of layouts
// // // //               in both mobile and desktop sizes. Play around with replacing and
// // // //               modifying the nested content blocks. To switch devices, simply use
// // // //               the content block property ‘device’ to toggle between mobile and
// // // //               desktop.
// // // //             </p>
// // // //           </div>
// // // //           <div className="flex gap-4">
// // // //             <Image src="/f1.png" width={200} height={200} alt="Layout 1" />
// // // //             <Image src="/f2.png" width={200} height={200} alt="Layout 2" />
// // // //             <Image src="/f3.png" width={200} height={200} alt="Layout 3" />
// // // //           </div>
// // // //         </section>

// // // //         {/* Content Blocks Section */}
// // // //         <section className="p-8  divbg">
// // // //           <h1 className="text-3xl font-bold mb-4">Use the content blocks</h1>
// // // //           <p className="text-lg mb-4">
// // // //             We’ve built out a multitude of content blocks for you to use in your
// // // //             landing pages. From hero sections, forms, CTAs to pricing sections.
// // // //             Everything you need to get started building polished, modern landing
// // // //             pages.
// // // //           </p>
// // // //           <div className="flex">
// // // //             <Image src="/k1.jpeg" width={300} height={200} alt="Block 1" />
// // // //             <div className="bg-white text-black p-4  flex flex-col justify-between  shadow-lg">
// // // //               <div>
// // // //                 <h1 className="text-2xl font-bold mb-4">
// // // //                   Join the club and get the benefits
// // // //                 </h1>
// // // //                 <p className="mb-4">
// // // //                   Sign up for our newsletter and receive exclusive offers on new
// // // //                   ranges, sales, pop-up stores, and more.
// // // //                 </p>
// // // //               </div>
// // // //               <div>
// // // //                 <form
// // // //                   action="#"
// // // //                   method="POST"
// // // //                   className=" relative -top-24 flex"
// // // //                 >
// // // //                   <input
// // // //                     type="email"
// // // //                     name="email"
// // // //                     id="email"
// // // //                     placeholder="Enter your email"
// // // //                     className="border p-2 w-full mb-4 rounded"
// // // //                   />
// // // //                   <button
// // // //                     type="submit"
// // // //                     className="bg-blue-500 text-white py-2 px-6 rounded btn"
// // // //                   >
// // // //                     Sign up
// // // //                   </button>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import Image from "next/image";

// // // export default function Home() {
// // //   return (
// // //     <div className="h-full bg px-24 py-16 text-white">
// // //       {/* Hero Section */}
// // //       <section className="mb-12">
// // //         <h1 className="text-4xl font-extrabold mb-4">Build ecom sites, super fast</h1>
// // //         <p className="text-lg font-light">
// // //           This template was built to help you rapidly, and modularly, build out high-quality
// // //           e-commerce concepts using pre-built content blocks, components, and styles.
// // //           Customize and play around with the template to match your specific requirements, and
// // //           most of all have fun with it!
// // //         </p>
// // //       </section>

// // //       {/* Main Grid Layout */}
// // //       <div className="grid grid-cols-2 gap-8">
// // //         {/* Styles Section */}
// // //         <section className="divbg p-6">
// // //           <h2 className="text-3xl font-bold mb-4">Use the styles</h2>
// // //           <p className="text-sm font-light mb-6">
// // //             Styles in Figma mean you don’t have to repetitively enter values for typography,
// // //             colors, and elevations, minimizing the risk of inconsistencies and streamlining
// // //             the design process.
// // //           </p>
// // //           <div className="flex justify-between">
// // //             <Image src="/i1.png" width={120} height={120} alt="Image 1" className="rounded-md" />
// // //             <Image src="/i2.png" width={120} height={120} alt="Image 2" className="rounded-md" />
// // //             <Image src="/i3.png" width={120} height={120} alt="Image 3" className="rounded-md" />
// // //           </div>
// // //         </section>

// // //         {/* Components Section */}
// // //         <section className="divbg p-6">
// // //           <h2 className="text-3xl font-bold mb-4">Use the components</h2>
// // //           <p className="text-sm font-light mb-6">
// // //             There’s a bunch of pre-configured components for you to use in this free template.
// // //             Simply go to the Style Guide page and under the components header you can see
// // //             everything included.
// // //           </p>
// // //           <div className="grid grid-cols-2 gap-4">
// // //             <Image src="/g2.jpeg" width={150} height={150} alt="Component 1" className="rounded" />
// // //             <Image src="/lp.jpeg" width={150} height={150} alt="Component 2" className="rounded" />
// // //           </div>
// // //         </section>

// // //         {/* Layouts Section */}
// // //         <section className="divbg p-6">
// // //           <h2 className="text-3xl font-bold mb-4">Check the layouts</h2>
// // //           <p className="text-sm font-light mb-6">
// // //             As well as components and styles, we’ve built a bunch of layouts in both mobile
// // //             and desktop sizes.
// // //           </p>
// // //           <div className="flex gap-4">
// // //             <Image src="/f1.png" width={100} height={100} alt="Layout 1" className="rounded-md" />
// // //             <Image src="/f2.png" width={100} height={100} alt="Layout 2" className="rounded-md" />
// // //             <Image src="/f3.png" width={100} height={100} alt="Layout 3" className="rounded-md" />
// // //           </div>
// // //         </section>

// // //         {/* Content Blocks Section */}
// // //         <section className="divbg p-6">
// // //           <h2 className="text-3xl font-bold mb-4">Use the content blocks</h2>
// // //           <p className="text-sm font-light mb-6">
// // //             We’ve built out a multitude of content blocks for you to use in your landing pages.
// // //             From hero sections, forms, CTAs to pricing sections.
// // //           </p>
// // //           <div className="flex gap-4 items-center">
// // //             <Image src="/k1.jpeg" width={250} height={150} alt="Content Block 1" />
// // //             <div className="bg-white p-6 rounded-md text-black shadow-md">
// // //               <h3 className="text-lg font-bold mb-4">Join the club and get the benefits</h3>
// // //               <p className="text-sm mb-4">
// // //                 Sign up for our newsletter and receive exclusive offers on new ranges, sales,
// // //                 pop-up stores, and more.
// // //               </p>
// // //               <form className="flex items-center">
// // //                 <input
// // //                   type="email"
// // //                   placeholder="Enter your email"
// // //                   className="input mr-4"
// // //                 />
// // //                 <button type="submit" className="btn">Sign up</button>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </div>
// // //   );
// // // }






// // import Image from "next/image";
// // import { TbTruckDelivery } from "react-icons/tb";
// // import { RxCross2 } from "react-icons/rx";

// // export default function Home() {
// //   return (
// //     <div className="h-full bg p-24 text-white">
// //       <section className="p-8">
// //         <h1 className="text-4xl font-bold mb-4">
// //           Build ecom sites, super fast
// //         </h1>
// //         <p className="text-lg">
// //           This template was built to help you rapidly, and modularly, build out
// //           high quality e-commerce concepts using pre-built content blocks,
// //           components and styles. Customise and play around with the template to
// //           match your specific requirements, and most of all have fun with it!
// //         </p>
// //       </section>

// //       <div className="grid grid-cols-2 grid-rows-2 gap-24 p-6">
// //         <section className="p-8 divbg">
// //           <h1 className="text-3xl font-bold mb-4">Use the styles</h1>
// //           <p className="text-lg mb-4">
// //             Styles in Figma mean you don’t have to repetitively enter values for
// //             typography, colors, and elevations, minimizing the risk of
// //             inconsistencies and streamlining the design process. Within this
// //             template, you can find color and type styles, and their definitions
// //             on the style guide page. To use them, simply select them from the
// //             Figma style panel as shown below.
// //           </p>
// //           <div className="flex justify-between items-end">
// //             <Image
// //               src="/i1.png"
// //               width={200}
// //               height={200}
// //               className="w-[1200ox] h-44 rounded-t-xl"
// //               alt="Style 1"
// //             />
// //             <Image
// //               src="/i2.png"
// //               width={200}
// //               height={200}
// //               className="w-[1200ox] h-80 rounded-t-xl"
// //               alt="Style 2"
// //             />
// //             <Image
// //               src="/i3.png"
// //               width={200}
// //               className="w-[1200ox] h-44 rounded-t-xl"
// //               height={200}
// //               alt="Style 3"
// //             />
// //           </div>
// //         </section>
// //         <section className="p-8 divbg">
// //           <h1 className="text-3xl font-bold mb-4">Use the components</h1>
// //           <p className="text-lg mb-4">
// //             There’s a bunch of pre-configured components for you to use in this
// //             free template. Simply go to the Style Guide page and under the
// //             components header you can see everything included.
// //             <br />
// //             Buttons, steppers, filter options and more for you to integrate into
// //             your screens and modify to your tastes and requirements.
// //           </p>
// //           <div className="flex gap-4">
// //             <div>
// //               <Image
// //                 src="/g2.jpeg"
// //                 width={200}
// //                 height={200}
// //                 alt="Style 1"
// //                 className="overflow-hidden h-64"
// //               />
// //               The Dandy Chair
// //               <br />
// //               £250
// //             </div>
// //             <div>
// //               <Image
// //                 src="/lp.jpeg"
// //                 width={200}
// //                 height={200}
// //                 className="overflow-hidden h-64"
// //                 alt="Style 1"
// //               />
// //               Small tables
// //               <br />
// //               £250
// //             </div>
// //             <div className="flex flex-col justify-between">
// //               <button className="btn1 p-2 flex justify-center items-center bg-black">Button</button>
// //               <button className ="btn1 p-2 flex justify-center items-center bg-black">Button</button>
// //               <button className="btn1 p-2 flex justify-center items-center bg-black">Button</button>
// //               <button className="btn1 p-2 flex justify-center items-center bg-black">Button</button>
// //             </div>
// //             <div>
// //               <input type="checkbox" name="" id="" />
// //               <label className="px-1" htmlFor="">
// //                 Furniture
// //               </label>
// //               <br />
// //               <input type="checkbox" name="" id="" />
// //               <label className="px-1" htmlFor="">
// //                 Homeware
// //               </label>
// //               <br />
// //               <input type="checkbox" name="" id="" />
// //               <label className="px-1" htmlFor="">
// //                 Vases
// //               </label>
// //               <br />
// //               <input type="checkbox" name="" id="" />
// //               <label className="px-1" htmlFor="">
// //                 Products
// //               </label>
// //               <br />
// //               <input type="checkbox" name="" id="" />
// //               <label className="px-1" htmlFor="">
// //                 Components
// //               </label>
// //               <br />
// //               <input type="checkbox" name="" id="" />
// //               <label className="px-1" htmlFor="">
// //                 Styleguide
// //               </label>
// //               <br />
// //             </div>
// //           </div>
// //         </section>
// //         <section className="p-8 divbg">
// //           <div>
// //             <h1 className="text-3xl font-bold mb-4">Check the layouts</h1>
// //             <p className="text-lg mb-4">
// //               As well as components and styles, we’ve built a bunch of layouts
// //               in both mobile and desktop sizes. Play around with replacing and
// //               modifying the nested content blocks. To switch devices, simply use
// //               the content block property ‘device’ to toggle between mobile and desktop.
// //             </p>
// //           </div>
// //           <div className="flex gap-4">
// //             <Image src="/f1.png" width={200} height={200} alt="Layout 1" />
// //             <Image src="/f2.png" width={200} height={200} alt="Layout 2" />
// //             <Image src="/f3.png" width={200} height={200} alt="Layout 3" />
// //           </div>
// //         </section>

// //         <section className="p-8 divbg">
// //           <h1 className="text-3xl font-bold mb-4">Use the content blocks</h1>
// //           <p className="text-lg mb-4">
// //             We’ve built out a multitude of content blocks for you to use in your
// //             landing pages. From hero sections, forms, CTAs to pricing sections.
// //             Everything you need to get started building polished, modern landing
// //             pages.
// //           </p>
// //           <div className="flex">
// //             <Image src="/k1.jpeg" width={300} height={200} alt="Block 1" />
// //             <div className="bg-white text-black p-4 flex flex-col justify-between shadow-lg">
// //               <div>
// //                 <h1 className="text-2xl font-bold mb-4">
// //                   Join the club and get the benefits
// //                 </h1>
// //                 <p className="mb-4">
// //                   Sign up for our newsletter and receive exclusive offers on new
// //                   ranges, sales, pop-up stores, and more.
// //                 </p>
// //               </div>
// //               <div>
// //                 <form action="#" method="POST" className="relative -top-24 flex">
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     id="email"
// //                     placeholder="Enter your email"
// //                     className="border p-2 w-full mb-4 rounded"
// //                   />
// //                   <button
// //                     type="submit"
// //                     className="bg-blue-500 text-white py-2 px-6 rounded btn"
// //                   >
// //                     Sign up
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }







// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="h-full bg-primary p-24 text-white">
//       {/* Hero Section */}
//       <section className="mb-16">
//         <h1 className="text-5xl font-extrabold mb-6 leading-tight">
//           Build ecom sites, super fast
//         </h1>
//         <p className="text-lg leading-relaxed">
//           This template was built to help you rapidly, and modularly, build out
//           high quality e-commerce concepts using pre-built content blocks,
//           components and styles. Customise and play around with the template to
//           match your specific requirements, and most of all have fun with it!
//         </p>
//       </section>

//       {/* Content Grid */}
//       <div className="grid grid-cols-2 gap-16">
//         {/* Styles Section */}
//         <section className="p-8 bg-secondary rounded-lg">
//           <h2 className="text-3xl font-bold mb-4">Use the styles</h2>
//           <p className="text-lg mb-6 leading-relaxed">
//             Styles in Figma mean you don’t have to repetitively enter values for
//             typography, colors, and elevations, minimizing the risk of
//             inconsistencies and streamlining the design process. Within this
//             template, you can find color and type styles, and their definitions
//             on the style guide page. To use them, simply select them from the
//             Figma style panel as shown below.
//           </p>
//           <div className="flex justify-between">
//             <Image
//               src="/i1.png"
//               width={150}
//               height={150}
//               className="rounded-xl"
//               alt="Style 1"
//             />
//             <Image
//               src="/i2.png"
//               width={150}
//               height={150}
//               className="rounded-xl"
//               alt="Style 2"
//             />
//             <Image
//               src="/i3.png"
//               width={150}
//               height={150}
//               className="rounded-xl"
//               alt="Style 3"
//             />
//           </div>
//         </section>

//         {/* Components Section */}
//         <section className="p-8 bg-secondary rounded-lg">
//           <h2 className="text-3xl font-bold mb-4">Use the components</h2>
//           <p className="text-lg mb-6 leading-relaxed">
//             There’s a bunch of pre-configured components for you to use in this
//             free template. Simply go to the Style Guide page and under the
//             components header you can see everything included. Buttons,
//             steppers, filter options, and more for you to integrate into your
//             screens and modify to your tastes and requirements.
//           </p>
//           <div className="flex gap-4">
//             <div>
//               <Image
//                 src="/g2.jpeg"
//                 width={150}
//                 height={150}
//                 className="rounded-lg"
//                 alt="Chair"
//               />
//               <p className="text-center mt-2">The Dandy Chair<br />£250</p>
//             </div>
//             <div>
//               <Image
//                 src="/lp.jpeg"
//                 width={150}
//                 height={150}
//                 className="rounded-lg"
//                 alt="Table"
//               />
//               <p className="text-center mt-2">Small Tables<br />£250</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <button className="btn bg-black text-white py-2 px-4 rounded">
//                 Button
//               </button>
//               <button className="btn bg-black text-white py-2 px-4 rounded">
//                 Button
//               </button>
//               <button className="btn bg-black text-white py-2 px-4 rounded">
//                 Button
//               </button>
//               <button className="btn bg-black text-white py-2 px-4 rounded">
//                 Button
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Layout Section */}
//         <section className="p-8 bg-secondary rounded-lg">
//           <h2 className="text-3xl font-bold mb-4">Check the layouts</h2>
//           <p className="text-lg mb-6 leading-relaxed">
//             As well as components and styles, we’ve built a bunch of layouts in
//             both mobile and desktop sizes. Play around with replacing and
//             modifying the nested content blocks. To switch devices, simply use
//             the content block property ‘device’ to toggle between mobile and desktop.
//           </p>
//           <div className="flex gap-4">
//             <Image src="/f1.png" width={150} height={150} alt="Layout 1" />
//             <Image src="/f2.png" width={150} height={150} alt="Layout 2" />
//             <Image src="/f3.png" width={150} height={150} alt="Layout 3" />
//           </div>
//         </section>

//         {/* Content Blocks Section */}
//         <section className="p-8 bg-secondary rounded-lg">
//           <h2 className="text-3xl font-bold mb-4">Use the content blocks</h2>
//           <p className="text-lg mb-6 leading-relaxed">
//             We’ve built out a multitude of content blocks for you to use in your
//             landing pages. From hero sections, forms, CTAs to pricing sections.
//             Everything you need to get started building polished, modern landing pages.
//           </p>
//           <div className="flex gap-4">
//             <Image
//               src="/k1.jpeg"
//               width={200}
//               height={150}
//               className="rounded-lg"
//               alt="Block 1"
//             />
//             <div className="bg-white text-black p-4 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">
//                 Join the club and get the benefits
//               </h3>
//               <p className="mb-4">
//                 Sign up for our newsletter and receive exclusive offers on new
//                 ranges, sales, pop-up stores, and more.
//               </p>
//               <form className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="border p-2 flex-grow rounded-l-lg"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white py-2 px-6 rounded-r-lg"
//                 >
//                   Sign up
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-primary p-6 md:p-12 lg:p-24 text-white">
      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Build e-commerce sites, super fast
        </h1>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          This template was built to help you rapidly build out high-quality e-commerce concepts using pre-built content blocks, components, and styles. Customize and experiment to fit your specific needs, and most of all, have fun!
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
        <section className="p-8 bg-secondary rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Use the Styles</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Figma styles make it easier to maintain consistent typography, colors, and elevations. This template uses these pre-defined styles, and you can find the definitions on the Style Guide page.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <Image src="/i1.png" width={150} height={150} className="rounded-lg" alt="Style 1" />
            <Image src="/i2.png" width={150} height={150} className="rounded-lg" alt="Style 2" />
            <Image src="/i3.png" width={150} height={150} className="rounded-lg" alt="Style 3" />
          </div>
        </section>

        <section className="p-8 bg-secondary rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Use the Components</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            This template comes with a variety of pre-configured components: buttons, steppers, filters, and more. You can find everything in the Style Guide page to customize and integrate them into your projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="w-1/3 sm:w-1/4">
              <Image src="/g2.jpeg" width={150} height={150} className="rounded-lg" alt="Chair" />
              <p className="text-center mt-2">The Dandy Chair<br />£250</p>
            </div>
            <div className="w-1/3 sm:w-1/4">
              <Image src="/lp.jpeg" width={150} height={150} className="rounded-lg" alt="Table" />
              <p className="text-center mt-2">Small Tables<br />£250</p>
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-1/3">
              <button className="bg-black text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-opacity-80">
                Button
              </button>
              <button className="bg-black text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-opacity-80">
                Button
              </button>
              <button className="bg-black text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-opacity-80">
                Button
              </button>
              <button className="bg-black text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-opacity-80">
                Button
              </button>
            </div>
          </div>
        </section>

        <section className="p-8 bg-secondary rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Check the Layouts</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            In addition to components and styles, this template offers multiple layout options for both mobile and desktop. Switch between devices using the 'device' property.
          </p>
          <div className="flex gap-4">
            <Image src="/f1.png" width={150} height={150} alt="Layout 1" />
            <Image src="/f2.png" width={150} height={150} alt="Layout 2" />
            <Image src="/f3.png" width={150} height={150} alt="Layout 3" />
          </div>
        </section>

        <section className="p-8 bg-secondary rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Use the Content Blocks</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            From hero sections to pricing tables, we’ve designed a wide variety of content blocks to help you get started on your landing pages. Use these blocks to create modern, polished pages quickly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Image src="/k1.jpeg" width={200} height={150} className="rounded-lg" alt="Content Block 1" />
            <div className="bg-white text-black p-4 rounded-lg shadow-xl w-full sm:w-1/2 md:w-1/3">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Join the club and get the benefits</h3>
              <p className="mb-4">
                Sign up for our newsletter and receive exclusive offers, sales, and more.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border p-2 flex-grow rounded-l-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-r-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
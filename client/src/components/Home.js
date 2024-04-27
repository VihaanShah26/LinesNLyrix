// // reactFunctionalEportComponent 
// import * as React from "react";
// import {useEffect, useState} from 'react';


// function Home() {

//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch('/api')
//       .then(response => response.json())
//       .then(data => setBackendData(data));
//   } , []);
  
//   return (
//     <div className="flex flex-col justify-center bg-zinc-900">
//       <div className="flex flex-col items-center pt-2 w-full bg-red-500 shadow-md max-md:max-w-full">
//         <div className="flex gap-5 justify-between items-end px-5 w-full text-2xl text-black max-w-[1204px] max-md:flex-wrap max-md:max-w-full">
//           <div className="justify-center items-start px-16 py-2.5 mt-52 whitespace-nowrap bg-blue-950 rounded-[30px] text-neutral-100 max-md:px-5 max-md:mt-10">
//             Home
//           </div>
//           <div className="justify-center items-start px-14 py-2.5 mt-52 whitespace-nowrap bg-yellow-100 rounded-[30px] max-md:px-5 max-md:mt-10">
//             Games
//           </div>
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="self-stretch w-full aspect-[2.08] max-md:max-w-full"
//           />
//           <div className="justify-center items-start px-12 py-2.5 mt-52 bg-yellow-100 rounded-[30px] max-md:px-5 max-md:mt-10">
//             About us
//           </div>
//           <div className="justify-center items-start px-14 py-2.5 mt-52 bg-yellow-100 rounded-[30px] max-md:px-5 max-md:mt-10">
//             Log In
//           </div>
//         </div>
//         <div className="justify-center items-center self-stretch px-16 py-3 mt-3 w-full text-2xl italic font-bold bg-blue-950 text-neutral-100 max-md:px-5 max-md:max-w-full">
//           From lyrics to legends: Play, Guess and Rise with Lines N Lyrix
//         </div>
//         <div className="justify-center items-center pt-6 pr-16 pl-16 mt-9 -mb-0.5 max-w-full text-6xl bg-blue-950 rounded-[30px] text-zinc-50 w-[377px] max-md:px-5 max-md:text-4xl">
//           <h6>PLAY NOW</h6>
//         </div>
//         <div className="px-5 mt-8 w-full max-w-[1157px] max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow text-3xl max-md:mt-10">
//                 <div className="justify-center items-center px-16 py-5 mx-5 bg-yellow-100 rounded-[30px] text-fuchsia-950 max-md:px-5 max-md:mx-2.5">
//                   How to play?
//                 </div>
//                 <div className="flex flex-col justify-center px-5 py-2 mt-4 text-black shadow-sm bg-purple-950">
//                   <div className="px-4 pt-6 pb-24 bg-zinc-50 max-md:pr-5">
//                     text here/video
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow text-3xl max-md:mt-10">
//                 <div className="justify-center items-start px-14 py-5 mx-5 max-w-full bg-yellow-100 rounded-[30px] text-fuchsia-950 w-[276px] max-md:px-5 max-md:mx-2.5">
//                   Daily Challenge
//                 </div>
//                 <div className="flex flex-col justify-center px-5 py-2 mt-4 text-black shadow-sm bg-blue-950">
//                   <div className="px-5 pt-7 pb-20 bg-neutral-100">
//                     launches daily challenge game
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow text-3xl text-black max-md:mt-10">
//                 <div className="justify-center px-16 py-5 mx-5 bg-yellow-100 rounded-[30px] max-md:pr-7 max-md:pl-6 max-md:mx-2.5">
//                   Featured Game
//                 </div>
//                 <div className="flex flex-col justify-center px-5 py-2 mt-4 shadow-sm bg-blue-950">
//                   <div className="justify-center items-start px-5 py-7 bg-zinc-50 max-md:pr-5">
//                     launches special edition game
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="justify-center items-start self-stretch px-6 py-5 mt-11 w-full text-3xl bg-blue-950 text-zinc-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           COntact InFO: Insta, Facebook, etc
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import * as React from "react";

const NavItem = ({ children, className }) => (
  <div className={`justify-center items-start px-14 py-2.5 mt-52 whitespace-nowrap bg-yellow-100 rounded-[30px] max-md:px-5 max-md:mt-10 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ children, className }) => (
  <div className={`justify-center items-start px-14 py-5 mx-5 max-w-full bg-yellow-100 rounded-[30px] text-fuchsia-950 w-[276px] max-md:px-5 max-md:mx-2.5 ${className}`}>
    {children}
  </div>
);

const SectionContent = ({ children, className }) => (
  <div className={`flex flex-col justify-center px-5 py-2 mt-4 text-black shadow-sm ${className}`}>
    <div className="px-5 pt-7 pb-20 bg-neutral-100">{children}</div>
  </div>
);

function Home() {
  return (
    <div className="flex flex-col justify-center bg-zinc-900">
      <header className="flex flex-col items-center pt-2 w-full bg-red-500 shadow-md max-md:max-w-full">
        <nav className="flex gap-5 justify-between items-end px-5 w-full text-2xl text-black max-w-[1204px] max-md:flex-wrap max-md:max-w-full">
          <NavItem className="justify-center items-start px-16 py-2.5 mt-52 whitespace-nowrap bg-blue-950 rounded-[30px] text-neutral-100 max-md:px-5 max-md:mt-10">
            Home
          </NavItem>
          <NavItem>Games</NavItem>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d155bf47-bc12-405d-b98f-a293f536adea?apiKey=25144e7b814f40679153ac4d2189f68d&" alt="Game banner" className="self-stretch w-full aspect-[2.08] max-md:max-w-full" />
          <NavItem>About us</NavItem>
          <NavItem>Log In</NavItem>
        </nav>
        <h1 className="justify-center items-center self-stretch px-16 py-3 mt-3 w-full text-2xl italic font-bold bg-blue-950 text-neutral-100 max-md:px-5 max-md:max-w-full">
          From lyrics to legends: Play, Guess and Rise with Lines N Lyrix
        </h1>
        <button className="justify-center items-center px-16 py-6 mt-9 max-w-full text-6xl bg-blue-950 rounded-[30px] text-zinc-50 w-[362px] max-md:px-5 max-md:text-4xl">
          PLAY NOW
        </button>
      </header>
      <main className="px-5 mt-8 w-full max-w-[1157px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-3xl max-md:mt-10">
              <SectionTitle className="justify-center items-center px-16 py-5 mx-5 bg-yellow-100 rounded-[30px] text-fuchsia-950 max-md:px-5 max-md:mx-2.5">
                How to play?
              </SectionTitle>
              <SectionContent className="bg-purple-950">
                <div className="px-4 pt-6 pb-24 bg-zinc-50 max-md:pr-5">text here/video</div>
              </SectionContent>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-3xl max-md:mt-10">
              <SectionTitle>Daily Challenge</SectionTitle>
              <SectionContent className="bg-blue-950">launches daily challenge game</SectionContent>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-3xl text-black max-md:mt-10">
              <SectionTitle className="justify-center px-16 py-5 mx-5 bg-yellow-100 rounded-[30px] max-md:pr-7 max-md:pl-6 max-md:mx-2.5">
                Featured Game
              </SectionTitle>
              <SectionContent className="bg-blue-950">launches special edition game</SectionContent>
            </div>
          </section>
        </div>
      </main>
      <footer className="justify-center items-start self-stretch px-6 py-5 mt-11 w-full text-3xl bg-blue-950 text-zinc-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Contact Info: Insta, Facebook, etc
      </footer>
    </div>
  );
}

export default Home;
import Image from "next/image";
import WhatsAppIcon from "./components/WhatsAppIcon";
import GmailLink from "./components/GmailLink";
import GoogleMapDirections from "./components/GoogleMapDirections";

export default function Home() {
  return (
    <div>
      <header className="bg-white shadow-md py-3 sm:py-4 md:py-4">
        <div className="px-3">
          <h1 className="text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-poppins text-center text-shadow-black">
            Sanvith Coaching Centre
          </h1>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="bg-sky-500 text-white text-xl sm:text-2xl font-semibold px-4 py-2.5 sm:py-3 rounded text-center">
              Exam Excellence
            </p>
            <div className="bg-black p-4 rounded ">
              <p className="text-white text-xl sm:text-2xl mb-2">Class: 1st to 8th All Subjects</p>
              <p className="text-white text-xl sm:text-2xl mb-2">Class: 9th 10th Science and English</p>
              <p className="text-white text-xl sm:text-2xl mb-0">Class: 11th and 12th Biology</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-around mt-4 sm:mt-6">
            <div className="p-2 sm:mx-1 mb-4 sm:mb-0">
              <p className="text-orange-600 font-semibold text-lg sm:text-xl">Adv. Mam Pavitra Tyagi</p>
              <p className="font-semibold text-sm sm:text-base">Lecturer in B.Ed. College (GZB)</p>
              <p className="font-semibold text-sm sm:text-base">Qualification B.Sc., M.Sc., B.Ed, M.Ed, M.A(Eng) & L.L.B</p>
              <p className="font-semibold text-sm sm:text-base">Total Experience 10+ Years</p>
              <div className="bg-sky-500 h-[2.5px] mr-5 mt-1 sm:mt-2"></div>
              <ul className="list-none mt-1 sm:mt-2">
                <li><span className="sky-blue-square"></span>MPS Public School, Muradnagar</li>
                <li><span className="sky-blue-square"></span>GPS Public School, Ghaziabad</li>
                <li><span className="sky-blue-square"></span>Wisdom International Public School, Ghaziabad</li>
                <li><span className="sky-blue-square"></span>Sankal Institute of Education Duhai Ghaziabad(B.Ed.&D.EL.Ed.)</li>
                <li><span className="sky-blue-square"></span>UIMT - Unique Institute of Management & Technology(B.Ed.&D.EL.Ed.)</li>
                <li><span className="sky-blue-square"></span>GIMT - Ghaziabad Institute of Management & Technology(B.Ed.&D.EL.Ed.)</li>
              </ul>
            </div>
            <div className="flex flex-col sm:mx-1 items-center">
              <p className="bg-orange-600 p-2 text-white text-xl rounded text-center font-semibold">
                ICSE, CBSE and UP Board
              </p>
              <div className="">
                <Image src="/assets/coaching.jpg" className="rounded" alt="Tuition" width={330} height={270} />
              </div>
            </div>
          </div>

          <div className="flex justify-around mt-4 sm:mt-6">
            <div className="mx-3 mb-4 sm:mb-0 transform transition-transform duration-300 hover:scale-110">
              <WhatsAppIcon className="w-10 h-10 text-green-500 hover:text-green-700" />
            </div>
            <div className="mr-3 mb-4 sm:mb-0 transform transition-transform duration-300 hover:scale-110">
              <GmailLink className="w-10 h-10 text-red-500 hover:text-red-700" />
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <GoogleMapDirections className="w-10 h-10 text-blue-500 hover:text-blue-700" />
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col  mt-6 sm:mt-10 lg:mt-14 bg-gray-100 ">
        <div className="w-full flex justify-center">
          <h1 className="bg-yellow-500 font-semibold text-xl sm:text-2xl lg:text-3xl text-center p-1.5 sm:p-2.5 lg:px-6 lg:py-3">
          CONTACT US : 9193210809 , 6395583970
          </h1>
          
        </div>
        <div className="">
          <h4 className="bg-black text-white font-semibold text-sm sm:text-base lg:text-lg p-2 sm:p-3 lg:p-4 text-center">
            H-352, SANT Vihar, Near Samudayik Swasthya Kendra, Shradhapuri Phase - 1, Kanker Khera, Meerut (U.P)-250001
          </h4>
        </div>
        <div className="w-full flex justify-center mt-2 mb-1">
          <p className="text-gray-500 text-xs sm:text-sm lg:text-base text-center">
            &copy; {new Date().getFullYear()} Sanvith Coaching Centre. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

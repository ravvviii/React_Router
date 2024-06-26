import React from 'react';
import ravvviiimovieland from '../../img/ravvviiimovieland.png';
import stillWorking from '../../img/stillWorking.jpeg';

export default function Project() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={ravvviiimovieland} alt="Project 1" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Ravi Movieland</h3>
            <p className="text-gray-700 mb-4">A website where you can browse your movies.</p>
            <a
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href='https://ravvviiimovieland.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={stillWorking} alt="Project 2" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">E-Janausadi</h3>
            <p className="text-gray-700 mb-4">A first-of-its-kind online generic medicine selling website.</p>
            <a
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href='https://drive.google.com/file/d/1B21V1BGmQMy4Obyydl5XX7FG86nlM26V/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src='https://media.licdn.com/dms/image/D5622AQHIp5LBz71PtQ/feedshare-shrink_1280/0/1718744004108?e=1721865600&v=beta&t=g3RsfiAKofDiGBpDmSnx-J6LDIsFhlbCZsDnZm7zpJs' alt="Project 3" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Business Directory</h3>
            <p className="text-gray-700 mb-4">A business directory app for Kharar, Mohali, and Punjab.</p>
            <a
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href='https://drive.google.com/file/d/1B21V1BGmQMy4Obyydl5XX7FG86nlM26V/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

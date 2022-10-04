import Meta from '../components/seo.js'
import { useEffect, useState } from "react";
const withVideos = require('next-videos')

function HomePage({ deviceType }){
  
  const [isPlaying, setPlay] = useState(true);

  const stopVideo = () => {
    setPlay(false);
  };

  return <>
    <Meta
      description="Festejo mi cumple número 3 y los quiero compartir con ustedes."
      title="Bienvenidos"
  />
  {isPlaying && (
<header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    {deviceType !== 'mobile' && (
      <video muted controls autoPlay playsinline
        id="video"
        onEnded={stopVideo}
        className="absolute z-10 w-auto min-w-full lg:min-h-full lg:max-w-none"
      >
        <source src={'/video/intro.mp4'} type="video/mp4" />
        <source src={'/video/intro.webm'} type="video/webm" />
        <source src={'/video/intro.mov'} type="video/mov" />
        Tu navegador no soporta videos
      </video>)}
    {deviceType === 'mobile' && (
    <video controls autoPlay playsinline
        onEnded={stopVideo}
        className="absolute z-10 w-auto min-w-full lg:min-h-full lg:max-w-none"
      >
        <source src={'/video/intro.mp4'} type="video/mp4" />
        <source src={'/video/intro.webm'} type="video/webm" />
        <source src={'/video/intro.mov'} type="video/mov" />
        Tu navegador no soporta videos
      </video>)
      }
</header> )}

    <div className={deviceType !== 'mobile' && isPlaying ? 'hidden' : '' }>
      <div className="object-none object-center mt-40 items-center lg:mt-auto">
        <img src={"/img/msg.png"} className="mt-40 ml-auto mr-auto"></img>
      </div>

      <div className="fixed top-3 items-center">
        <div>
          <a className="flex items-center justify-between p-4 mb-8 ml-2 mr-3 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md hover:bg-indigo-700 md:py-4 md:text-lg" href="https://goo.gl/maps/2UvdWeWQYF4pJj6y7" target="_blank" >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>Los esperamos el sábado 22 de Octubre en Barrio Don Joaquín, Ruta 58, KM 9, Canning. ¿Cómo llegar?</span>
            </div>
          </a>
        </div>
      </div>
      
      <div className="rounded-md fixed bottom-10 w-full text-center">
        <div className="m-3">
          <button className="bg-white text-purple-800 font-bold rounded border-b-2 border-purple-500 hover:border-purple-600 hover:bg-purple-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            onClick={() => { window.location.assign('https://docs.google.com/forms/d/e/1FAIpQLScMEHtvu96WHCslAxcEiQfFhpnjfcYQ1QAHQVndJind76RRYw/viewform?usp=sf_link') }} >
            <span className="mr-2">Confirmar asistencia</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
      <div className="text-white flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2022</span><span className="text-blueGray-500 hover:text-gray-800" target="_blank"> Felix Agustin</span>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    </>
}

export default HomePage

export async function getServerSideProps(context) {

  const UA = context.req.headers['user-agent'];

  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))
  
  return {
    props: {
      deviceType: isMobile ? 'mobile' : 'desktop'
    }
  }
}
import Banner from "../../componentes/Banner"
import Destaques from "../../componentes/Banner/Destaques"
import styles from "./Inicial.module.css"
import { register } from "swiper/element/bundle"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from "react"
import Area from "../../componentes/Area"
import CardVideo from "../../componentes/Area/CardVideo"
import ModalEditarVideo from "../../componentes/ModalEditarVideo"

const Inicial = () => {

  const [videos, setVideos] = useState([])
  const [lideresEmTiVideo, setLideresEmTiVideo] = useState([])
  const [frontEndVideo, setFrontEndVideo] = useState([])
  const [backEndVideo, setBackendVideo] = useState([])
  const [videoSelecionado, setVideoSelecionado] = useState(null)

  useEffect(() => {
    async function conectApi() {
      const videosApi = await fetch('http://localhost:3000/videos') 
      const videosApiData = await videosApi.json()
      setVideos(videosApiData)
    }
    conectApi()
  }, [])

  useEffect(() => {
    if (videos.length > 0) {
      const lideresEmTiVideo = (videos.filter(video => video.area === "LíderesEmTi"));
      const frontEndVideo = (videos.filter(video => video.area === "FrontEnd"));
      const backEndVideo = (videos.filter(video => video.area === "BackEnd"));

      setLideresEmTiVideo(lideresEmTiVideo);
      setFrontEndVideo(frontEndVideo);
      setBackendVideo(backEndVideo);
      
      
    }
  }, [videos]);

  const atualizarVideoDeletado = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  }

  const atualizarAposPut = async (videoAtualizado) => {
    const response = await fetch('http://localhost:3000/videos');
    const updatedVideos = await response.json();
    setVideos(updatedVideos);
    setVideoSelecionado(null);
  }

  return (
    <div className={styles.incialBg}>
      <Banner>
      <Swiper style={{ "--swiper-navigation-color": "#ff0000"}}
          modules={[Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <Destaques key={video.id} video={video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Banner>
      <Area titulo="LÍDERES EM TI" tituloColor="#00C86F" videoBorderColor="#00C86F" btnColor="#00C86F">
          {lideresEmTiVideo.map((video) => (
            <CardVideo key={video.id} video={video} aoDeletar={atualizarVideoDeletado} aoVideoSelecionado={video=> setVideoSelecionado(video)} />
          ))}
      </Area>
      <Area titulo="FRONT END" tituloColor={"#6BD1FF"} videoBorderColor={"#6BD1FF"} btnColor={"#6BD1FF"}>
          {frontEndVideo.map((video) => (
            <CardVideo key={video.id} video={video} aoDeletar={atualizarVideoDeletado} aoVideoSelecionado={video=> setVideoSelecionado(video)} />
          ))}
      </Area>
      <Area titulo="BACK END" tituloColor={"#FF6400"} videoBorderColor={"#FF6400"} btnColor={"#FF6400"}>
        {backEndVideo.map((video) => (
          <CardVideo key={video.id} video={video} aoDeletar={atualizarVideoDeletado} aoVideoSelecionado={video=> setVideoSelecionado(video)} />
        ))}
      </Area>
      <ModalEditarVideo videos={videos} video={videoSelecionado} aoFechar={() => setVideoSelecionado(null)} aoAtualizar={atualizarAposPut} />
    </div>
  )
}

export default Inicial
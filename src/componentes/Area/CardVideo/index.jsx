import styles from './CardVideo.module.css'
import excluirBtn from './excluir.png'
import editarBtn from './editar.png'
import { Link } from 'react-router-dom'

const CardVideo = ({video, aoDeletar, aoVideoSelecionado, videoBorderColor, btnColor}) => {

  async function excluirVideo(id) {
    let deleteVideo
    try {
        deleteVideo = await fetch(`http://localhost:3005/videos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
      aoDeletar(id)
    } catch(error) {
      alert('Erro ao excluir produto')
    }
    
      return deleteVideo
  }

  const rolarPraCimaESelecionarVideo = (video) => {
    aoVideoSelecionado(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.gcontainer}  >
        <Link to={`video/${video.id}`}>
          <div className={styles.imgContainer} style={{ borderColor: videoBorderColor, boxShadow: `0 0 13px ${videoBorderColor}`}} >
          <img src={video.img} alt={video.area} />
          </div>
        </Link>
        <div className={styles.btnContainer} style={{ boxShadow: `0 0 13px ${btnColor}` }}>
          <div className={styles.btn} onClick={() => excluirVideo(video.id)}><img src={excluirBtn} alt='botón eliminar' />Eliminar</div>
          <div className={styles.btn} onClick={() => rolarPraCimaESelecionarVideo(video)}><img src={editarBtn} alt='botón editar'/>Editar</div>
        </div>
    </div>
  )
}

export default CardVideo
import { useEffect, useState } from "react"
import CampoTexto from "../../componentes/CampoTexto"
import FormDescrip from "../../componentes/FormDescrip"
import ListaSuspensaArea from "../../componentes/ListaSuspensaArea"
import styles from "./NovoVideo.module.css"
import FormBotao from "../../componentes/FormBotao"

const NovoVideo = () => {
  const [tituloPost, setTituloPost] = useState()
  const [areaPost, setAreaPost] = useState()
  const [imagenPost, setImagenPost] = useState()
  const [videoPost, setVideoPost] = useState()
  const [descripPost, setDescripPost] = useState()

  async function novoVideoPost(area, img, titulo, descrip, link) {
    try {
      const videoPostApi = await fetch('http://localhost:3005/videos', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          area: area,
          img: img,
          titulo: titulo,
          descrip: descrip,
          link: link
        })

      })

      if (!videoPostApi.ok) {
        throw new Error('Não foi possível adicionar novo vídeo')
      }

      const videoPostApiConvertido = await videoPostApi.json()
      return videoPostApiConvertido
    } catch (error) {
      console.log(error);
    }
  }

  const aoGuardar = async (evento) => {
    evento.preventDefault()
    await novoVideoPost(areaPost, imagenPost, tituloPost, descripPost, videoPost)
    setAreaPost('')
    setImagenPost('')
    setTituloPost('')
    setDescripPost('')
    setVideoPost('')
    alert("Vídeo guardado correctamente")
  }

  const categoria = [
    "innovación y gestión",
    "FrontEnd",
    "BackEnd"
  ]

  return (
    <div className={styles.gContainer}>
      <section className={styles.gContainerTitulo}>
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETA EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </section>
      <section className={styles.gContainerForm}>
        <h2>Crear tarjeta</h2>
        <form onSubmit={aoGuardar}>
          <div>
            <CampoTexto
              label="Título"
              placeholder="Introduce un título"
              valor={tituloPost}
              obrigatorio={true}
              aoAlterado={valor => setTituloPost(valor)} 
            />

            <ListaSuspensaArea
              label="Categoria"
              itens={categoria}
              valor={areaPost}
              obrigatorio={true}
              aoAlterado={valor => setAreaPost(valor)}
            />
          </div>
          <div>
            <CampoTexto
              label="Imagen"
              placeholder="Ingresa al enlace de la imagen"
              valor={imagenPost}
              obrigatorio={true}
              aoAlterado={valor => setImagenPost(valor)} 
            />

            <CampoTexto
              label="Vídeo"
              placeholder="Ingrese el enlace del vídeo"
              valor={videoPost}
              obrigatorio={true}
              aoAlterado={valor => setVideoPost(valor)} 
            />
          </div>
          <FormDescrip
            label="Descripcion"
            placeholder="¿De qué se trata este vídeo?"
            valor={descripPost}
            obrigatorio={true}
            aoAlterado={valor => setDescripPost(valor)}
          />
          <div>
            <FormBotao type="submit" nome="guardar"></FormBotao>
            <FormBotao type="reset" nome="limpar"></FormBotao>
          </div>
        </form>
      </section>
    </div>
  )
}

export default NovoVideo
import { useEffect, useState } from "react"
import CampoTexto from "../CampoTexto"
import FormBotao from "../FormBotao"
import FormDescrip from "../FormDescrip"
import ListaSuspensaArea from "../ListaSuspensaArea"
import styles from "./ModalEditarVideo.module.css"
import botaoFechar from "./iconeFechar.png"

const ModalEditarVideo = ({ video, aoFechar, aoAtualizar }) => {

  const [tituloPut, setTituloPut] = useState("")
  const [areaPut, setAreaPut] = useState("")
  const [descripPut, setDescripPut] = useState("")
  const [imagenPut, setImagenPut] = useState("")
  const [videoPut, setVideoPut] = useState("")

  useEffect(() => {
    if (video) {
      setTituloPut(video.titulo);
      setAreaPut(video.area);
      setDescripPut(video.descrip);
      setImagenPut(video.img);
      setVideoPut(video.link);
    }
  }, [video]);

  const categoria = [
    "innovación y gestión",
    "FrontEnd",
    "BackEnd"
  ]

  const styleLabel = {
    "color": "#fff",
    "fontSize": "20px"
  }

  const styleColorCampo = {
    "border": "2px solid #0000ff",
    "backgroundColor": "#000000"
  }

  const styleWidthFormDescrip = {
    "maxWidth": "674px",
  }

  const styleCorBotao = {
    "border": "2px solid #0000ff",
    "background": "#000000"
  }

  const styleCorBotaoHover = {
    "border": "2px solid #0000ff",
    "boxShadow": "inset 0px 0px 12px 4px #0000ff",
    "background": "#000"
  }

  const estiloCorCampoFormDescrip = {
    ...styleColorCampo, ...styleWidthFormDescrip
  }

  async function atualizarVideoPut(id, area, img, titulo, descrip, link) {
    let videoPutApi
    videoPutApi = await fetch(`http://localhost:3005/videos/${id}`, {
      method: "PUT",
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
    if (!videoPutApi.ok) {
      throw new Error('No fue posible actualizar la card del vídeo')
    }

    const videoPutApiConvertido = await videoPutApi.json()
    return videoPutApiConvertido
  }

  const aoSalvar = async (evento) => {
    evento.preventDefault()
    const videoAtualizado = await atualizarVideoPut(video.id, areaPut, imagenPut, tituloPut, descripPut, videoPut)
    setAreaPut('')
    setImagenPut('')
    setTituloPut('')
    setDescripPut('')
    setVideoPut('')
    aoAtualizar(videoAtualizado)
    alert("Vídeo guardado correctamente")
  }

  const aoLimpar = () => {
    setAreaPut('')
    setImagenPut('')
    setTituloPut('')
    setDescripPut('')
    setVideoPut('')
  }

  return (
    <>
      {video && <> <div className={styles.overlay}></div>
        <dialog open={!!video} onClose={aoFechar} className={styles.dialog}>
          <h1>Editar Card:</h1>
          <form onSubmit={aoSalvar}>
            <CampoTexto
              label="Título"
              placeholder="Digite el título"
              valor={tituloPut}
              obrigatorio={true}
              aoAlterado={valor => setTituloPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />

            <ListaSuspensaArea
              label="Categoria"
              itens={categoria}
              valor={areaPut}
              obrigatorio={true}
              aoAlterado={valor => setAreaPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />
            <CampoTexto
              label="Imagen"
              placeholder="Digite el link de la imagen"
              valor={imagenPut}
              obrigatorio={true}
              aoAlterado={valor => setImagenPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />

            <CampoTexto
              label="Vídeo"
              placeholder="Ingrese el enlace del vídeo"
              valor={videoPut}
              obrigatorio={true}
              aoAlterado={valor => setVideoPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />
            <FormDescrip
              label="Descripcion"
              placeholder="¿De qué se trata este vídeo?"
              valor={descripPut}
              obrigatorio={true}
              aoAlterado={valor => setDescripPut(valor)}
              estiloCorCampoFormDescrip={estiloCorCampoFormDescrip}
              estiloCorLabel={styleLabel}
            />
            <div>
              <FormBotao styleCorBotao={styleCorBotao} estiloCorBotaoHover={styleCorBotaoHover} type="submit" nome="guardar"></FormBotao>
              <FormBotao aoResetar={aoLimpar} styleCorBotao={styleCorBotao} estiloCorBotaoHover={styleCorBotaoHover} type="reset" nome="limpar"></FormBotao>
            </div>
          </form>
          <form className={styles.dialogBtn} method="dialog">
            <button><img src={botaoFechar} alt="Boton Fechar" /></button>
          </form>
        </dialog>
      </>
      }
    </>
  )
}

export default ModalEditarVideo
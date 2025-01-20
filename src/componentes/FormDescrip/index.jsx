import styles from "./FormDescrip.module.css"

const FormDescrip = (props) => {
  return(
    <div className={styles.gContainer}>
      <label style={props.estiloCorLabel}>
        {props.label}
      </label>
      <textarea rows="10" value={props.valor} required={props.obrigatorio} placeholder={props.placeholder} onChange={evento => props.aoAlterado(evento.target.value)} style={props.estiloCorCampoFormDescrip}>

      </textarea>
    </div>
  )
}

export default FormDescrip
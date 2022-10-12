import styles from './Header.module.scss';
// import TituloComImagem from './TituloComImagem';
// import TituloSemImagem from './TituloSemImagem';

export default function Header({ titulo, descricao, className = '', imagem }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img
          alt={titulo}
          scr={imagem}
        />
      </div>
      {/* {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      }
      {titulo && imagem &&
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      } */}
    </header>
  )
}
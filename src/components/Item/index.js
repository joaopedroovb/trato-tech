import styles from './Item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
  // AiFillMinusCircle,
  // AiFillPlusCircle,
} from 'react-icons/ai';
import { FaCalendarPlus } from 'react-icons/fa'

const iconeProps = {
  size: 24,
  color: '#041833',
};

export default function Item(props) {
  const {
    titulo,
    foto,
    preco,
    descricao,
    favorito,
  } = props;
  return (
    <div className={styles.item}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart
                {...iconeProps}
                color='#ff0000'
                className={styles['item-acao']}
              // onClick={resolverFavorito}
              />
              : <AiOutlineHeart
                {...iconeProps}
                className={styles['item-acao']}
              // onClick={resolverFavorito}
              />
            }
            <FaCalendarPlus
              {...iconeProps}
              color={true ? '#1875e8' : 'iconsProps.color'}
              className={styles['item-acao']}
            />
          </div>
        </div>
      </div>
    </div >

  )
}
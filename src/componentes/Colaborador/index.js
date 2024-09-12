import './colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavitar }) => {

    function favoritar() {
        aoFavitar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <IoIosCloseCircle
            className='deletar'
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                    ? <GoHeartFill {...propsFavorito} color='#ff0000' /> // Através do spread operador, eu passo todos os atributos de 'propsFavorito' para o componente
                    : <GoHeart {...propsFavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador
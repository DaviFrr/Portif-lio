import styles from './Sobre.module.css'
import avatar from '../../../Images/avatar.jpeg'
import html from '../../../Images/html-5.png'
import css from '../../../Images/css-3.png'
import js from '../../../Images/java-script.png'
import react from '../../../Images/react.png'
import node from '../../../Images/nodejs.png'
import php from '../../../Images/php.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Davi Ferreira Braga</span> <br />
                    <strong>Dev e Estudante</strong> </p>

                    <p>Gosto bastante de criar coisas divertidas</p>

                    <p>Criatividade é algo que eu gosto muito de exercer</p>

                    
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={php} alt="Ícone do php" />
                </div>
            </div>

        </section>
    )
}

export default Sobre
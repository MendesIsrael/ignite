import styles from './Header.module.css'
import vigorlogo from '../assets/vigor-logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={vigorlogo} alt="logo tipo do vigor" />
        </header>
    )
}
import styles from './Header.module.css';
import toDoLogo from '../assets/logo-todo.svg';


export function Header () {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="logotipo todo" />
    </header>
  )
}
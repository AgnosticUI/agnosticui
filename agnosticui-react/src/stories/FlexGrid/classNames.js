import styles from './FlexBoxGrid2Custom.css'

export default function getClass(className) {
  return styles && styles[className] ? styles[className] : className
}

import styles from './FlexBoxGrid2Custom.module.css'

export default function getClass(className) {
  return styles && styles[className] ? styles[className] : className
}

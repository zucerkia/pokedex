import React from 'react'

// Styles
import styles from './styles.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}
const Input: React.FC<InputProps> = ({ name, label, ...props }) => (
  <div className={styles.input}>
    <input type="text" name={name} {...props} required />
    <label htmlFor={name}>{label}</label>
  </div>
)

export default Input

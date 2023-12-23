import React, { ComponentProps, useMemo } from "react";
import * as styles from './style.css'

type Props = ComponentProps<'button'> & { color?: 'primary' | 'secondary', children: React.ReactNode }

export const Button: React.FC<Props> = ({ color = 'primary', ...props}) => {
  const styling = useMemo(() => {
    switch(color) {
      case 'primary':
        return styles.primary
      case 'secondary':
        return styles.secondary
      default:
        ''
    }
  }, [color])

  return (
    <button {...props} className={styling}>
      {props.children}
    </button>
  )
}

import * as React from "react";
import styles from './Button.module.scss'
import cn from "classnames";

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
	isLoading: boolean
}

export const Button:React.FC<Props> = (props) => {
    const {children, isLoading, className, ...rest} = props;

    return (
        <button className={cn(styles.button, className)} disabled={isLoading}  {...rest}>{children}</button>
    )
}

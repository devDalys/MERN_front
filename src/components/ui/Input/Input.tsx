import * as React from "react";
import {ChangeEventHandler} from "react";
import cn from 'classnames'
import styles from './Input.module.scss'
import { v4 as uuidv4 } from 'uuid';
interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string,
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    icon?: React.ReactNode;
    onIconClickHandler?: void
    inputType?: boolean;
    labelText: string

}

export const Input: React.FC<Props> = (props) => {
    const {
        className, labelText, onChange, ...rest
    } = props;
    const id = uuidv4();

    const [state, setState] = React.useState('');

    return (
        <div className={cn(styles.inputWrapper)}>
            <input value = {state} onChange={(event) => {
                setState(event.target.value);
                onChange?.(event)
            }
            } className={cn(className, styles.input, {[styles.notEmpty]: state.length})} id={id} {...rest} />
            <label htmlFor={id} className={styles.label}>{labelText}</label>

        </div>
    )
}

import * as React from "react";
import {ChangeEventHandler} from "react";
import cn from 'classnames'
import styles from './Input.module.scss'
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

    const [state, setState] = React.useState('');

    return (
        <div className={cn(styles.inputWrapper)}>
            <input value ={state} onChange={(event) => {
                setState(event.target.value);
                onChange?.(event)
            }
            } className={cn(className, styles.input, {[styles.notEmpty]: state.length})} id='customInput' {...rest} />
            <label htmlFor='customInput' className={styles.label}>{labelText}</label>

        </div>
    )
}

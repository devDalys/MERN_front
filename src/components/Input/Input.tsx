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
        <>
            <label htmlFor='customInput'>{labelText}</label>
            <input value ={state} onChange={(event) => {
                setState(event.target.value);
                onChange?.(event)
            }
            } className={cn(className, styles.input)} id='customInput' {...rest} />
        </>
    )
}

import * as React from "react";
import {ChangeEventHandler} from "react";
import cn from 'classnames'
interface Props extends HTMLInputElement {
    className: string,
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    icon: React.ReactNode;
    onIconClickHandler?: void
    inputType?: boolean;
    value: string;

}

export const Input: React.FC<Props> = (props) => {
    const {
        className, onChange, ...rest
    } = props;

    return (
        <input onChange={onChange} className={cn(className, 'test')} {...rest}>

        </input>
    )
}
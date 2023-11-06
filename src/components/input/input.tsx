import { cn } from '@bem-react/classname'
import { FC } from 'react'

import './input.scss'

const CnInput = cn('input')

interface IInputProps
    extends Omit<
        React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        'className'
    > {}

export const Input: FC<IInputProps> = (props) => {
    return (
        <div className={CnInput()}>
            <div className={CnInput('label')}>{props.placeholder}</div>
            <input {...props} />
        </div>
    )
}

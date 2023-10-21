import { FC } from 'react'
import { cn } from '@bem-react/classname'

import './button.scss'

const CnButton = cn('button')

interface IButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export const Button: FC<IButtonProps> = (props) => {
    return <button {...props} className={CnButton()} />
}

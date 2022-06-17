import './square.css';

import { FC } from 'react';

interface squaresType {
    value: any,
    onClick: any,
}
const Square: FC<squaresType> = (props) => {
    return (<button className='square' onClick={props.onClick}>{props.value}</button >
    )
}

export default Square
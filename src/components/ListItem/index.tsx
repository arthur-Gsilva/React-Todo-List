import * as C from './styles'
import { Item } from '../../types/item'
import { MouseEventHandler, useState } from 'react'

type Props = {
    item: Item
}

export const ListItem = ({item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done)

    const removeItem = (e: any)=> {
        let btn = e.target
        let item = btn.parentNode
        item.remove()
    }

    return(
        <C.Container done={isChecked}>
            <div className="item-content">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                />
                <label>{item.name}</label>
            </div>

            <div className='remove-item' onClick={removeItem}>X</div>
        </C.Container>
    )
}
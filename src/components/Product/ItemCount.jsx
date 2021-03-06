import {useState} from 'react';

const ItemCount = ({maxStock}) => {
    const [Quantity,setQuantity] = useState(1);
    const AddQuantity = () => {
        if(Quantity < maxStock){
            setQuantity(parseInt(Quantity) + 1);
        }
    }
    const RemoveQuantity = () => {
        if(Quantity>1){
            setQuantity(parseInt(Quantity) - 1);
        }        
    }    
    const selectCount = (e) => {
        e.target.select();
    } 
    const ManualQuantity = (e) => {
        if (e.target.validity.valid){
            if(e.target.value <= maxStock){
                if(e.target.value === '' || e.target.value < 1){
                    setQuantity(1);
                }else{
                    setQuantity(e.target.value);
                }
            }
        }
    }
    
    return (
        <>
            <div className="item-count">
                <div className="row no-gutters">
                    <button name="less" className={`btn-count btn-less${Quantity} col-3`} onClick={RemoveQuantity}>-</button>
                    <input type="tel" className="input-count col-6" pattern="^-?[0-9]\d*\.?\d*$" value={Quantity} onChange={ManualQuantity} onClick={selectCount} />
                    <button name="more" className={`btn-count col-3 ${Quantity==maxStock ? 'btn-disabled':''}`} onClick={AddQuantity}>+</button>
                </div>
            </div>
            <a href="#" className="btn btn-outline-primary btn-sm d-block">Agregar a Carrito</a>
        </>
    )
}
export default ItemCount;
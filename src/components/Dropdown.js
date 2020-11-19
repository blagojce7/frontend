import Axios from 'axios';
import React, {useState } from 'react';
import { ButtonToggle } from 'reactstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import onClickOutside from 'react-onclickoutside';

function Dropdown({title, items=[], multiSelect = false}){
    const [open, setOpen] = useState(false);
    const [selection,setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    Dropdown.handleClickOutside = () => setOpen(false);

    function handleOnClick(item){
        if (!selection.some(current => current.id === item.id)){
            if(!multiSelect){
                setSelection([item]);
            } else if(multiSelect){
                setSelection([...selection,item]);
            }else{
                let selectionAfterRemoval = selection;
                selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current.id !== item.id
                );
                setSelection([...selectionAfterRemoval])
            }
        }
    }

    function isSelected(item){
        if(selection.find(current => current.id === item.id)){
            return true;
        }
        return false;

    }
    // function getID(){
    //     return this.ref.idto.value;
    // }

    return(
        <div className="container p-1">
                    <select className="select"  ref="idto">
                        {items.map(item =>
                            <option key={item.id} value={item.id} onClick={() => handleOnClick(item)}>
                                {item.name} { isSelected(item) && 'Selected'} 
                                {console.log(item)}
                            </option>)}
                        
                    </select>
                </div>

    //     <div className="container p-1">
    //         <div    tabIndex={0} 
    //                 className="custom-select" 
    //                 role="button" 
    //                 onKeyPress={()=> toggle(!open)}
    //                 onClick={() => toggle(!open)}>
    //                     <div className="dd-header__title ">
    //                         <p className="dd-header__title--bold">
    //                             {title}
    //                         </p>

    //                     </div>

                        
    //                     {/* <div className=".h6">
    //                         <p>{ open ?  'Open' :'Close'}</p>
    //                     </div> */}
    //         </div>
            
    //         {open && (
    //             <ul className="list-group">
    //                 {items.map(item => (
    //                     <li key={item.id} className="list-group-item" > 
    //                         <div className="list-group-item"  type="button" onClick={() => handleOnClick(item)}>
    //                             {item.name}
    //                 <span className="ml-5">{ isSelected(item) && 'Selected'}</span>
    //                         </div> 
    //                     </li>
    //                 ))}
    //             </ul>
    //         )}               
    //     </div>
    );
}


export default Dropdown;


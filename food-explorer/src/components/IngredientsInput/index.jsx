import { Container } from "./styles";

import { FiPlus, FiX } from 'react-icons/fi'

export function IngredientsInput({isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input  
        type='text'
        readOnly={!isNew}
        value={value}
        {...rest}
      />
      <button 
        type="button"
        onClick={onClick}
        className={isNew ? 'add-button' : 'delete-button'}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}
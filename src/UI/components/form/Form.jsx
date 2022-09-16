import { useForm } from '../../../hooks/index'; 
import './form.css'

export const Form = () => {

  const { searchInfo,onInputChange,reset } = useForm({
    searchInfo:'',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    reset();
  }
  
  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        className="form-control"
        placeholder="search film..."
        autoComplete="off"
        name='searchInfo' 
        value={ searchInfo } 
        onChange={ onInputChange } 
        />
      <button className="btn btn-outline-info form-btn">Search</button>
    </form>
  )
}
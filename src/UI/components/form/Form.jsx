import { useNavigate,useLocation } from 'react-router-dom'; 
import queryString from 'query-string'; 
import { useForm } from '../../../hooks/index'; 
import './form.css'

export const Form = () => {
  
  const navigate = useNavigate(); 
  const {q=''} = queryString.parse(useLocation().search);

  const { searchInfo,onInputChange,reset } = useForm({
    searchInfo:q,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${ searchInfo }`);
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
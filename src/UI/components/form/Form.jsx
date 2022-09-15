import './form.css'

export const Form = () => {
  return (
    <form>
      <input type="text" className="form-control" placeholder="search film..." autoComplete="off" />
      <button className="btn btn-outline-info">Search</button>
    </form>
  )
}
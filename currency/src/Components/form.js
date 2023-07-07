
function Form(){

    return(
        <form>
        <fieldset>
          <legend>Add New</legend>
          <input 
          placeholder="Name" 
          required 
          type="text" 
          minLength={2} 
          maxLength={60}/><br/>
          <input 
          placeholder="Email" 
          required 
          type="email" 
          minLength={2} 
          maxLength={100} 
          pattern="^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|&quot;(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*&quot;)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$"/><br/>
          <input 
          placeholder="Phone" 
          type="text" 
          required 
          pattern="^[\+]{0,1}380([0-9]{9})$"/><br/>
          <button type='submit'>Log in</button>
        </fieldset>
      </form>
    )
    
}

export default Form;
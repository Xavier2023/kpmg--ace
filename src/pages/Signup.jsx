import React  from 'react'

const Signup = () => {

  // state = {
  //   email: '',
  //   password: '',
  //   password2: '',
  //   category: '',
  // }


    return (
      <div>
        <h1>Create an account</h1>
        <form>
          <div>
            <input type="email" name='email'  placeholder='Enter email address'/>
          </div>
          <div>
            <input type="password" name='password'  placeholder='Enter your new password'/>
          </div>
          <div>
            <input type="password" name='password'  placeholder='Enter email address'/>
          </div>
          <div>
            <input type="text" name='category' list='categoryname'  placeholder='Choose category'/>
            <datalist>
              <option value='Manufacturer'></option>
              <option value='Supplier'></option>
            </datalist>
          </div>
        </form>
        <button className="btn btn-primary" type="submit">
          Sign up
        </button>
      </div>
    )
  }

export default Signup

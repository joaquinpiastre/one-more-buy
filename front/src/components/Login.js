import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UserContext } from '../context/UserContext';


export const Login = () => {

  const navigate = useNavigate();

  const initialValues = {
    email:'',
    password:''
  }

  const { setUser } = useContext(UserContext);

  const handleForm = async(values) => {
    console.log('values:', values)
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values)
      console.log(response.data)
      const { role } = response.data
      console.log('role', role)
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesion correcto',
        showConfirmButton: false,
        timer: 1800
      })
      setUser({
        logged:true,
        role: role
      })
      navigate('/offers')
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div>
      <div className="news_section layout_padding">
        <div className="container">
          <div className="d-flex  justify-content-center">
            <h1 className="services_text custom_main">Inicio de sesión</h1>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'> 
        <div className='col-md-6'>
        <Formik
          initialValues={initialValues}
          onSubmit={handleForm}
        >
          <Form> 
                <div className="form-floating">
                  <Field 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com"
                    name='email'
                  />
                  <label htmlFor="floatingInput">Correo</label>
                </div>
                <div className="form-floating">
                  <Field 
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password" 
                    name='password'
                  />
                  <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleForm}>Iniciar sesión</button>
          </Form>
        </Formik>
      </div>
    </div> 
    </div>
  )
}

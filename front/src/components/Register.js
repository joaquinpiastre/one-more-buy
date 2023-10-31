import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UserContext } from '../context/UserContext';


export const Register = () => {
    
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email:'',
        password: ''
    }

    
    const handleRegister = async( values) => {
        try {
            const response = await axios.post('http://localhost:5000/auth/register', values)
            console.log(response.data)
            //capturo el valor de role que me envia el backend
            const { role } = response.data 
            Swal.fire({
                icon: 'success',
                title: 'Registrado correctamente',
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
            <div className='row justify-content-center'> 
                <div className='col-md-6'>
                <div className="news_section layout_padding">
                    <div className="container">
                        <div className="d-flex  justify-content-center">
                            <h1 className="services_text custom_main">Registro</h1>
                        </div>
                    </div>
                </div>
                    <Formik
                    initialValues={initialValues}
                    onSubmit={handleRegister}
                    >
                        <Form> 
                            <div className="form-floating">
                            <Field 
                                type="text" 
                                className="form-control" 
                                id="floatingName" 
                                placeholder="Nombre" 
                                name='name'
                            />
                            <label htmlFor="floatingName">Nombre y apellido</label>
                            </div>
                            <div className="form-floating">
                            <Field 
                                type="email" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder="nombre@example.com"
                                name='email'
                            />
                            <label htmlFor="floatingInput">Correo</label>
                            </div>
                            <div className="form-floating">
                            <Field 
                                type="password" 
                                className="form-control" 
                                id="floatingInput" 
                                name='password'
                            />
                            <label htmlFor="floatingInput">Contraseña</label>
                            </div>
                            <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleRegister}>Registrarse</button>
                        </Form>
                    </Formik>
                </div>
            </div> 
        </div>
    )
}

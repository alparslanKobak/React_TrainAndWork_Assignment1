import axios from 'axios';
import { useState } from 'react';







function LoginModal() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false);


    const submitLoginForm = async () => {
        try {
           
    
            const response = await axios.get('http://localhost:3000/users');
            const users = response.data;
    
            const userExists = users.some(user => user.email === email && user.password === password);
    
            if (userExists) {
                // Kullanıcı girişi başarılı
                
                setLoginState(true);
              
                alert('Login successful');

               
                // Burada giriş sonrası işlemleri yapabilirsiniz.
            } else {
                // Kullanıcı girişi başarısız
                setEmail('');
                setPassword('');
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    return ( 
        <>
         <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title text-white" id="loginModalLabel"><i className="fa-solid fa-right-to-bracket"></i> Login to Your Account</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-light">
                            <form id="loginForm">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" onChange={(e) => setEmail(e.target.value) } value={email} className="form-control" id="email" placeholder="Enter your  email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password"  onChange={(e) => setPassword(e.target.value) } value={password}  className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <div className="d-grid">
                                    <button type="button" className="btn btn-success"  data-bs-dismiss="modal" onClick={submitLoginForm}> <i className="fa-solid fa-sign-in"></i> Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-link">Forgot Password?</button>
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"><i className="fa-solid fa-xmark"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default LoginModal;
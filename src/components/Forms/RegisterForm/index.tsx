import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../../axios';

export type SignUpData = {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
}

const RegisterForm: FC = () => {
    const location = useLocation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpData>();

    const onSubmit = handleSubmit((data) => {
        signin(data);
        reset();
    })

    const signin = async (createUserDto: SignUpData) => {
        try {
            console.log(createUserDto);
            await axios.post('/users/create', createUserDto).then((res) => {
                console.log(res.data);
            });
        } catch (err) {
            console.log('ERROR MESSAGE:', err);
        }
    }

    return (
        <form onSubmit={onSubmit} className='form'>
            <div className='form-element'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input {...register('email', { required: 'Email is required' })} type='text' name='email' className='form-control' />
                {errors.email && <span className='form-text required'>{errors.email.message}</span>}
            </div>
            <div className="row">
                <div className="col">
                    <div className='form-element'>
                        <label htmlFor='first_name' className='form-label'>First name</label>
                        <input {...register('first_name', { required: 'First name is required' })} type='text' name='first_name' className='form-control' />
                        {errors.first_name && <span className='form-text required'>{errors.first_name.message}</span>}
                    </div>
                </div>
                <div className="col">
                    <div className='form-element'>
                        <label htmlFor='last_name' className='form-label'>Last name</label>
                        <input {...register('last_name', { required: 'Last name is required' })} type='text' name='last_name' className='form-control' />
                        {errors.last_name && <span className='form-text required'>{errors.last_name.message}</span>}
                    </div>
                </div>
            </div>
            <div className='form-element'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input {...register('password', { required: 'Password is required' })} type='text' name='password' className='form-control' />
                {errors.password && <span className='form-text required'>{errors.password.message}</span>}
            </div>
            <div className='form-element'>
                <label htmlFor='confirm_password' className='form-label'>Confirm password</label>
                <input {...register('confirm_password', { required: 'Please confirm password' })} type='text' name='confirm_password' className='form-control' />
                {errors.confirm_password && <span className='form-text required'>{errors.confirm_password.message}</span>}
            </div>
            {location.pathname.slice(1, location.pathname.length) === 'signup' ?
                <>
                    <div className='buttons'>
                        <input className='site-btn btn-orange' type='submit' value='Sign up' />
                    </div>
                    <div className="goto-login">
                        <p>Already have an account?</p>
                        <Link to="/login" className="orange">Sign in</Link>
                    </div>
                </> :
                <div className='buttons'>
                    <input className='site-btn btn-orange' type='submit' value='Submit' />
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
            }
        </form>
    )
}

export default RegisterForm

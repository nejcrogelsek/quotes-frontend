import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export type SignUpData = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpData>();

    const onSubmit = handleSubmit((data) => {
        signin(data);
        reset();
    })

    const signin = async (data: SignUpData) => {
        try {
            alert(data);
        } catch (err) {
            console.log('Error message:', err);
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
                        <label htmlFor='firstName' className='form-label'>First name</label>
                        <input {...register('firstName', { required: 'First name is required' })} type='text' name='firstName' className='form-control' />
                        {errors.firstName && <span className='form-text required'>{errors.firstName.message}</span>}
                    </div>
                </div>
                <div className="col">
                    <div className='form-element'>
                        <label htmlFor='lastName' className='form-label'>Last name</label>
                        <input {...register('lastName', { required: 'Last name is required' })} type='text' name='lastName' className='form-control' />
                        {errors.lastName && <span className='form-text required'>{errors.lastName.message}</span>}
                    </div>
                </div>
            </div>
            <div className='form-element'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input {...register('password', { required: 'Password is required' })} type='text' name='password' className='form-control' />
                {errors.password && <span className='form-text required'>{errors.password.message}</span>}
            </div>
            <div className='form-element'>
                <label htmlFor='confirmPassword' className='form-label'>Confirm password</label>
                <input {...register('confirmPassword', { required: 'Please confirm password' })} type='text' name='confirmPassword' className='form-control' />
                {errors.confirmPassword && <span className='form-text required'>{errors.confirmPassword.message}</span>}
            </div>
            <div className='buttons'>
                <input className='site-btn btn-orange' type='submit' value='Sign up' />
            </div>
            <div className="goto-login">
                <p>Already have an account?</p>
                <Link to="/login" className="orange">Sign in</Link>
            </div>
        </form>
    )
}

export default RegisterForm

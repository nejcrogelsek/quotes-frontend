import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type SignInData = {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SignInData>();

    const onSubmit = handleSubmit((data) => {
        signin(data);
        reset();
    })

    const signin = async (data: SignInData) => {
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
            <div className='form-element'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input {...register('password', { required: 'Password is required' })} type='text' name='password' className='form-control' />
                {errors.password && <span className='form-text required'>{errors.password.message}</span>}
            </div>
            <div className='buttons'>
                <input className='site-btn btn-light' type='submit' value='Login' />
            </div>
        </form>
    )
}

export default LoginForm

import { Avatar, } from '@material-ui/core';
import { FC, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import axios from '../../../api/axios';
import { SignUpData } from '../../../interfaces/auth.interface';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../../stores/user.context';
import { QuoteContext } from '../../../stores/quote.context';

const RegisterForm: FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpData>();
    const { userValue, setUserValue } = useContext(UserContext);
    const { setQuoteValue } = useContext(QuoteContext);
    const onSubmit = handleSubmit((data) => {
        signup(data);
        reset();
    })

    const signup = async (createUserDto: SignUpData): Promise<any> => {
        try {
            if (createUserDto.password.match(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) && createUserDto.password === createUserDto.confirm_password) {
                // get secure url from our server
                if (file !== null) {
                    const { data } = await axios.get('users/upload');

                    // post the image directly to the s3 bucket
                    await axios.put(data.url, file, { headers: { 'Content-Type': 'multipart/form-data' } });
                    const imageUrl = data.url.split('?');
                    // full url
                    //console.log(data.url);
                    // Image url
                    //console.log(imageUrl[0]);
                    const finalData = {
                        profile_image: imageUrl[0],
                        email: createUserDto.email,
                        first_name: createUserDto.first_name,
                        last_name: createUserDto.last_name,
                        password: createUserDto.password,
                        confirm_password: createUserDto.confirm_password,
                    }
                    await axios.post('/users/create', finalData).then(async (res) => {
                        await setUserValue(res.data.user);
                        localStorage.setItem('user', res.data.access_token);
                        await axios.get(`/quotes/${res.data.user.id}`).then(res => {
                            setQuoteValue(res.data);
                        })
                    });
                } else {
                    toast.error('You need to upload a profile image.')
                }
            } else {
                toast.error('Passwords do not match. Password must have at least 1 upper & lower case letter, 1 number or special character and it must be long more than 5 characters.')
            }

        } catch (err) {
            console.log('ERROR MESSAGE:', err);
        }
    }

    const fileSelected = async (e: any) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            setFile(file);
        } else {
            setFile(null);
        }
    }

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            }
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    }, [file])

    if (userValue) {
        return <Redirect to='/me' />
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={onSubmit} className='form'>
                <div className='form-element image'>
                    <label htmlFor='file' className='form-label'><Avatar src={preview as string} /></label>
                    <input type='file' accept='image/*' name='file' className='file-control' onChange={fileSelected} />
                </div>
                <div className='form-element'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input {...register('email', { required: 'Email is required' })} type='email' name='email' className='form-control' />
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
                    <input {...register('password', { required: 'Password is required', pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ })} type='password' name='password' className='form-control' />
                    {errors.password && <span className='form-text required'>{errors.password.message}</span>}
                </div>
                <div className='form-element'>
                    <label htmlFor='confirm_password' className='form-label'>Confirm password</label>
                    <input {...register('confirm_password', { required: 'Please confirm password', pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ })} type='password' name='confirm_password' className='form-control' />
                    {errors.confirm_password && <span className='form-text required'>{errors.confirm_password.message}</span>}
                </div>
                <div className='buttons'>
                    <input className='site-btn btn-orange' type='submit' value='Sign up' />
                </div>
                <div className="goto-login">
                    <p>Already have an account?</p>
                    <Link to="/login" className="orange">Sign in</Link>
                </div>
            </form>
        </>
    )
}

export default RegisterForm

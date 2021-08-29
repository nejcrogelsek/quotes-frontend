import { FC, useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../../api/axios';
import { SignUpData } from '../../../interfaces/auth.interface';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../../stores/user.context';

const UpdateUserForm: FC = () => {
    const { userValue, setUserValue } = useContext(UserContext)
    const [email, setEmail] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpData>({
        defaultValues: {
            email: email,
            first_name: firstName,
            last_name: lastName,
        }
    });

    const onSubmit = handleSubmit((data) => {
        updateUser(data);
    })

    const updateUser = async (createUserDto: SignUpData): Promise<any> => {
        try {
            if (createUserDto.password.match(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) && createUserDto.password === createUserDto.confirm_password) {

                const finalData = {
                    id: userValue.id,
                    email: createUserDto.email,
                    first_name: createUserDto.first_name,
                    last_name: createUserDto.last_name,
                    password: createUserDto.password,
                    confirm_password: createUserDto.confirm_password,
                }
                await axios.patch('/users/me/update-password', finalData).then(async (res) => {
                    await setUserValue(res.data);
                });
            } else {
                toast.error('Passwords do not match. Password must have at least 1 upper & lower case letter, 1 number or special character and it must be long more than 5 characters.')
            }

        } catch (err) {
            console.log('ERROR MESSAGE:', err);
            toast.error(`Email: ${err.config.data.split('"')[5]} already exist!`);
        }
    }

    useEffect(() => {
        if (userValue) {
            setEmail(userValue.email);
            setFirstName(userValue.first_name);
            setLastName(userValue.last_name);
        }
    }, [userValue])

    return (
        <>
            <ToastContainer />
            <form onSubmit={onSubmit} className='form'>
                <div className='form-element'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input {...register('email', { required: 'Email is required' })} type='email' name='email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                    {errors.email && <span className='form-text required'>{errors.email.message}</span>}
                </div>
                <div className="row">
                    <div className="col">
                        <div className='form-element'>
                            <label htmlFor='first_name' className='form-label'>First name</label>
                            <input {...register('first_name', { required: 'First name is required' })} type='text' name='first_name' className='form-control' value={firstName} onChange={e => setFirstName(e.target.value)} />
                            {errors.first_name && <span className='form-text required'>{errors.first_name.message}</span>}
                        </div>
                    </div>
                    <div className="col">
                        <div className='form-element'>
                            <label htmlFor='last_name' className='form-label'>Last name</label>
                            <input {...register('last_name', { required: 'Last name is required' })} type='text' name='last_name' className='form-control' value={lastName} onChange={e => setLastName(e.target.value)} />
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
                    <input className='site-btn btn-orange' type='submit' value='Submit' data-bs-dismiss="modal" />
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
            </form>
        </>
    )
}

export default UpdateUserForm

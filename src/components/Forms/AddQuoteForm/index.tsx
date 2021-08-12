import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { AddQuoteData } from '../../../interfaces/quote.interface';

const AddQuoteForm: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddQuoteData>();

    const onSubmit = handleSubmit((data) => {
        signin(data);
        reset();
    })

    const signin = async (data: AddQuoteData) => {
        try {
            alert(data);
        } catch (err) {
            console.log('Error message:', err);
        }
    }


    return (
        <form onSubmit={onSubmit} className='form'>
            <div className='form-element textarea'>
                <textarea {...register('message', { required: 'Quote is required' })} name='message' className='form-control' ></textarea>
                {errors.message && <span className='form-text required'>{errors.message.message}</span>}
            </div>
            <div className='buttons'>
                <input className='site-btn btn-orange' type='submit' value='Submit' />
                <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Close</button>
            </div>
        </form>
    )
}

export default AddQuoteForm

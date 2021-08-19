import axios from '../../../api/axios';
import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AddQuoteData } from '../../../interfaces/quote.interface';
import { UserContext } from '../../../stores/user.context';
import { QuoteContext } from '../../../stores/quote.context';

const AddQuoteForm: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddQuoteData>();
    const { userValue } = useContext(UserContext);
    const { quoteValue, setQuoteValue } = useContext(QuoteContext);

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        signin(data);
        reset();
    })

    const signin = async (data: AddQuoteData) => {
        const finalData = {
            message: data.message,
            user_id: userValue.id
        }
        try {
            await axios.patch(`/quotes/myquote`, finalData).then(async (res) => {
                setQuoteValue(res.data);
            });
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
                <input className='site-btn btn-orange' type='submit' value='Submit' data-bs-dismiss="modal" />
                <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Close</button>
            </div>
        </form>
    )
}

export default AddQuoteForm

import { FC, useContext, useEffect, useState } from 'react'
import { AddQuoteForm } from '../..'
import { QuoteContext } from '../../../stores/quote.context'
import { UserContext } from '../../../stores/user.context';

const AddQuoteModal: FC = () => {
    const { quoteValue, setQuoteValue } = useContext(QuoteContext);
    const { userValue, setUserValue } = useContext(UserContext);
    const [message, setMessage] = useState<string | null>(null);
    useEffect(() => {
        if (quoteValue) {
            setMessage(quoteValue.message);
        }
    }, [quoteValue, setQuoteValue, userValue, setUserValue])
    return (
        <div className='modal fade' id='addQuoteModal'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <h2 className='page-title'>Are you feeling <span>inspired?</span></h2>
                        <p>You can post one quote. You can delete it on your profile or edit in this window.</p>
                        {message ? <AddQuoteForm message={message} /> : <div>Loading...</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuoteModal

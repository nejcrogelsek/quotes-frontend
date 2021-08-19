import { Avatar } from '@material-ui/core'
import { FC, useContext } from 'react'
import { AppProps } from '../../../interfaces/app.interface'
import { Add } from '@material-ui/icons'
import { QuoteContext } from '../../../stores/quote.context'

const ProfileQuoteBlock: FC<AppProps> = ({ user, quote }: AppProps) => {
    const { quoteValue, setQuoteValue } = useContext(QuoteContext);

    const removeQuote = async () => {
        const { id, votes, user_id, created_at, updated_at } = quoteValue;
        console.log(id);
        await setQuoteValue({
            id,
            votes,
            message: '',
            user_id,
            created_at,
            updated_at
        })
    }

    return (
        <div className='quote-block'>
            {quote && quote.message === '' ?
                <button className='add-quote' type='button' data-bs-toggle='modal' data-bs-target='#addQuoteModal'><Add /></button>
                :
                <>
                    <div className="voting">
                        <button className='quote-upvote'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                            </svg>
                        </button>
                        <span className='quote-votes'>{quote && quote.votes}</span>
                        <button className='quote-downvote'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className="quote-part">
                        <p className='quote-text'>{quote && quote.message}</p>
                        <div className="quote-user">
                            <Avatar src={user.profile_image} />
                            <span className='quote-username'>{user.first_name}{' '}{user.last_name}</span>
                        </div>
                    </div>
                    <button className='remove-quote' onClick={removeQuote}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </>
            }

        </div>
    )
}

export default ProfileQuoteBlock

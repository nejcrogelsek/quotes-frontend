import { Avatar } from '@material-ui/core'
import { FC } from 'react'

interface Props {
    votes: number;
    username: string;
    image_url: string;
    quote: string;
}

const QuoteBlock: FC<Props> = ({ votes, username, image_url, quote }: Props) => {
    return (
        <div className='quote-block'>
            <div className="voting">
                <button className='quote-upvote'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </button>
                <span className='quote-votes'>{votes}</span>
                <button className='quote-downvote'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
            <div className="quote-part">
                <p className='quote-text'>{quote}</p>
                <div className="quote-user">
                    <Avatar src={image_url} />
                    <span className='quote-username'>{username}</span>
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock

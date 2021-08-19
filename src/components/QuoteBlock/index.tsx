import { Avatar } from '@material-ui/core'
import { FC, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../stores/user.context'

interface Props {
    votes: number;
    message: string;
    user_id: number;
}

const QuoteBlock: FC<Props> = ({ votes, message, user_id }: Props) => {
    const { userValue } = useContext(UserContext);
    return (
        <div className='quote-block'>
            <div className="voting">
                {userValue ?
                    <button className='quote-upvote'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                        </svg>
                    </button>
                    :
                    <Link to='/login'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                        </svg>
                    </Link>
                }
                <span className='quote-votes'>{votes}</span>
                {userValue ?
                    <button className='quote-downvote'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    :
                    <Link to='/login'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </Link>
                }
            </div>
            <div className="quote-part">
                <p className='quote-text'>{message}</p>
                <div className="quote-user">
                    <Avatar src='nekaj' />
                    <span className='quote-username'>USERNAME</span>
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock

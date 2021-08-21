import { Avatar } from '@material-ui/core'
import { FC, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../stores/user.context'
import { VoteContext } from '../../stores/vote.context';
import axios from '../../api/axios';
import { UserData } from '../../interfaces/auth.interface';

interface Props {
    id: number;
    votes: number;
    message: string;
    user: UserData;
}

const QuoteBlock: FC<Props> = ({ id, votes, message, user }: Props) => {
    const { userValue } = useContext(UserContext);
    const { votesValue, setVotesValue } = useContext(VoteContext);

    const getVotes = async () => {
        await axios.get('votes').then((res) => {
            setVotesValue(res.data);
        });
    }

    const upvote = () => {
        axios.post(`/votes/user/${user.id}/upvote`, { quote_id: id, user_id: user.id }).then((res) => {
            getVotes();
        });
    }

    const downvote = () => {
        console.log('DOWNVOTE');
    }

    return (
        <div className='quote-block'>
            <div className="voting">
                {userValue ?
                    <button className='quote-upvote' onClick={upvote}>
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
                    <button className='quote-downvote' onClick={downvote}>
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
                    <Avatar src={userValue && userValue.profile_picture} />
                    <span className='quote-username'>{userValue && userValue.first_name}{' '}{userValue && userValue.last_name}</span>
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock

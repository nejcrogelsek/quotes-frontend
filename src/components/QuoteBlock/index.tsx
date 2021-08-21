import { Avatar } from '@material-ui/core'
import { FC, useContext, useEffect, useState } from 'react'
import { UserContext } from '../../stores/user.context'
import { VoteContext } from '../../stores/vote.context';
import axios from '../../api/axios';
import { UserData } from '../../interfaces/auth.interface';
import { QuoteContext } from '../../stores/quote.context';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Add } from '@material-ui/icons';

interface Props {
    id: number;
    votes: number;
    message: string;
    user: UserData;
}

const QuoteBlock: FC<Props> = ({ id, votes, message, user }: Props) => {
    const location = useLocation();
    const { userValue } = useContext(UserContext);
    const { quoteValue, setQuoteValue } = useContext(QuoteContext);
    const { votesValue, setVotesValue } = useContext(VoteContext);
    const [allow, setAllow] = useState<boolean>(true);

    const getVotes = async () => {
        await axios.get('votes').then((res) => {
            setVotesValue(res.data);
        });
    }

    const upvote = () => {
        if (allow) {
            if (user) {
                axios.post(`/votes/user/${user.id}/upvote`, { quote_id: id, user_id: user.id }).then((res) => {
                    getVotes();
                });
            } else {
                axios.post(`/votes/user/${userValue.id}/upvote`, { quote_id: id, user_id: userValue.id }).then((res) => {
                    getVotes();
                });
            }
        } else {
            toast.error('You already liked this quote.');
        }
    }

    const downvote = () => {
        if (!allow) {
            if (user) {
                axios.delete(`/votes/user/${user.id}/downvote`, { data: { quote_id: id, user_id: user.id } }).then((res) => {
                    getVotes();
                    setAllow(true);
                });
            } else {
                axios.delete(`/votes/user/${userValue.id}/downvote`, { data: { quote_id: id, user_id: userValue.id } }).then((res) => {
                    getVotes();
                    setAllow(true);
                });
            }
        }
    }

    useEffect(() => {
        if (votesValue) {
            if (user) {
                for (let i: number = 0; i < votesValue.length; i++) {
                    if (user && user.id === votesValue[i].user_id && id === votesValue[i].quote_id) {
                        setAllow(false);
                    }
                }
            } else {
                for (let i: number = 0; i < votesValue.length; i++) {
                    if (userValue.id === votesValue[i].user_id && id === votesValue[i].quote_id) {
                        setAllow(false);
                    }
                }
            }
        }

    }, [quoteValue, userValue, votesValue, id, user])

    const removeQuote = async () => {
        try {
            await axios.patch('/quotes/myquote', { message: '', user: userValue }).then(async (res) => {
                await setQuoteValue(res.data);
                await getVotes();
            });
        } catch (err) {
            console.log('Error message:', err);
        }
    }

    return (
        <div className='quote-block'>
            {message === '' ?
                <>
                    {location.pathname.split('/').length === 2 && location.pathname.split('/')[1] === 'me' ?
                        <button className='add-quote' type='button' data-bs-toggle='modal' data-bs-target='#addQuoteModal'><Add /></button>
                        : null
                    }
                </>
                :
                <>
                    <div className="voting">
                        <button className={allow ? 'quote-upvote' : 'quote-upvote not-allowed'} onClick={upvote}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                            </svg>
                        </button>
                        <span className='quote-votes'>{votes}</span>
                        <button className='quote-downvote' onClick={downvote}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className="quote-part">
                        <p className='quote-text'>{message}</p>
                        <div className="quote-user">
                            <Avatar src={location.pathname.split('/').length === 2 && location.pathname.split('/')[1] === 'me' ? userValue.profile_image : user.profile_image} />
                            <span className='quote-username'>
                                {location.pathname.split('/').length === 2 && location.pathname.split('/')[1] === 'me' ?
                                    <>
                                        {userValue.first_name}{' '}{userValue.last_name}
                                    </> :
                                    <>
                                        {user && user.first_name}{' '}{user && user.last_name}
                                    </>
                                }
                            </span>
                        </div>
                    </div>
                    {location.pathname.split('/').length === 2 && location.pathname.split('/')[1] === 'me' ? <button className='remove-quote' onClick={removeQuote}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button> : null}
                </>
            }

        </div>

    )
}

export default QuoteBlock

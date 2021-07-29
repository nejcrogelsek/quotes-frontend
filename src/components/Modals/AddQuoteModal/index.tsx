import { FC } from 'react'
import { AddQuoteForm } from '../..'

const AddQuoteModal: FC = () => {
    return (
        <div className='modal fade' id='addQuoteModal'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <h2 className='page-title'>Are you feeling <span>inspired?</span></h2>
                        <p>You can post one quote. You can delete it on your profile or edit in this window.</p>
                        <AddQuoteForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuoteModal

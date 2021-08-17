import { FC } from 'react'
import { UpdateUserForm } from '../..'

const SettingsModal: FC = () => {
    return (
        <div className='modal fade' id='settingsModal'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <h2 className='page-title'>Profile <span>settings</span></h2>
                        <p>Change your profile settings.</p>
                        <UpdateUserForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal

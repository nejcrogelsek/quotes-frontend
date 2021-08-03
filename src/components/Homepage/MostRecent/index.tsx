import { FC } from 'react'
import { QuoteBlock } from '../..'

const MostRecent: FC = () => {
    return (
        <div className='homepage-most-recent'>
            <h2 className='page-title secondary'>Most liked quotes</h2>
            <p>Recent quotes updates as soon user adds new quote. Go ahead show them that you seen the new quote and like the ones you like.</p>
            <div className='quotes-wrap'>
                <QuoteBlock />
                <QuoteBlock />
                <QuoteBlock />
                <QuoteBlock />
            </div>
            <button className='btn site-btn btn-light load-more'>Load more</button>
        </div>
    )
}

export default MostRecent

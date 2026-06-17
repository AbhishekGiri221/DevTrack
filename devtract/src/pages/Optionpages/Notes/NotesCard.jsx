import './NotesCard.css';

function NotesCard(params) {
    return(
        <>
            {
                [...Array(16)].map((_,index)=>(
                    <div className='notes-card'>
                        <h2>Buisneess ideas</h2>
                        <p>descriptionsdfsfs fs f</p>
                    </div>
                )
                
                )
            }
        </>
    )
}

export default NotesCard;
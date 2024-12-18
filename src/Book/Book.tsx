import type { Book } from '../../data';

export function BookComponent({ book } : { book: Book}): React.ReactElement {

    const { author, title } = book; 

    return (
        <div className='book'>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
    )
};
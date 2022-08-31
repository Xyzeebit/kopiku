import { useParams } from 'react-router-dom';

export default function Details() {
    const params = useParams();
    return (
        <div className="shop">
            <h1>Shop for Beans { params.id }</h1>
        </div>
    )
}
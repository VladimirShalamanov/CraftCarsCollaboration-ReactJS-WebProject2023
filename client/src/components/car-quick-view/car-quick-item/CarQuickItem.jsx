import "./carQuickItem.css";

export default function CarQuickItem({
    _id,
    make,
    category,
    imageUrl,
}) {
    return (
        <div className="car-quick-item">
            <img src={imageUrl} />

            <div className="info">
                <h3>{make}</h3>
                <h4>{category}</h4>
            </div>
        </div>
    );
};
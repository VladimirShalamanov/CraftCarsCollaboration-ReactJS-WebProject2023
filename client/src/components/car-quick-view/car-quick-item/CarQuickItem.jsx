import "./carQuickItem.css";

export default function CarQuickItem({
    _id,
    imageUrl,
    make,
    category,
    price,
}) {
    return (
        <div className="car-quick-item">
            <img src={imageUrl} />

            <div className="intro">
                <h3>{make}</h3>
                <h4>{category}</h4>
                <h4>{price}</h4>
            </div>
        </div>
    );
};
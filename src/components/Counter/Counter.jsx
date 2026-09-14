import "./styles.css";

function Counter({ count = 0, onMinusClick, onPlusClick }) {
    return (
        <div className="counter-wrapper">
            {/* 1. квадратик слева (-) */}
            <button className="counter-button" onClick={onMinusClick}>
                -
            </button>

            {/* 2. посередине счетчик */}
            <div className="counter-display">{count}</div>

            {/* 3. квадратик справа (+) */}
            <button className="counter-button" onClick={onPlusClick}>
                +
            </button>
        </div>
    );
}

export default Counter;


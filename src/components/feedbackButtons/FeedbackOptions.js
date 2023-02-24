import css from '../feedbackButtons/FeedbackOptions.module.css';

const FeedbackOptions = ({onGoodClick, onNeutralClick, onBadClick}) => {

    return (
        <div className={css.buttonWrapper}>
            <button type="button" className={css.button} onClick={onGoodClick}>Good</button>
            <button type="button" className={css.button} onClick={onNeutralClick}>Neutral</button>
            <button type="button" className={css.button} onClick={onBadClick}>Bad</button>
        </div>
    )
};

export default FeedbackOptions;
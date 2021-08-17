import RecommendSubsItem from './RecommendSubsItem';
import styles from './RecommendSubsList.module.css';

function RecommendSubsList(props) {
    let recommendSubsList = [];

    // console.log(props.data);

    if (props.data) {
        recommendSubsList = props.data.map(item =>
            <RecommendSubsItem data={item} key={item.id}/>
        )
    }




    return (
        <div className={styles.recommendSubs}>
            <ul className={null}>
                {props.data && recommendSubsList}
            </ul>
        </div>
    )
}

export default RecommendSubsList;
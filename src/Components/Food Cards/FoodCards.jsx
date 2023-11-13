import PropTypes from 'prop-types';
import FoodCard from './FoodCard/FoodCard';

const FoodCards = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-[200px] my-12'>
            {
                items.map(item => <FoodCard key={item._id} item={item}/>)
            }            
        </div>
    );
};

FoodCards.propTypes = {
    items: PropTypes.node,
};

export default FoodCards;
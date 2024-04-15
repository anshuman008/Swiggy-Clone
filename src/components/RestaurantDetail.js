import { useParams } from "react-router-dom"
import { SWIGGY_RESTAURANT_DETAIL_API_END_POINT, categoryType } from "../utils/constant";
import MenuItemShimmer from "./MenuItemShimmer";
import "../styles/restaurant-details.css"
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import RestaurantDetailsCard1 from "./RestaurantDetailsCard1";

const menuItemShimmerArray = new Array(16).fill(null);

const RestaurantDetail = ({ }) => {
    const { id } = useParams()
    const url = `${SWIGGY_RESTAURANT_DETAIL_API_END_POINT}${id}`
    const { data } = useFetch(url)

    console.log(data?.cards[2]?.card?.card?.info);
    const [menuItemCatgory, setMenuItemCategory] = useState(null)
    const [showIndex, setShowIndex] = useState(0)
    
    useEffect(() => {
        if (data) {
            const itemCategory = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(({ card: { card } }) => {
                return card['@type'] === categoryType.ITEM_CATEGORY || card['@type'] === categoryType.NESTED_ITEM_CATEGORY
            });
            setMenuItemCategory(itemCategory)
        }
    }, [data])
    if (!menuItemCatgory) {
        return <div className="container">
            {menuItemShimmerArray.map((_, index) => <MenuItemShimmer key={index} />)}
        </div>
    }
    const handleCategoryClick = (index) => {
        index === showIndex ? setShowIndex(null) : setShowIndex(index);

    };
    console.log(data)
    return (
        <div className="container">
            <RestaurantDetailsCard1 resInfo ={data?.cards[2]?.card?.card?.info}/>

            <h2 style={{paddingTop:10}}>Menu List</h2>
            {menuItemCatgory?.map((category, index) =>
                <MenuCategory
                    data={category.card.card}
                    key={index}
                    index={index}
                    showItemsList={index === showIndex}
                    onCategoryClick={() => handleCategoryClick(index)}
                />
                )}
        </div>)
}
export default RestaurantDetail
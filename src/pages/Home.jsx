import React from 'react'
// import FoodCards from '../components/FoodCards/FoodCards'
// import FoodOffers from '../components/Food Offers/FoodOffers'
import MenuPage from './MenuPage'
import Slider from '../components/slider/slider'
import SpecialFood from '../components/Special/SpecislFood'
// import BiryaniSection from '../components/Food Items/BiryaniSection'
// import KarahiSection from '../components/Food Items/KarahiSection'
// import BBQSection from '../components/Food Items/BBQSection'
// import QormaNihariSection from '../components/Food Items/QormaNihariSection'
// import BreadsSection from '../components/Food Items/BreadsSection'
// import BreakfastSection from '../components/Food Items/NashtaSection'
// import SnacksSection from '../components/Food Items/SnaksSection'
// import DessertsSection from '../components/Food Items/DesertSection'
// import DrinksSection from '../components/Food Items/DrinksSection'
import ChinesePoster from '../components/Food Items/ChinesePoster'
import ChineseStarters from '../components/Food Items/ChineseStarterSection'
import ChineseMainCourse from '../components/Food Items/ChineseMainCoursSection'
import ChineseSoups from '../components/Food Items/ChineseSoupSection'
import SideDishesExtras from '../components/Food Items/ChineseSideDishSection'
import ChineseDrinks from '../components/Food Items/ChineseDrinkSection'

const Home = () => {
  return (
    <>
    {/* <Header  /> */}
    <div className=''>
    <Slider/>
    <MenuPage/>
    <SpecialFood/>
     {/* <FoodCards/> */}
    {/* <FoodOffers/> */}
    <ChinesePoster/>
    <ChineseStarters/>
    <ChineseMainCourse/>
    <ChineseSoups/>
    <SideDishesExtras/>
    <ChineseDrinks/>
    {/* <MenuPage/> */}
    {/* <BiryaniSection/>
    <KarahiSection/>
    <BBQSection/>
    <QormaNihariSection/>
    <BreadsSection/>
    <BreakfastSection/>
    <SnacksSection/>
    <DessertsSection/>
    <DrinksSection/>
    
     */}
     </div>
    </>
  )
}

export default Home
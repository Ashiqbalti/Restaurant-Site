import React, { useState,useEffect } from "react";
// import FoodCards from "./FoodCards";
import FoodCards from '../components/FoodCards/FoodCards'
import BiryaniSection from '../components/Food Items/BiryaniSection'
import KarahiSection from '../components/Food Items/KarahiSection'
import BBQSection from '../components/Food Items/BBQSection'
import QormaNihariSection from '../components/Food Items/QormaNihariSection'
import BreadsSection from '../components/Food Items/BreadsSection'
import BreakfastSection from '../components/Food Items/NashtaSection'
import SnacksSection from '../components/Food Items/SnaksSection'
import DessertsSection from '../components/Food Items/DesertSection'
import DrinksSection from '../components/Food Items/DrinksSection'
// import ChinesePoster from '../components/Food Items/ChinesePoster'
// import ChineseStarters from '../components/Food Items/ChineseStarterSection'
// import ChineseMainCourse from '../components/Food Items/ChineseMainCoursSection'
// import ChineseSoups from '../components/Food Items/ChineseSoupSection'
// import SideDishesExtras from '../components/Food Items/ChineseSideDishSection'
// import ChineseDrinks from '../components/Food Items/ChineseDrinkSection'
// import other sections similarly

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Scroll to section when selectedCategory changes
  useEffect(() => {
    if (!selectedCategory) return;

    const section = document.getElementById(selectedCategory);
    if (section) {
      const yOffset = -80; // adjust for fixed navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [selectedCategory]);

  return (
    <div>
      {/* Pass the state setter to FoodCards */}
      <FoodCards setSelectedCategory={setSelectedCategory} />

      {/* Conditional Rendering */}
      {selectedCategory === "biryani" && <BiryaniSection />}
      {selectedCategory === "karahi" && <KarahiSection />}
      {selectedCategory === "qorma" && <QormaNihariSection />}
      {selectedCategory === "bbq" && <BBQSection/>}
      {selectedCategory === "breads" && <BreadsSection />}
      {selectedCategory === "nashta" && <BreakfastSection />}
      {selectedCategory === "snacks" && <SnacksSection />}
      {selectedCategory === "desserts" && <DessertsSection />}
      {selectedCategory === "drinks" && <DrinksSection />}
      {/* {selectedCategory === "qorma" && <ChineseStarters />}
      {selectedCategory === "qorma" && <ChineseMainCourse/>}
      {selectedCategory === "qorma" && <ChineseSoups />}
      {selectedCategory === "qorma" && <SideDishesExtras />}
      {selectedCategory === "qorma" && <ChineseDrinks />} */}
      {/* Add other sections similarly */}

      {/* Optional: Show all sections if nothing selected */}
      {/* {!selectedCategory && (
        <div className="text-center mt-10 text-gray-500">
          Please select a category above to see menu items.
        </div>
      )} */}
    </div>
  );
};

export default MenuPage;

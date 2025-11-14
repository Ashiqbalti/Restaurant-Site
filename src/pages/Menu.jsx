import React from "react";

const Menu = () => {
  return (
    <div className= "relative bg-gray-50 z-20 text-gray-800 px-6 md:px-20 lg:px-32 py-32 space-y-24"
    style={{
        backgroundImage: "url('/aboutBg/about-bg.png')", // ✅ correct your image path
      }}
    >
       <div className="absolute inset-0 bg-black/70"></div>
      {/* Header */}
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-extrabold text-yellow-500 mb-4">
          Our Premium Menus
        </h1>
        <p className="text-lg text-white">
          Choose from our wide range of exquisite menu selections crafted for
          every occasion.
        </p>
      </div>

      {/* SECTION 1: Barat & Valima Choices */}
      <section  className="z-20 relative">
        <h2 className="text-3xl z-20 relative font-bold text-yellow-500 mb-10 text-center">
          Barat & Valima Choices
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CHOICE 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 1</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 920/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani/ Pullao</li>
            <li>Mix Vegetable Rice</li>
            <li>Chicken Vegetable Chilli</li>
            <li>Chicken Manchurian</li>
            <li>Mutton Kunna</li>
            <li>Chicken Koyla Karahi (Live)</li>
            <li>
              Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Cherry Crunch/ Cream
              Cocktail
            </li>
            <li>Gulab Jaman/ Dahi Barey/ Jalebi</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 2</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 965/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani/ Pullao</li>
            <li>Chicken Karahi</li>
            <li>Beef Haleem</li>
            <li>Chicken Kofta</li>
            <li>Chicken Wonton (Live)</li>
            <li>Chicken Vegetable Roll (Live)</li>
            <li>Pan Stall</li>
            <li>Dahi Barey</li>
            <li>Lab e Shiren</li>
            <li>Gulab Jaman</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 3</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 690/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani / Pullao</li>
            <li>Chicken Karahi/ Aachar Gosht/ Qorma</li>
            <li>Seekh Kabab (Live)</li>
            <li>Kachoori & Tarkari (Live)</li>
            <li>
              Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Cherry Crunch/ Cream
              Cocktail
            </li>
            <li>Gulab Jaman/ Dahi Baray/ Jalebi</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 4</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 650/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani / Pullao</li>
            <li>Chicken Karahi/ Aachar Gosht/ Qorma</li>
            <li>Chicken Bihari/ Tikka Boti (Live)</li>
            <li>
              Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Cherry Crunch/ Cream
              Cocktail
            </li>
            <li>Gulab Jaman/ Dahi Baray/ Jalebi</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 5 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 5</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 760/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani / Pullao</li>
            <li>Chicken Bihari/ Tikka Boti (Live)</li>
            <li>Seekh Kabab (Live)</li>
            <li>Kachoori & Tarkari (Live)</li>
            <li>
              Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Cherry Crunch/ Cream
              Cocktail
            </li>
            <li>Gulab Jaman/ Dahi Baray/ Jalebi</li>
            <li>Puri Paratha (Live)</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 6 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 6</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 890/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani / Pullao</li>
            <li>Chicken Karahi/ Aachar Gosht/ Qorma</li>
            <li>Chicken Bihari/ Tikka Boti (Live)</li>
            <li>Seekh Kabab (Live)</li>
            <li>Kachoori & Tarkari (Live)</li>
            <li>
              Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Cherry Crunch/ Cream
              Cocktail
            </li>
            <li>Gulab Jaman/ Dahi Baray/ Jalebi</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 7 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 7</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 1020/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani / Pullao</li>
            <li>Chicken Karahi/ Aachar Gosht/ Qorma</li>
            <li>
              Mutton Whole Stuffed (filled with Rice, Dry fruits & Eggs)
            </li>
            <li>Fish Finger (Live)</li>
            <li>Mutton Chicken Liver Fry KATAKAT</li>
            <li>
              Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Cherry Crunch/ Cream
              Cocktail
            </li>
            <li>Gulab Jaman/ Dahi Baray/ Jalebi</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 8 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 8</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 1230/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani / Pullao</li>
            <li>Mix Vegetable Rice</li>
            <li>Chicken Manchurian</li>
            <li>Mutton Kunna/ Qorma/ Karahi</li>
            <li>Chicken Koyla Karahi Live</li>
            <li>Fish Fajita (Live)</li>
            <li>Beef Shashlik Stic (Live)</li>
            <li>Chapli Kabab</li>
            <li>Chicken Wonton</li>
            <li>Desert Bar</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>

        {/* CHOICE 9 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CHOICE 9</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 1580/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Welcome Drink</li>
            <li>Chicken Biryani / Pullao</li>
            <li>Mutton Kunna/ Qorma/ Karahi</li>
            <li>Chicken Handi</li>
            <li>Chapli Kabab (Live)</li>
            <li>Chicken Bihari/ Tikka Boti (Live)</li>
            <li>Fish n Chips (live Fried with Bread Crumb)</li>
            <li>
              Mutton Whole Stuffed (filled with Rice, Dry fruits & Eggs)
            </li>
            <li>Palak Paneer</li>
            <li>Desert Bar (8 Items)</li>
            <li>Milky Nan & Taftan</li>
            <li>Salad & Raita</li>
            <li>Bagharey Baigan, Hari Mich Ka Salan, Aloo Bukhara Chutney</li>
          </ul>
        </div>
        </div>
      </section>

      {/* SECTION 2: VIP Cuisine */}
      <section className="z-20 relative">
        <h2 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
          VIP Cuisine
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CUISINE 01 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CUISINE 01</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 1700/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>STARTER — Lemonade (with lemon slice)/ Fresh Sugarcane Juice (Live)</li>
            <li>MAIN COURSE — Mutton Zafrani/ Hyderabadi Biryani/ Pulao</li>
            <li>Mutton Kunna/ DaneDar Qorma</li>
            <li>Dry Items — Chicken Reshmi/ Chullu Kabab (Live)</li>
            <li>Fish Pomfret Fried</li>
            <li>Chicken Malai/ Labnani Boti (Boneless) Live</li>
            <li>Fry Items — Chicken Coriander (Live)</li>
            <li>Ice Cream Bar — Ice Cream Sicilian (Live)</li>
            <li>Cream Cocktail</li>
            <li>Salads & Tandoor — Garlic Nan (on Live Tandoor), Roghni Nan (on Live Tandooor)</li>
            <li>Chutneys (3 types), Raita, Assorted Salad Bar</li>
          </ul>
        </div>

        {/* CUISINE 02 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CUISINE 02</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 2000/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>STARTER — Lemonade (with lemon slice)/ Fresh Sugarcane Juice (Live)</li>
            <li>Chicken Peri Bites/ Cheese Puff/ Ball</li>
            <li>MAIN COURSE — Beef Afghani Pulao/ White Biryani</li>
            <li>Chicken Singaporean Rice/ Biryani</li>
            <li>Mutton Kunna/ Danedar Qorma/ Karahi</li>
            <li>Chicken Makhni Handi Boneless</li>
            <li>Dry Items — Chicken Reshmi/ Chullu Kabab (Live)</li>
            <li>Prawn Tempura (Live)</li>
            <li>Fish Pomfret Fried/ Grilled (Live)</li>
            <li>Chicken Malai/ Labnani Boti (Boneless) Live</li>
            <li>Deserts — Ice Cream Sicilian Slice/ Roasted Almond</li>
            <li>
              Desert Bar (8 Items) with Chocolate Fountain Including Single Glass/ Cup serving in different delicious desserts
            </li>
            <li>Salads & Tandoor — Garlic Nan on Live Tandoor, Roghni Nan on Live Tandoor</li>
            <li>Milky Nan & Taftan, Chutneys (3 type), Raita, Assorted Salad Bar</li>
          </ul>
        </div>

        {/* CUISINE 03 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CUISINE 03</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 2400/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>STARTER — Fresh Juice (Nestle)</li>
            <li>MAIN COURSE — Prawn Masala Rice (Live Fried with Prawn)</li>
            <li>Mutton Zafrani/ Bombay Biryani</li>
            <li>Mutton Kunna/ Karahi/ Danedar Qorma</li>
            <li>Chicken Makhni Handi Boneless/ Koyla Karahi (Live)</li>
            <li>Dry Items — Chicken Steam Foil, BBQ Batair (Live)</li>
            <li>Fish n Chips (Live Fried with Bread Crumb)</li>
            <li>Mutton whole Stuff (filled with Rice, Eggs and Dry Fruits) Live Serving</li>
            <li>Fry Items — Arabi Paratha (Live), Chicken Cheese Corn (Live)</li>
            <li>Ice Cream Bar — Fry Ice Cream (Live), Cone Ice Cream of Different Flavors</li>
            <li>Salads & Tandoor — Garlic Nan on Live Tandoor, Roghni Nan on Live Tandooor</li>
            <li>Milky Nan & Taftan, Chutneys (3 types), Raita, Assorted Salad Bar</li>
          </ul>
        </div>

        {/* CUISINE 04 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">CUISINE 04</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 3880/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>STARTER — Lemonade (with lemon slice)/ Fresh Sugarcane Juice (Live)</li>
            <li>Chicken Wonton (Live)</li>
            <li>MAIN COURSE — Beef Afghani/ Yakhni/ Kashmiri Pulao</li>
            <li>Prawn Masala Rice (Live Fried with Prawn)</li>
            <li>Chicken Schezwan</li>
            <li>Mutton Kunna/ Karahi/ Danedar Qorma</li>
            <li>Chicken Makhni Handi Boneless/ Koyla Karahi (Live)</li>
            <li>Okhai Memon Daal Chawal</li>
            <li>Pasta (Live)</li>
            <li>Dry Items — Chicken Steam Foil, Chullu Kabab (Live), Chicken Mandi</li>
            <li>Peshawari Chapli Kabab (Live), BBQ Batair (Live)</li>
            <li>Fish n Chips (Live Fried with Bread Crumb), Katakat (Live)</li>
            <li>Mutton whole Stuff (filled with Rice, Eggs and Dry Fruits) Live Serving</li>
            <li>Fry Items — Arabi Paratha (Live), Chicken Cheese Corn (Live), Chicken Shawarma (Live), Chicken Peri Bites</li>
            <li>Deserts — Jalebi (Live), Gulab Jaman, Cream Caramel, Lab e shiren, Sakori Kheer, Cone Ice Cream of Different Flavors</li>
            <li>Salads & Tandoor — Garlic Nan (on Live Tandoor), Roghni Nan (on Live Tandooor), Besni Roti (Live Counter), Chapati (Live)</li>
            <li>Chutneys (3 types), Raita, Assorted Salad Bar</li>
          </ul>
        </div>
        </div>
      </section>

      {/* SECTION 3: Mehndi & Mayun Packages */}
      <section className="z-20 relative">
        <h2 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
          Mehndi & Mayun Packages
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        {/* PACKAGE 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PACKAGE 1</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 450/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>GOLA/ CHANDAN KABAB</li>
            <li>PURI PARATHA</li>
            <li>KACHORI & TARKARI</li>
            <li>SUJI HALWA SPECIAL</li>
            <li>FRESH GREEN SALAD</li>
            <li>RAITA</li>
            <li>BBQ Sauce</li>
          </ul>
        </div>

        {/* PACKAGE 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PACKAGE 2</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 480/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>GOLA/ CHANDAN KABAB</li>
            <li>PURI PARATHA</li>
            <li>KACHORI & TARKARI</li>
            <li>DAHI BARAY</li>
            <li>GULAB JAMAN</li>
            <li>FRESH GREEN SALAD</li>
            <li>RAITA</li>
            <li>BBQ Sauce</li>
          </ul>
        </div>

        {/* PACKAGE 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PACKAGE 3</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 540/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>DUM QEEMA</li>
            <li>RAWAY MAIDAY KAY PARATHEY</li>
            <li>KACHORI & TARKARI</li>
            <li>DAHI BARAY</li>
            <li>GULAB JAMAN</li>
            <li>FRESH GREEN SALAD</li>
            <li>RAITA</li>
            <li>BBQ Sauce</li>
          </ul>
        </div>

        {/* PACKAGE 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PACKAGE 4</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 660/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>GOLA/ CHANDAN KABAB</li>
            <li>BEEF BIHARI BOTI</li>
            <li>PURI PARATHA</li>
            <li>KACHORI & TARKARI</li>
            <li>SUJI HALWA SPECIAL</li>
            <li>FRESH GREEN SALAD</li>
            <li>RAITA</li>
            <li>BBQ Sauce</li>
          </ul>
        </div>

        {/* PACKAGE 5 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PACKAGE 5</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 680/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>GOLA/ CHANDAN KABAB</li>
            <li>CHICKEN BIHARI BOTI (WITH BONE)</li>
            <li>PURI PARATHA</li>
            <li>KACHORI & TARKARI</li>
            <li>DAHI BARAY</li>
            <li>GULAB JAMAN</li>
            <li>FRESH GREEN SALAD</li>
            <li>RAITA, BBQ Sauce</li>
          </ul>
        </div>

        {/* PACKAGE 6 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PACKAGE 6</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 755/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>CHICKEN BIRYANI/ SINGAPOREAN RICE</li>
            <li>CHICKEN WONTON</li>
            <li>DUM QEEMA</li>
            <li>RAWAEY MAIDAY KAY PARATHAY</li>
            <li>CHICKEN MINT ROLL</li>
            <li>KACHORI & TARKARI</li>
            <li>DAHI BARAY</li>
            <li>GULAB JAMAN</li>
            <li>FRESH GREEN SALAD</li>
            <li>RAITA, BBQ Sauce</li>
          </ul>
        </div>

        {/* PACKAGE 7 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PACKAGE 7 (LIVE FOOD STREET MENU)</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 1550/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>MIX VEGETABLE EGG FRIED RICE</li>
            <li>KATA KAT (DIL, KALEGI, QEEMA)</li>
            <li>CHICKEN LOLLYPOP KABAB</li>
            <li>CHICKEN SHAWARMA</li>
            <li>CHICKEN WONTON</li>
            <li>KACHORI & TARKARI</li>
            <li>MASALA DOSA</li>
            <li>CHICKEN MINT ROLL</li>
            <li>CHANA CHAT</li>
            <li>MAL PURA</li>
            <li>GOLA GANDA</li>
            <li>CANDY FLOSS</li>
            <li>NAMKIN LASSI</li>
            <li>PANI PURI</li>
            <li>JALEBI (LIVE)</li>
            <li>BESNI ROTI WITH CHUTNEY (LIVE COUNTER)</li>
            <li>PALAK PANEER</li>
            <li>POP CORN, PAN STALL</li>
            <li>DAHI BARAY, GULAB JAMAN</li>
            <li>FRESH GREEN SALAD</li>
            <li>RAITA, BBQ Sauce</li>
          </ul>
        </div>

       </div>
      </section>

      {/* SECTION 4: One Dish Offers */}
      <section className="z-20 relative">
        <h2 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
          One Dish Offer
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* OFFER 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 1</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 460/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1)</li>
            <li>Chicken Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 2</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 500/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1.5)</li>
            <li>Chicken Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 3</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 480/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Beef Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1)</li>
            <li>Chicken Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 4</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 520/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Beef Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1.5)</li>
            <li>Chicken Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 5 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 5</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 560/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Mutton Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1)</li>
            <li>Chicken Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 6 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 6</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 600/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Mutton Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1.5)</li>
            <li>ChickenKarahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 7 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 7</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 560/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Chicken Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1.5)</li>
            <li>Mutton Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 8 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 8</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 630/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Beef Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1.5)</li>
            <li>Mutton Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>

        {/* OFFER 9 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">OFFER 9</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 650/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>Mutton Biryani/ Pullao/ Singaporean Rice (with Meat Ratio 1x1.5)</li>
            <li>Mutton Karahi/ Stew/ Qorma/ Handi/ Aachar Gosht</li>
            <li>Lab e Shiren/ Rabri Kheer/ Cream Caramel/ Fruit Trifle/ Ice Cream</li>
            <li>Milky Nan, Taftan, Raita & Salad Platter</li>
          </ul>
        </div>
        </div>
      </section>

      {/* SECTION 5: Hi-Tea Party */}
      <section className="z-20 relative">
        <h2 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
          Hi-Tea Party
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        {/* PARTY 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PARTY 1</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 470/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>SPRING ROLL</li>
            <li>FRENCH FRIES</li>
            <li>FISH FINGER</li>
            <li>CHICKEN WINGS</li>
            <li>MARBLE CAKE SLICE</li>
            <li>GULAB JAMAN</li>
            <li>KETCHUP</li>
            <li>TEA & COFFEE</li>
          </ul>
        </div>

        {/* PARTY 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PARTY 2</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 430/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>CHICKEN VOL AU VENT</li>
            <li>VEGETABLE SAMOSA</li>
            <li>FISH FINGER</li>
            <li>FRENCH PESTRY/BROWNIES</li>
            <li>CHUM CHUM</li>
            <li>KETCHUP</li>
            <li>TEA & COFFEE</li>
          </ul>
        </div>

        {/* PARTY 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PARTY 3</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 400/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>ASSORTED SANDWICHES</li>
            <li>SHAMI KABAB</li>
            <li>MINI PIZZA</li>
            <li>FRUIT CAKE SLICE</li>
            <li>GULAB JAMAN</li>
            <li>KETCHUP</li>
            <li>TEA & COFFEE</li>
          </ul>
        </div>

        {/* PARTY 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PARTY 4</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 280/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>SAMOSA (QEEMA)</li>
            <li>CHINESE ROLL</li>
            <li>CHICKEN WINGS</li>
            <li>DRY PASTRY/BROWNIES</li>
            <li>KETCHUP</li>
            <li>TEA & COFFEE</li>
          </ul>
        </div>

        {/* PARTY 5 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PARTY 5</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 930/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>ASSORTED SANDWICHES</li>
            <li>CHICKEN PATTIES</li>
            <li>PLAIN CAKE SLICE</li>
            <li>KETCHUP</li>
            <li>TEA & COFFEE</li>
          </ul>
        </div>

        {/* PARTY 6 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">PARTY 6</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 950/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>QEEMA SAMOSA</li>
            <li>CHICKEN SHAWARMA</li>
            <li>CHICKEN SANDWICHES</li>
            <li>SHAMI KABAB BEEF</li>
            <li>CHICKEN MINI PIZZA</li>
            <li>CHICKEN WINGS</li>
            <li>CHICKEN VEGETABLE ROLL</li>
            <li>FRENCH FRIES</li>
            <li>CHICKEN PATTIES</li>
            <li>KACHOORI & TARKARI</li>
            <li>LASSI</li>
            <li>BROWNIES</li>
            <li>GULAB JAMAN</li>
            <li>KETCHUP</li>
            <li>TEA & COFFEE</li>
          </ul>
        </div>
        </div>
      </section>

      {/* SECTION 6: Chinese Menu Deals */}
      <section className="z-20 relative">
        <h2 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
          Chinese Menu Deals
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* DEAL 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">DEAL 1</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 930/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>VEGETABLE SOUP WITH NOODLES</li>
            <li>CHINESE FRIED RICE</li>
            <li>BEEF CHILLI WITH SOYA SAUCE</li>
            <li>SWEET & SOUR DUMPLING</li>
            <li>CHICKEN MANCHURIAN</li>
            <li>FISH FRIED</li>
            <li>DINNER ROLL</li>
            <li>BREAD & BUTTER PUDDING</li>
            <li>RUSSIAN SALAD</li>
            <li>KETCHUP</li>
            <li>SAUCE</li>
          </ul>
        </div>

        {/* DEAL 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">DEAL 2</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 880/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>CHICKEN CORN SOUP WITH FISH CRACKERS</li>
            <li>VEGETABLE SPRING ROLL</li>
            <li>CHICKEN GARLIC</li>
            <li>SWEET N SOUR BEEF</li>
            <li>AMERICAN CHOPSUEY</li>
            <li>CHINESE FRIED RICE</li>
            <li>DINNER ROLL/ BUTTER</li>
            <li>ALMOND SOUFFLE</li>
            <li>RUSSIAN SALAD</li>
            <li>KETCHUP</li>
            <li>SAUCE</li>
          </ul>
        </div>

        {/* DEAL 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">DEAL 3</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 910/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>CHICKEN HOT N SOUR SOUP</li>
            <li>SWEET N SOUR FISH</li>
            <li>BEEF GARLIC</li>
            <li>CHINESE VEGETABLE WITH PRAWNS</li>
            <li>CHICKEN SPRING ROLLS</li>
            <li>EGG FRIED RICE</li>
            <li>DINNER ROLL/ BUTTER</li>
            <li>AMERICAN TRIFLE</li>
            <li>RUSSIAN SALAD</li>
            <li>KETCHUP</li>
            <li>SAUCE</li>
          </ul>
        </div>

        {/* DEAL 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">DEAL 4</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 999/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>CHICKEN FRIED RICE</li>
            <li>SWEET N SOUR FISH</li>
            <li>CHICKEN MANCHURIAN/ SHASHLIK</li>
            <li>QUICK FRIED BEEF (ON SPOT)</li>
            <li>PRAWN TEMPURA WITH FRIED VEGETABLES</li>
            <li>DINNER ROLL/ BUTTER</li>
            <li>ICE CREAM</li>
            <li>RUSSIAN SALAD</li>
            <li>KETCHUP</li>
            <li>SAUCE</li>
          </ul>
        </div>

        {/* DEAL 5 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">DEAL 5</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 540/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>EGG FRIED RICE</li>
            <li>BEEF VEGETABLE CHILLI</li>
            <li>CHINESE SPRING ROLL</li>
            <li>DINNER ROLL/ BUTTER</li>
            <li>CHOCLATE MOOSE</li>
            <li>RUSSIAN SALAD</li>
            <li>KETCHUP</li>
            <li>SAUCE</li>
          </ul>
        </div>

        {/* DEAL 6 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">DEAL 6</h3>
          <p className="font-semibold text-gray-700 mb-4">PER HEAD 720/=</p>
          <ul className="list-disc ml-5 mt-2 leading-relaxed">
            <li>EGG FRIED RICE</li>
            <li>BEEF GARLIC</li>
            <li>SWEET N SOUR CHICKEN</li>
            <li>FISH ORLAY-DINNER ROLL</li>
            <li>CREAM CARAMEL</li>
            <li>RUSSIAN SALAD</li>
            <li>KETCHUP</li>
            <li>SAUCE</li>
          </ul>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Menu;


// <div className="text-center py-12 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
//   <h3 className="text-2xl font-bold mb-3">Hungry Already?</h3>
//   <p className="mb-5">Order now and get your favorite meal delivered hot & fresh!</p>
//   <a
//     href="https://wa.me/923001234567" // your WhatsApp number
//     className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//   >
//     Order via WhatsApp
//   </a>
// </div>

// </>
//   )
// }

// export default Menu

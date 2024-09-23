import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RotiMaryam from "../assets/image/food/file.png";
import NasiGoreng from "../assets/image/food/nasi-goreng.png";
import KueCoklat from "../assets/image/food/kue-coklat.png";
import LeMinerale from "../assets/image/food/le-mineral-600ml.png";
import RotiBakar from "../assets/image/food/roti-bakar.png";
import SotoBekasi from "../assets/image/food/soto-bekasi.png";
import TehPanas from "../assets/image/food/teh-panas.png";

function Menu() {
  const [filter, setFilter] = useState('all');

  const menuItems = [
    { id: 1, category: 'mainCourse', name: 'Soto Bekasi', price: 'Rp.55.000', imgSrc: SotoBekasi },
    { id: 2, category: 'beverage', name: 'Teh Panas', price: 'Rp.31.000', imgSrc: TehPanas },
    { id: 3, category: 'dessert', name: 'Kue Coklat', price: 'Rp.35.000', imgSrc: KueCoklat },
    { id: 4, category: 'mainCourse', name: 'Nasi Goreng', price: 'Rp.80.000', imgSrc: NasiGoreng },
    { id: 5, category: 'snack', name: 'Roti Bakar', price: 'Rp.36.000', imgSrc: RotiBakar },
    { id: 6, category: 'snack', name: 'Roti Maryam', price: 'Rp.23.000', imgSrc: RotiMaryam },
    { id: 7, category: 'beverage', name: 'Mineral Water', price: 'Rp.10.000', imgSrc: LeMinerale },
  ];

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <div className="menu" id="menu">
      <div className="container">
        <div className="title">
          <p>Our Menu</p>
          <h2>The Most Popular</h2>
        </div>
        <div className="content">
          <div className="button-filter">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('mainCourse')} className={filter === 'mainCourse' ? 'active' : ''}>Main Course</button>
            <button onClick={() => setFilter('breakfast')} className={filter === 'breakfast' ? 'active' : ''}>Breakfast</button>
            <button onClick={() => setFilter('appetizer')} className={filter === 'appetizer' ? 'active' : ''}>Appetizer</button>
            <button onClick={() => setFilter('snack')} className={filter === 'snack' ? 'active' : ''}>Snack</button>
            <button onClick={() => setFilter('dessert')} className={filter === 'dessert' ? 'active' : ''}>Dessert</button>
            <button onClick={() => setFilter('beverage')} className={filter === 'beverage' ? 'active' : ''}>Beverage</button>
          </div>
          <div className="row menu-content">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  className="menu-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.imgSrc} alt={item.name} />
                  <h4>{item.name}</h4>
                  <b>{item.price}</b>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

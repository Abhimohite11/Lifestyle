import React from 'react';
import Annoucment from '../components/Annoucment';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';
import Footer from '../components/footer';
import Products from '../components/Products';

function Home(props) {
    return (
        <div>
<Annoucment/>
<Navbar/>
<Slider/>
<Categories/>
<Products/>

<Newsletter/>
<Footer/>
        </div>
    );
}

export default Home;
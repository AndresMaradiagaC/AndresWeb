
const link = document.querySelectorAll('a');

const design26 = document.querySelector('.design26');
const designone = document.querySelector('.designone');
const designtwo = document.querySelector('.designtwo');
const design3 = document.querySelector('.design3');
const design4 = document.querySelector('.design4');
const design5 = document.querySelector('.design5');
const design6 = document.querySelector('.design6');
const design7 = document.querySelector('.design7');
const design8 = document.querySelector('.design8');
const design9 = document.querySelector('.design9');
const design10 = document.querySelector('.design10');
const design11 = document.querySelector('.design11');
const design12 = document.querySelector('.design12');
const design13 = document.querySelector('.design13');
const design14 = document.querySelector('.design14');
const design15 = document.querySelector('.design15');
const design16 = document.querySelector('.design16');
const design17 = document.querySelector('.design17');
const design18 = document.querySelector('.design18');
const design19 = document.querySelector('.design19');
const design20 = document.querySelector('.design20');
const design21 = document.querySelector('.design21');
const design22 = document.querySelector('.design22');
const design23 = document.querySelector('.design23');
const design24 = document.querySelector('.design24');
const design25 = document.querySelector('.design25');



link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        
        design26.textContent = changeLanguage[attr].design26;
        designone.textContent = changeLanguage[attr].designone;
        designtwo.textContent = changeLanguage[attr].designtwo;
        design3.textContent = changeLanguage[attr].design3;
        design4.textContent = changeLanguage[attr].design4;
        design5.textContent = changeLanguage[attr].design5;
        design6.textContent = changeLanguage[attr].design6;
        design7.textContent = changeLanguage[attr].design7;
        design8.textContent = changeLanguage[attr].design8;
        design9.textContent = changeLanguage[attr].design9;
        design10.textContent = changeLanguage[attr].design10;
        design11.textContent = changeLanguage[attr].design11;
        design12.textContent = changeLanguage[attr].design12;
        design13.textContent = changeLanguage[attr].design13;
        design14.textContent = changeLanguage[attr].design14;
        design15.textContent = changeLanguage[attr].design15;
        design16.textContent = changeLanguage[attr].design16;
        design17.textContent = changeLanguage[attr].design17;
        design18.textContent = changeLanguage[attr].design18;
        design19.textContent = changeLanguage[attr].design19;
        design20.textContent = changeLanguage[attr].design20;
        design21.textContent = changeLanguage[attr].design21;
        design22.textContent = changeLanguage[attr].design22;
        design23.textContent = changeLanguage[attr].design23;
        design24.textContent = changeLanguage[attr].design24;
        design25.textContent = changeLanguage[attr].design25;

    });
});


let changeLanguage = {

    "espanish":
    {

        "design26": "Un único pase para verlo todo. Ahorra hasta un 50% en las mejores actividades, tours y atracciones turísticas con Go City®.",
        "designone": "Los mejores destinos para vacacionar en familia.",
        "designtwo": "¡Descubre el mundo con nuestra agencia de viajes de ensueño!, nos dedicamos a hacer realidad tus sueños de aventura. Desde playas exóticas hasta ciudades vibrantes, que se adaptan a tus gustos y preferencias. Con expertos en destinos de todo el mundo, garantizamos experiencias inolvidables y momentos que perdurarán toda la vida.",
        "design3": "Nuestros destinos de viaje",
        "design4": "Audio de la conferencia",
        "design5": "¿Qué tiene de especial Go City®?",
        "design6": "Más de 1500 Actividades en todo el mundo",
        "design7": "Desde los monumentos más emblemáticos hasta las maravillas ocultas de cada ciudad, lo tenemos todo.",
        "design8": "7,5 millones de usuarios activos",
        "design9": "¡Y una puntuación de 4,7* en la app! Únete a los millones de turistas que ya confían en Go City para vivir una escapada inolvidable.",
        "design10": "Ahorra más",
        "design11": "Con nuestros pases, ahorrarás más que comprando entradas individuales. ¡Te lo garantizamos!",
        "design12": "Explora más",
        "design13": "Descubre los mejores monumentos, tours, actividades y experiencias de cada ciudad.",
        "design14": "Es muy fácil",
        "design15": "Tendrás todo cuanto necesitas en la app de Go City. ¡Pan comido!",
        "design16": "¡5% de descuento, porque sí!",
        "design17": "Suscríbete a nuestra newsletter y recibe descuentos exclusivos, ideas de viaje y novedades sobre nuestros destinos.",
        "design18": "Correo Electrónico",
        "design19": "Suscríbete ya",
        "design20": "Inicio",
        "design21": "Información",
        "design22": "Destinos",
        "design23": "Sobre nosotros",
        "design24": "Contacto",
        "design25": "Derechos Reservados",


    },

    "english":
    {

        "design26": "A single pass to see everything. Save up to 50% on the best activities, tours and tourist attractions with Go City®",
        "designone": "The best destinations for family vacations.",
        "designtwo": "Discover the world with our dream travel agency! We are dedicated to making your adventure dreams come true. From exotic beaches to vibrant cities, they adapt to your tastes and preferences. With experts in destinations around the world, we guarantee unforgettable experiences and moments that will last a lifetime.",
        "design3": "our travel destinations",
        "design4": "Conference audio",
        "design5": "What is special about Go City®?",
        "design6": "More than 1500 Activities around the world",
        "design7": "From the most iconic monuments to the hidden wonders of each city, we have it all.",
        "design8": "7.5 million active users",
        "design9": "And a score of 4.7* on the app! Join the millions of tourists who already trust Go City to live an unforgettable getaway.",
        "design10": "Save more",
        "design11": "With our passes, you'll save more than buying individual tickets. We guarantee it!",
        "design12": "Explore more",
        "design13": "Discover the best monuments, tours, activities and experiences of each city.",
        "design14": "Too easy",
        "design15": "You will have everything you need in the Go City app. Easy peasy!",
        "design16": "5% discount, just because!",
        "design17": "Subscribe to our newsletter and receive exclusive discounts, travel ideas and news about our destinations.",
        "design18": "Email",
        "design19": "Subscribe now",
        "design20": "Start",
        "design21": "Information",
        "design22": "Destinations",
        "design23": "About us",
        "design24": "Contact",
        "design25": "All rights reserved",
    }
}
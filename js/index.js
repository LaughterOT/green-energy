
// resources
let resources = {
    Solar: {
        title: 'Solar Energy',
        bodyText: "Solar energy uses the sun's energy to produce heat or electricity. It uses solar panels, which have photovoltaic cells built into them that turn sunlight straight into electricity. In addition to being plentiful and renewable, solar energy produces no carbon emissions when in use. Advancements in solar technology are rendering it more economical and efficient, thereby providing a substantial contribution towards the mitigation of carbon footprints.Solar energy harnesses the power of the sun to generate electricity or heat. It involves the use of solar panels, which contain photovoltaic cells that convert sunlight directly into electricity. Solar energy is abundant, renewable, and emits no greenhouse gases during operation. Innovations in solar technology are making it more efficient and affordable, contributing significantly to the reduction of carbon footprints. Moreover, solar energy systems can be installed on various scales, from small rooftop panels for individual homes to large solar farms that power entire communities. Advances in energy storage technology, such as batteries, also enable the storage of solar energy for use during cloudy days or at night, enhancing the reliability and accessibility of this renewable energy source. The widespread adoption of solar energy is pivotal in the global transition to a sustainable and resilient energy infrastructure.",
        url: 'images/panel.png'
    },
    Hydro: {
        title: 'Hydro Power Energy',
        bodyText: "The energy of flowing water is used to create electricity through hydropower, also known as hydroelectric power. Usually, it incorporates dams that hold water in reservoirs. When the water is released, the water spins turbines to produce energy. For generations, hydropower has been a dependable and steady energy source. Contemporary hydropower facilities can generate large amounts of clean electricity while minimising their negative effects on the environment.In addition to generating electricity, hydropower facilities often offer multiple benefits such as flood control, irrigation support, and water supply management. Pumped-storage hydropower, a type of hydroelectric system, provides grid stability by storing excess energy and releasing it when demand is high. This makes hydropower an essential component of a balanced and resilient energy grid. Ongoing research and technological innovations continue to improve the efficiency and sustainability of hydropower, ensuring it remains a vital part of the global renewable energy portfolio.",
        url: 'images/dam.png'
    },
    Wind: {
        title: 'Wind Energy',
        bodyText: "Wind energy uses wind turbines to harness the kinetic energy of the wind and transform it into electrical power. When the wind blows across the huge blades on these turbines, it powers a generator that generates electricity. On land or offshore, where wind speeds are higher and more reliable, wind farms can be situated. One of the electricity generation sources with the quickest rate of growth is wind energy, which is essential to the shift to clean energy in the future.Moreover, advancements in wind turbine technology have significantly increased their efficiency and reduced costs, making wind power more competitive with traditional energy sources. Modern wind turbines are designed to operate in a variety of environments and can generate power even at lower wind speeds. Additionally, wind energy projects often bring economic benefits to local communities through job creation, land lease payments, and increased tax revenues. As a renewable and inexhaustible resource, wind energy holds immense potential to help achieve global sustainability goals and reduce our dependence on fossil fuels.",
        url: 'images/turbine.png'
    }
    
}






// get the referenes to the active parts of html
let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

// event handler
function selectPage(ev) {
    let currentButton = ev.target;
    // console.log(currentButton.id);

    // styling the active button here:
    


    // pushing the corresponding data inside the div#dynamic-content:
    dc.innerHTML = `
    <h2>${resources[currentButton.id].title}</h2> 
    <img src = "${resources[currentButton.id].url }">
    <p>${resources[currentButton.id].bodyText}</p>

    `;    
}



document.addEventListener ("DOMContentLoaded", (event) => {
    dc.innerHTML = `
    <h2>${resources.Solar.title}</h2> 
    <img src = "${resources.Solar.url }">
    <p>${resources.Solar.bodyText}</p>
    `;    
});

// registering buttons for click event
for (let button of buttons) {
    button.addEventListener('click', selectPage);
}
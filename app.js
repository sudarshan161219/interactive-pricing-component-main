const range = document.querySelector('.range');
const thumb = document.querySelector('.thumb');
const track = document.querySelector('.track-inner');

const rangevalue = document.querySelector('.rangeValue');
const desktopRangeValue = document.querySelector('.desktop-rangeValue');

const pricing = document.querySelector('.pricing');
const desktopPricing = document.querySelector('.desktop-pricing'); 


const checkbox = document.querySelector('.checkbox');
const swiTch = document.querySelector('.switch');

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -333px)`
  track.style.width = `${value}%`

slidernum(value);

}

// working with slider

function slider(){
    range.oninput = (e) =>
    updateSlider(e.target.value)
  updateSlider(0);
}
slider();

// working with price 

  function slidernum(value){
if( (value >= 0) & (value <= 20) ){

rangevalue.textContent = ` 10k `
desktopRangeValue.textContent = ` 10k `

pricing.textContent = `${price = 8}.`
// Desktop pricing
desktopPricing .textContent = `${price = 8}.`
// ---------------------------------//
if (checkbox.checked) {
  const totalValue =  (price*25)/100; 
pricing.textContent = `${totalValue}.`
// Desktop pricing discount
desktopPricing.textContent = `${totalValue}.`
}
}


else if ( value > 20 && value <= 40){
  rangevalue.textContent = ` 50k `
  desktopRangeValue.textContent = ` 50k `
  pricing.textContent = `${price = 12 }.`
  // Desktop pricing
desktopPricing .textContent = `${price = 12}.`
// ---------------------------------//
  if (checkbox.checked) {
    const totalValue =  (price*25)/100; 
  pricing.textContent = `${totalValue}.`
  // Desktop pricing discount
desktopPricing.textContent = `${totalValue}.`
  
  }
}


else if ( value > 40 && value <= 60){
  rangevalue.textContent = ` 100k `
  desktopRangeValue.textContent = ` 100k `
  pricing.textContent = `${price = 16 }.`
    // Desktop pricing
desktopPricing .textContent = `${price = 16}.`
// ---------------------------------//
  if (checkbox.checked) {
    const totalValue =  (price*25)/100; 
  pricing.textContent = `${totalValue}.`
  desktopPricing.textContent = `${totalValue}.`
  }
}

else if ( value > 60 && value <= 80 ){
  rangevalue.textContent = ` 500k `
  desktopRangeValue.textContent = ` 500k `
  pricing.textContent = `${price = 24  }.`
     // Desktop pricing
desktopPricing .textContent = `${price = 24}.`
// ---------------------------------//
  if (checkbox.checked) {
    const totalValue =  (price*25)/100; 
  pricing.textContent = `${totalValue}.`
  desktopPricing.textContent = `${totalValue}.`
  
  }
}

else if (  value <= 100){
  rangevalue.textContent = ` 1M `
  desktopRangeValue.textContent = ` 1M `
  pricing.textContent = `${price = 36 }.`
  // Desktop pricing
desktopPricing .textContent = `${price = 36}.`
// ---------------------------------//
  if (checkbox.checked) {
    const totalValue =  (price*25)/100; 
  pricing.textContent = `${totalValue}.`
  desktopPricing.textContent = `${totalValue}.`
  }
}

discount (price)

  }



  // working with disccount
  function discount( price){
    checkbox.addEventListener('change', function () {
      if (checkbox.checked || swiTch.checked){   
        const totalValue =  (price*25)/100; 
        pricing.textContent = `${totalValue}.`
        desktopPricing.textContent = `${totalValue}.`
        swiTch.style.backgroundColor = 'hsl(174, 86%, 45%)'
      } 
      else {
        pricing.textContent = `${price}.`
        desktopPricing.textContent = `${price}.`
        swiTch.style.backgroundColor = 'hsl(223, 50%, 87%)'
      }
    });

  }

  

 
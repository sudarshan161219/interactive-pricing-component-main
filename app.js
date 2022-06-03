const range = document.querySelector('.range');
const thumb = document.querySelector('.thumb');
const track = document.querySelector('.track-inner');
const rangevalue = document.querySelector('.rangeValue');
const pricing = document.querySelector('.pricing');
const pricingSpan = document.querySelector('.pricing-span');
const checkbox = document.querySelector('.checkbox');


const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -333px)`
  track.style.width = `${value}%`

slidernum(value);


}

function slider(){

    range.oninput = (e) =>
    updateSlider(e.target.value)
  
  updateSlider(0);

}
slider();


  function slidernum(value){
    
    let price = 8;

if((value >= 0) & (value <= 20)){
  rangevalue.textContent = ` 10k `
pricing.textContent = `${price = 8 }.`


}else if ( value > 20 && value <= 40){
  rangevalue.textContent = ` 50k `
  pricing.textContent = `${price = 12 }.`
  


}else if ( value > 40 && value <= 60){
  rangevalue.textContent = ` 100k `
  pricing.textContent = `${price = 16 }.`
  


}else if ( value > 60 && value <= 80){
  rangevalue.textContent = ` 500k `
  pricing.textContent = `${price = 24 }.`
  


}else if (  value <= 100){
  rangevalue.textContent = ` 1M `
  pricing.textContent = `${price = 36 }.`
 
}


discount (price)




  }


  function discount (price){
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        const totalValue =  price * 25 / 100;
        pricing.textContent = `${totalValue}.`
       
      } 
      
      else {
        pricing.textContent = `${price}.`
      }
    
    });
 
  }


  
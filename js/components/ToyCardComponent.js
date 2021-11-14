class ToyCardComponent{
    static USD_EUR = 1.15;

    constructor(props) {
        this.props = props;
        this.init();
    }

    fortmatBadge = (content) => 
    `<span class="position-absolute ms-5 top-0 translate-middle badge bg-warning">${content}</span>`;


  formatPrice = () => {
    const {
      price: { currency, amount },
      discount: { type, amount: value }
    } = this.props;

    let price;
    let discountLabel = '';
    
    
    switch (type) {
      case 'amount':
        price = (amount - value)
        discountLabel = this.fortmatBadge(`-${value} € `);
        break;
      case 'percentage':
        price = Math.round(100 * amount * (1 - value / 100)) / 100;
        discountLabel = this.fortmatBadge(`-${value} %`);
        break;
      case 'toFixed':
        price = value;
        break;
      
    }

    const priceToEur = currency === '$' ? amount / ToyCardComponent.USD_EUR : amount 
    const formatEurPrice = Math.round(100 * priceToEur) / 100 + ' €';

    const discountToEur = currency === '$' ? price / ToyCardComponent.USD_EUR : price;
    const formatEurDiscount = Math.round(100 * discountToEur) / 100 + ' €';


    return `
    <span class="d-inline">
      <span class="text-decoration-line-through text-danger">${formatEurPrice}</span>
      <strong class="text-success position-relative">${formatEurDiscount} ${discountLabel}</strong>
    </span>`;
  }

    ageRestriction = () => {
        const { ageRestrictions } = this.props;
        return ageRestrictions
        ? `<div>Amžius: ${ageRestrictions.from}+</div>`
        : `<div class="text-white">Tuščias tekstas</div>`;
    }

    init = () => {
        
        const {title, imgSrc, onDelete } = this.props;

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card shadow';
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}" class="card-img-top"/ height="300px" width: 400px; style="object-fit:cover;>
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <div>
            <span>Kaina:</span>
            ${this.formatPrice()}
        </div>
        ${this.ageRestriction()}
        <button class="btn btn-danger position-absolute top-0">Trintukas</button>
        </div>`

        const btn = this.htmlElement.querySelector('.btn');
        btn.addEventListener('click', onDelete);
    }
}
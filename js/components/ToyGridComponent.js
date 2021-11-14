class ToyGridComponent {
    constructor() {
        this.state = {
            loading: false,
            toys: []
        }
        this.init();
    }

    fetchToys = () => API.fetchToys(this.saveToys, alert);

    saveToys = (toys) => {
        this.state.toys = toys;
        this.state.loading = false;
        
        this.render();
    }


    init = () => {
        this.state.loading = true;
        this.fetchToys();
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-3';

        this.render();
    }

    wrapInColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;
    }

    render = () => {
        const {loading, toys} = this.state;
        if(loading) {
            this.htmlElement.innerHTML = '<div class="text-center"><img src="../assets/loading.gif"/></div>';
        } else if(toys.length > 0) {
            this.htmlElement.innerHTML = '';
            const toyElements = toys
            .map(x => new ToyCardComponent(x))
            .map(x => x.htmlElement)
            .map(this.wrapInColumn)
            this.htmlElement.append(...toyElements);
        } else {
            this.htmlElement.innerHTML = '<h2>Šiuo metu žaislų nėra</h2>';
        }
    }
}
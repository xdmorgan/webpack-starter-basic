class App {
    constructor() {
        this.hello = () => 'Hello.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    console.log(app.hello());
});

"use strict";
class BasePage {
    page;
    constructor(page) {
        this.page = page;
    }
    getTitle() {
        return 'BasePage';
    }
}
class DashboardPage extends BasePage {
    getWelcomeText() {
        return 'Welcome to Dashboard';
    }
}
const dashboard = new DashboardPage('Dashboard');
console.log(dashboard.getTitle());
console.log(dashboard.getWelcomeText());

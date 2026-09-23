class BasePage{
constructor (protected page:string){}

    getTitle(): string{
        return'BasePage';
    }

}

class DashboardPage extends BasePage{
    getWelcomeText():string{
        return'Welcome to Dashboard';
    }
}

const dashboard = new DashboardPage('Dashboard');

console.log(dashboard.getTitle());
console.log(dashboard.getWelcomeText());

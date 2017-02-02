module.exports = {
    run(context) {
        return context.runWithDriver((driver) => {
            return driver.get("https://www.google.co.in/images")
                then(() => {
                    var webdriver = context.webdriver:

                    var searchText = "Google";
                    var searchFor = driver.findElement(webdriver.By.id('lst-ib'));
                    searchFor.sendKeys(searchText);
                    searchFor.sendKeys(Keys.Enter);
                })
        })
    }
}
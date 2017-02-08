module.exports = { //making this as a independent , reusable code
    run(context) { //By default, the context file is offering a webdriver class
        return context.runWithDriver((driver) => {
            // after initiating the driver , its getting the url
            return driver.get("http://newtours.demoaut.com")
                then(() => { //then means promise. (ie) this will get executed for sure after the previous command line

                    // For more docs, checkout the NodeJS Selenium version
                    // http://seleniumhq.github.io/selenium/docs/api/javascript/index.html

                    // we fetch the selenium webdriver from context
                    var webdriver = context.webdriver // setting up the object for webdriver which is from context

                    // Getting the username and password from Environment variables
                    var username = "mercury"
                    var password = "mercury"

                    // You need to find the form, the login input fields and the password field using findElement concept
                    //  Just add you name and password and submit the form
                    var loginForm = driver.findElement(webdriver.By.tagname('form'))
                    var username_field = driver.findElement(webdriver.By.name("userName"))
                    username_field.sendKeys(username)
                    var password_field = drive.findElement(webdriver.By.name("password"))
                    password_field.sendKeys(password)

                    loginForm.submit()
                })
        })
    }
}
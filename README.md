# SITESPEED
Sitespeed.io is an open source tool that helps you analyze and optimize your website speed and performance, based on performance best practices advices from the coach and collecting browser metrics using the Navigation Timing API, User Timings and Visual Metrics (FirstVisualChange, SpeedIndex & LastVisualChange)

## Prerequisite
* Should have installed Node.js
* Should have installed "npm(node package manager)" module
* add npm to the environmental variables

## Install Sitespeed module
To install the sitespeed module
```sh
npm install sitespeed.io -g
```

## Sitespeed commands

* To know the sitespeed commands
    ```sh
    sitespeed.io --help
    ```

* To run the url in mobile resolution
    ```sh
    sitespeed.io --mobile url
    ```

* To select the browser
   ```sh
  sitespeed.io -b chrome https://www.enteryoururl.com
   ```

* To ensure the number of iterations
    ```sh
    sitespeed.io -b chrome -n (number of iterations) https://www.enteryoururl.com
    ```



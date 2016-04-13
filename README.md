# Project Description

An app that wil let users search for specific GitHub accounts and display all of the information.

# What You Will Learn

* How to setup multiple components and nest them
* How to install and use Webpack
* How to run the Webpack Dev Server
* How to work with forms and submission
* Working with events

# Installing and Running

Install the `bower` and `npm` modules:

    $ npm install
    $ bower install

Run on a local server with `webpack-dev-server`:

    $ webpack-dev-server --port 8080     # feel free to modify

*The above command is the recommended way to run the application locally, since the repo does not contain the actual `public/js/main.js` file.*

That being said, you can run it using npm's `http-server`, but make sure that:

* you have actually transpiled the `public/js/main.js` file and have it written into the directory (instead of the files temporarily stored on the `webpack-dev-server`):

    ```
    $ webpack
    ```

* and the server is run from the root directory, not the `public` directory (by default):

    ```
    $ npm install http-server        # if it isn't installed yet
                                     # (add -g parameter for global installation)

    $ http-server . -p 8080          # feel free to modify options as appropriate
    ```

In either cases, your application will now then be available at <http://localhost:8080/public>.

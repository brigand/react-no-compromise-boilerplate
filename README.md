
This is a boilerplate for making very custom applications. It follows the atomic component structure, includes development pages for viewing individual components, hot reloading and more!

The development server has a proper CLI and runs on a different port from the main server, allowing it to behave like a CDN.

It used react@0.14 and react-router@1.

## Getting started

Clone this repo and then remove the .git directory so you can start with fresh history.

    # todo: git archive instructions?
    npm install

To run the normal development server on localhost:8080 with the assets on localhost:8081:

    ./scripts/dev

To run the development pages:

    ./scripts/dev --dev-pages

There are some more options:

    $ ./scripts/dev -h
    Options:
      -h, --help          Show help                                        [boolean]
      --asset-url         where assets are to be served from
      --main-url          the main web server root
      --prod              do a development build (default)                 [boolean]
      --only-dev-server   only serve assets                                [boolean]
      --only-main-server  don't run dev-server                             [boolean]
      --dev-pages         instead of running the main app, run the individual
                          component pages

## Development Pages

The development pages allow you to view individual components. Hot reloading is supported here, so you can very quickly make changes. 

It allows you to see many variations of the component at once, and serves as documentation.

> TODO: (picture of development pages)

## Atomic

Atoms are your low level components. Included is set of atoms that allow you to build most things. Unlike third party component libraries, these are your own to modify or remove. Atoms such as `<Box>` and `<Header>` allow you to avoid using dom components directly in higher level views, and encourage consistency across large applications.

Run the development page server

## Flux

There is **no** flux library included. I don't believe this is a decision that can be made for you, even whether to use flux or something else.

Reflux, Redux, and Alt are all good options. 

> TODO: Some basic api tools are included (src/utils).

## Already have an api server?

> TODO: Pass `--proxy http://myurl/api` and the development server will proxy requests to `/api` to your server. Or run with `--only-dev-server` and you just have to make sure your main server links to bundle.js correctly (default: `localhost:8081/public/bundle.js`).



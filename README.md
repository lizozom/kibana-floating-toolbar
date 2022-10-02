# Floating Kibana Toolbar

Free up Kibana screen real estate with a floating top navigation toolbar.

## Development

### Prerequisites

#### Node

Running Kibana in development mode requires having `node` installed.

The most convenient way is to install `nvm`, then once you checkout the kibana repository, run `nvm use` to know which version of node to use.

Install the right version by running:

```
nvm install VERSION
```

#### yarn

Install `yarn` by running: 

```
npm install --global yarn
```

### Environment setup

Checkout the appropriate version of kibana

```
git clone https://github.com/elastic/kibana.git
cd kibana
git checkout KIBANA_VERSION
```

Setup the kibana for local development (This might take a while the first time)

```
yarn kbn bootstrap 
```

Clone the plugin into the plugins directory.
You may also fork the project to customize it and check out your own version of the plugin.

```
cd plugins
git clone https://github.com/lizozom/kibana-floating-toolbar.git
```

Go back to the kibana folder and start Elasticsearch in dev mode

```
yarn es snapshot
```

In parallel, start Kibana in dev mode (This might take a while the first time)

```
yarn start --no-base-path
```

Kibana should start with the plugin on.
It will watch any changes in the plugin and rebuild it as needed.

## Installing the plugin

Navigate into the plugin directory (within the kibana repository) and build it:

```
cd plugins/custom-kibana-theme
yarn build
```

This builds the plugin into a `zip` file under the `build` folder.

Place the build file on a web hosting or copy it to the deployment where you intend to install it, then install the plugin by running:

```
bin/kibana-plugin install PATH_TO_ZIP
```

More documentation on how to install a plugin from a `zip` file can be found [here](https://www.elastic.co/guide/en/kibana/master/kibana-plugins.html).
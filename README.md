# Bankwiz Openapi

## Introduction
Welcome to the Bankwiz Openapi repository, a tool designed to manage the OpenAPI specification between the frontend and the server for Bankwiz. This project utilizes Docker and the OpenAPI Generator to create clients and servers in various languages and formats, thus facilitating development and integration.

You can view the OpenAPI specification on the GitHub Pages site: [Bankwiz OpenAPI Specification](https://jbwittner.github.io/bankwiz_openapi/).

**Everything is done via GitHub Action, just modify the openapi spec and push for the action to generate the code, commit and push.**

## Prerequisites
* `Docker`: Required for running the OpenAPI Generator in a containerized environment.
* `npm`: Necessary for managing packages and running JavaScript clients.
* `Maven`: Used for building and managing the Java server.
* `settings.xml` file with Maven server configuration: This XML file should include a server entry for Maven, specifically configured for GitHub.

```xml
<server>
    <id>github</id>
    <username>${env.USER_GITHUB_LOGIN}</username>
    <password>${env.USER_GITHUB_KEY}</password>
</server>
```

It uses two environment variables:
* `${env.USER_GITHUB_LOGIN}`: This is where you should provide your GitHub username. Rather than hardcoding your username in the file, you set an environment variable named USER_GITHUB_LOGIN in your system, which Maven will use.
* `${env.USER_GITHUB_KEY}`: This should be your GitHub personal access token or similar authentication key. Like the GitHub username, this is also set up as an environment variable named USER_GITHUB_KEY on your system, enhancing security by keeping sensitive information out of your project files.
This configuration is crucial for Maven to authenticate with GitHub, especially for operations like publishing packages to the GitHub Maven repository.

## Usage
Use the following commands to clean, generate, build, and publish the clients and servers based on the OpenAPI specification.

## Cleaning
* Java: `make clean-java` - Removes the generated Java server directory.
* Docs: `make clean-docs` - Removes the generated documentation.
* Axios: `make clean-axios` - Removes the generated Axios client.
* Fetch: `make clean-fetch` - Removes the generated Fetch client.
## Generation
* Axios: `make generate-axios` - Generates an Axios client from the OpenAPI specification.
* Fetch: `make generate-fetch` - Generates a Fetch client from the OpenAPI specification.
* Java: `make generate-java` - Generates a Java (Spring) server from the OpenAPI specification.
* Docs: `make generate-docs` - Generates HTML documentation.
## Building
* Axios: `make build-axios` - Builds the Axios client.
* Fetch: `make build-fetch` - Builds the Fetch client.
* Java: `make build-java` - Builds the Java server.
## Publishing
* Fetch: `make publish-fetch` - Publishes the Fetch client to npm.
* Axios: `make publish-axios` - Publishes the Axios client to npm.
* Java: `make publish-java` - Publishes the Java server to Maven.
## Additional Commands
* `make clean` - Executes all cleaning scripts.
* `make generate` - Executes all generation scripts.
* `make build` - Executes all building scripts.
* `make publish` - Executes all publishing scripts.
* `make all` - Cleans, generates, and builds everything.
* `make pr_create` - Creates a Pull Request on GitHub.
* `make pr_merge` - Merges a Pull Request on GitHub.

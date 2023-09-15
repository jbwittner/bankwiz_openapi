# Variables defining the paths and information needed for the code generation
DOCKER_IMAGE := "openapitools/openapi-generator-cli"
GENERATED_DIR_AXIOS := "generation/axios_client"
GENERATED_DIR_FETCH := "generation/fetch_client"
GENERATED_DIR_JAVA := "generation/java_server"
GENERATED_DIR_DOCS := "docs"
OPENAPI_SPEC := "openapi.yaml"
GITHUB_MAVEN_REPO := "https://maven.pkg.github.com/jbwittner/bankwiz_openapi"

# Removes the generated Java directory
clean-java:
	rm -rf {{GENERATED_DIR_JAVA}}

# Removes the generated documentation directory
clean-docs:
	rm -rf {{GENERATED_DIR_DOCS}}

# Removes the generated Axios directory
clean-axios:
	rm -rf {{GENERATED_DIR_AXIOS}}

# Removes the generated Axios directory
clean-fetch:
	rm -rf {{GENERATED_DIR_FETCH}}


# Generates TypeScript Axios Client
generate-axios: clean-axios
	docker run --rm \
	  -v $(pwd):/local \
	  --user $(id -u):$(id -g) \
	  {{DOCKER_IMAGE}} generate \
	  -i /local/{{OPENAPI_SPEC}} \
	  -g typescript-axios \
	  -o /local/{{GENERATED_DIR_AXIOS}} \
	  --additional-properties=npmName=@jbwittner/bankwiz_openapi-client-axios \
	  --additional-properties=npmRepository=https://github.com/jbwittner/bankwiz_openapi \
	  --additional-properties=withSeparateModelsAndApi=true \
	  --additional-properties=apiPackage=api \
	  --additional-properties=modelPackage=model \
	  --additional-properties=supportsES6=true \
	  --additional-properties=withInterfaces=true

# Generates TypeScript Fetch Client
generate-fetch: clean-fetch
	docker run --rm \
	  -v $(pwd):/local \
	  --user $(id -u):$(id -g) \
	  {{DOCKER_IMAGE}} generate \
	  -i /local/{{OPENAPI_SPEC}} \
	  -g typescript-fetch \
	  -o /local/{{GENERATED_DIR_FETCH}} \
	  --additional-properties=npmName=@jbwittner/bankwiz_openapi-client-fetch \
	  --additional-properties=npmRepository=https://github.com/jbwittner/bankwiz_openapi \
	  --additional-properties=withSeparateModelsAndApi=true \
	  --additional-properties=apiPackage=api \
	  --additional-properties=modelPackage=model \
	  --additional-properties=supportsES6=true \
	  --additional-properties=withInterfaces=true

# Generates Java Spring Server
generate-java: clean-java
	docker run --rm \
	  -v $(pwd):/local \
	  --user $(id -u):$(id -g) \
	  {{DOCKER_IMAGE}} generate \
	  -i /local/{{OPENAPI_SPEC}} \
	  -g spring \
	  -o /local/{{GENERATED_DIR_JAVA}} \
	  --api-package=fr.bankwiz.openapi.api \
	  --additional-properties=useSpringBoot3=true \
	  --additional-properties=groupId=fr.bankwiz \
	  --additional-properties=artifactId=openapi \
	  --model-package=fr.bankwiz.openapi.model \
	  --additional-properties=interfaceOnly=true \
	  --additional-properties=dateLibrary=java8 \
	  --additional-properties=hideGenerationTimestamp=true

# Generates HTML documentation
generate-docs: clean-docs
	docker run --rm \
	  -v $(pwd):/local \
	  --user $(id -u):$(id -g) \
	  {{DOCKER_IMAGE}} generate \
	  -i /local/{{OPENAPI_SPEC}} \
	  -g html2 \
	  -o /local/{{GENERATED_DIR_DOCS}}

# Runs npm install in the Axios generated directory
build-axios:
	npm install --prefix {{GENERATED_DIR_AXIOS}}

# Runs npm install in the Fetch generated directory
build-fetch:
	npm install --prefix {{GENERATED_DIR_FETCH}}

# Runs mvn clean package in the Java generated directory
build-java:
	mvn clean package -f {{GENERATED_DIR_JAVA}}/pom.xml

# Builds and publishes the Axios package
publish-axios: build-axios
	cd "$(pwd)/{{GENERATED_DIR_AXIOS}}" && npm publish

# Builds and publishes the Fetch package
publish-fetch: build-fetch
	cd "$(pwd)/{{GENERATED_DIR_FETCH}}" && npm publish

# Builds and publishes the Java package
publish-java: build-java
	cd "$(pwd)/{{GENERATED_DIR_JAVA}}" && mvn deploy -DaltDeploymentRepository=github::default::{{GITHUB_MAVEN_REPO}}

# Executes all clean recipes
clean: clean-java clean-docs clean-axios

# Executes all generate recipes
generate: generate-axios generate-java generate-docs

# Executes all build recipes
build: build-axios build-java

# Executes all publish recipes
publish: publish-axios publish-java

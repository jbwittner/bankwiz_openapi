DOCKER_IMAGE = "openapitools/openapi-generator-cli:v7.0.1"
GENERATED_DIR_AXIOS = "generation/axios_client"
GENERATED_DIR_FETCH = "generation/fetch_client"
GENERATED_DIR_JAVA = "generation/java_server"
GENERATED_DIR_DOCS = "docs"
OPENAPI_SPEC = "openapi.yaml"
GITHUB_MAVEN_REPO = "https://maven.pkg.github.com/jbwittner/bankwiz_openapi"

# Removes the generated Java directory
clean-java:
	rm -rf $(GENERATED_DIR_JAVA)

# Removes the generated documentation directory
clean-docs:
	rm -rf $(GENERATED_DIR_DOCS)

# Removes the generated Axios directory
clean-axios:
	rm -rf $(GENERATED_DIR_AXIOS)

# Removes the generated Axios directory
clean-fetch:
	rm -rf $(GENERATED_DIR_FETCH)

clean-all: clean-java clean-docs clean-axios clean-fetch

# Generates TypeScript Axios Client
generate-axios: clean-axios
	docker run --rm \
	  -v $(pwd):/local \
	  --user $(id -u):$(id -g) \
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC) \
	  -g typescript-axios \
	  -o /local/$(GENERATED_DIR_AXIOS) \
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
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC \
	  -g typescript-fetch \
	  -o /local/$(GENERATED_DIR_FETCH) \
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
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC) \
	  -g spring \
	  -o /local/$(GENERATED_DIR_JAVA) \
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
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC) \
	  -g html2 \
	  -o /local/$(GENERATED_DIR_DOCS)

generate-all: generate-axios generate-fetch generate-java generate-docs
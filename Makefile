# Variables
DOCKER_IMAGE = openapitools/openapi-generator-cli
GENERATED_DIR_AXIOS = generation/axios_client
GENERATED_DIR_JAVA = generation/java_server
GENERATED_DIR_DOCS = docs
OPENAPI_SPEC = openapi.yaml
GITHUB_MAVEN_REPO = https://maven.pkg.github.com/jbwittner/bankwiz_openapi

.PHONY: clean-java
clean-java:
	rm -rf $(GENERATED_DIR_JAVA)

.PHONY: clean-docs
clean-docs:
	rm -rf $(GENERATED_DIR_DOCS)

.PHONY: clean-axios
clean-axios:
	rm -rf $(GENERATED_DIR_AXIOS)

.PHONY: generate-axios
generate-axios: clean-axios
	# Generate TypeScript Axios Client
	docker run --rm \
	  -v $$PWD:/local \
	  --user $$(id -u):$$(id -g) \
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC) \
	  -g typescript-axios \
	  -o /local/$(GENERATED_DIR_AXIOS) \
	  --additional-properties=npmName=@jbwittner/bankwiz_openapi-client \
	  --additional-properties=npmRepository=https://github.com/jbwittner/bankwiz_openapi \
	  --additional-properties=withSeparateModelsAndApi=true \
	  --additional-properties=apiPackage=api \
	  --additional-properties=modelPackage=model \
	  --additional-properties=supportsES6=true \
	  --additional-properties=withInterfaces=true

.PHONY: generate-java
generate-java: clean-java
	# Generate Java Spring Server
	docker run --rm \
	  -v $$PWD:/local \
	  --user $$(id -u):$$(id -g) \
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

.PHONY: generate-docs
generate-docs: clean-docs
	# Generate HTML documentation
	docker run --rm \
	  -v $$PWD:/local \
	  --user $$(id -u):$$(id -g) \
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC) \
	  -g html2 \
	  -o /local/$(GENERATED_DIR_DOCS)

.PHONY: build-axios
build-axios:
	npm install --prefix $(GENERATED_DIR_AXIOS)

.PHONY: build-java
build-java:
	mvn clean package -f $(GENERATED_DIR_JAVA)/pom.xml

.PHONY: publish-axios
publish-axios:
	make build-axios && cd "$(PWD)/$(GENERATED_DIR_AXIOS)" && npm publish

.PHONY: publish-java
publish-java:
	make build-java && cd "$(PWD)/$(GENERATED_DIR_JAVA)" && mvn deploy -DaltDeploymentRepository=github::default::$(GITHUB_MAVEN_REPO)

.PHONY: clean
clean: clean-java clean-docs clean-axios

.PHONY: generate
generate: generate-axios generate-java generate-docs

.PHONY: build
build: build-axios build-java

.PHONY: publish
publish: publish-axios publish-java
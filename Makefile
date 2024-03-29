DOCKER_IMAGE = "openapitools/openapi-generator-cli:v7.0.1"
GENERATED_DIR_FETCH = "generation/fetch_client"
GENERATED_DIR_JAVA = "generation/java_server"
GENERATED_DIR_DOCS = "docs"
OPENAPI_SPEC = "openapi.yaml"
GITHUB_MAVEN_REPO = "https://maven.pkg.github.com/jbwittner/bankwiz_openapi"

.PHONY: clean-java
clean-java:
	rm -rf $(GENERATED_DIR_JAVA)

.PHONY: clean-docs
clean-docs:
	rm -rf $(GENERATED_DIR_DOCS)

.PHONY: clean-fetch
clean-fetch:
	rm -rf $(GENERATED_DIR_FETCH)

.PHONY: generate-fetch
generate-fetch:
	docker run --rm \
	  -v $$PWD:/local \
	  --user $$(id -u):$$(id -g) \
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC) \
	  -g typescript-fetch \
	  -o /local/$(GENERATED_DIR_FETCH) \
	  --additional-properties=npmName=@jbwittner/bankwiz_openapi-client-fetch \
	  --additional-properties=npmRepository=https://github.com/jbwittner/bankwiz_openapi \
	  --additional-properties=withSeparateModelsAndApi=true \
	  --additional-properties=apiPackage=api \
	  --additional-properties=modelPackage=model \
	  --additional-properties=supportsES6=true \
	  --additional-properties=withInterfaces=true

.PHONY: generate-java
generate-java:
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
generate-docs:
	docker run --rm \
	  -v $$PWD:/local \
	  --user $$(id -u):$$(id -g) \
	  $(DOCKER_IMAGE) generate \
	  -i /local/$(OPENAPI_SPEC) \
	  -g html2 \
	  -o /local/$(GENERATED_DIR_DOCS)

.PHONY: build-fetch
build-fetch:
	npm install --prefix $(GENERATED_DIR_FETCH) && npm run build --prefix $(GENERATED_DIR_FETCH)

.PHONY: build-java
build-java:
	mvn clean package -f $(GENERATED_DIR_JAVA)/pom.xml

.PHONY: publish-fetch
publish-fetch:
	cd "$$PWD/$(GENERATED_DIR_FETCH)" && npm publish

.PHONY: publish-java
publish-java:
	cd "$$PWD/$(GENERATED_DIR_JAVA)" && mvn deploy -DaltDeploymentRepository=github::$(GITHUB_MAVEN_REPO)

.PHONY: clean
clean: clean-java clean-docs clean-fetch

.PHONY: generate
generate: generate-java generate-docs generate-fetch

.PHONY: build
build: build-fetch build-java

.PHONY: publish
publish: publish-fetch publish-java

.PHONY: all
all: clean generate build
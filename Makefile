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
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.0.0-SNAPSHOT).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package fr.bankwiz.openapi.api;

import fr.bankwiz.openapi.model.UserDTO;
import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import jakarta.annotation.Generated;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
@Validated
@Tag(name = "User", description = "API endpoints for managing user information")
public interface UserApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * GET /user/checkregistration : Checks if the user is registered, and registers her if not.
     *
     * @return Successfully retrieved user information (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "checkRegistration",
        summary = "Checks if the user is registered, and registers her if not.",
        tags = { "User" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved user information", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = UserDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/user/checkregistration",
        produces = { "application/json" }
    )
    default ResponseEntity<UserDTO> checkRegistration(
        
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /user : Get the current user information
     *
     * @return Successfully retrieved user information (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getCurrentUserInfo",
        summary = "Get the current user information",
        tags = { "User" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved user information", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = UserDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/user",
        produces = { "application/json" }
    )
    default ResponseEntity<UserDTO> getCurrentUserInfo(
        
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /user/{userId} : Get user information
     *
     * @param userId  (required)
     * @return Successfully retrieved user information (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getUser",
        summary = "Get user information",
        tags = { "User" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved user information", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = UserDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/user/{userId}",
        produces = { "application/json" }
    )
    default ResponseEntity<UserDTO> getUser(
        @Min(1) @Parameter(name = "userId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("userId") Integer userId
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /user/users : Get a list of users
     *
     * @return Successfully retrieved the list of users (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getUsers",
        summary = "Get a list of users",
        tags = { "User" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the list of users", content = {
                @Content(mediaType = "application/json", array = @ArraySchema(schema = @Schema(implementation = UserDTO.class)))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/user/users",
        produces = { "application/json" }
    )
    default ResponseEntity<List<UserDTO>> getUsers(
        
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "[ { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" }, { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } ]";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.2.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package fr.bankwiz.openapi.api;

import fr.bankwiz.openapi.model.AddUserGroupRequest;
import fr.bankwiz.openapi.model.GroupCreationRequest;
import fr.bankwiz.openapi.model.GroupDetailsDTO;
import fr.bankwiz.openapi.model.GroupIndexDTO;
import java.util.UUID;
import fr.bankwiz.openapi.model.UserGroupRightDTO;
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
@Tag(name = "GroupService", description = "API endpoints for managing group information")
public interface GroupApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * POST /group/{groupId}/user : Add user to group
     *
     * @param groupId Group ID (required)
     * @param addUserGroupRequest  (required)
     * @return User added (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "addUserGroup",
        summary = "Add user to group",
        tags = { "GroupService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "User added", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = UserGroupRightDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.POST,
        value = "/group/{groupId}/user",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    
    default ResponseEntity<UserGroupRightDTO> addUserGroup(
        @Parameter(name = "groupId", description = "Group ID", required = true, in = ParameterIn.PATH) @PathVariable("groupId") UUID groupId,
        @Parameter(name = "AddUserGroupRequest", description = "", required = true) @Valid @RequestBody AddUserGroupRequest addUserGroupRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"user\" : { \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"email\" : \"johndoe@example.com\" } }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * POST /group : Create a group
     *
     * @param groupCreationRequest  (required)
     * @return Group created successfully (status code 201)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "createGroup",
        summary = "Create a group",
        tags = { "GroupService" },
        responses = {
            @ApiResponse(responseCode = "201", description = "Group created successfully", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupIndexDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.POST,
        value = "/group",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    
    default ResponseEntity<GroupIndexDTO> createGroup(
        @Parameter(name = "GroupCreationRequest", description = "", required = true) @Valid @RequestBody GroupCreationRequest groupCreationRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"groupId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * DELETE /group/{id} : Delete a group
     *
     * @param id Group ID (required)
     * @return Group deleted (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "deleteGroup",
        summary = "Delete a group",
        tags = { "GroupService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Group deleted"),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.DELETE,
        value = "/group/{id}"
    )
    
    default ResponseEntity<Void> deleteGroup(
        @Parameter(name = "id", description = "Group ID", required = true, in = ParameterIn.PATH) @PathVariable("id") UUID id
    ) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * DELETE /group/{groupId}/user/{userId} : Delete user from a group
     *
     * @param groupId Group ID (required)
     * @param userId User ID (required)
     * @return User deleted (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "deleteUserFromGroup",
        summary = "Delete user from a group",
        tags = { "GroupService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "User deleted"),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.DELETE,
        value = "/group/{groupId}/user/{userId}"
    )
    
    default ResponseEntity<Void> deleteUserFromGroup(
        @Parameter(name = "groupId", description = "Group ID", required = true, in = ParameterIn.PATH) @PathVariable("groupId") UUID groupId,
        @Parameter(name = "userId", description = "User ID", required = true, in = ParameterIn.PATH) @PathVariable("userId") UUID userId
    ) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /group/{id} : Get a group details
     *
     * @param id Group ID (required)
     * @return Get group (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getGroupDetails",
        summary = "Get a group details",
        tags = { "GroupService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Get group", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupDetailsDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/group/{id}",
        produces = { "application/json" }
    )
    
    default ResponseEntity<GroupDetailsDTO> getGroupDetails(
        @Parameter(name = "id", description = "Group ID", required = true, in = ParameterIn.PATH) @PathVariable("id") UUID id
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"usersRights\" : [ { \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"user\" : { \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"email\" : \"johndoe@example.com\" } }, { \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"user\" : { \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"email\" : \"johndoe@example.com\" } } ], \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /group/groups : Get all groups of user
     *
     * @return Get all groups of user (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getUserGroups",
        summary = "Get all groups of user",
        tags = { "GroupService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Get all groups of user", content = {
                @Content(mediaType = "application/json", array = @ArraySchema(schema = @Schema(implementation = GroupIndexDTO.class)))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/group/groups",
        produces = { "application/json" }
    )
    
    default ResponseEntity<List<GroupIndexDTO>> getUserGroups(
        
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "[ { \"groupName\" : \"groupName\", \"groupId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\" }, { \"groupName\" : \"groupName\", \"groupId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\" } ]";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

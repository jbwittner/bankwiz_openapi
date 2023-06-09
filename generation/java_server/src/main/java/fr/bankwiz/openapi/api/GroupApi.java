/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.0.0-SNAPSHOT).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package fr.bankwiz.openapi.api;

import fr.bankwiz.openapi.model.AddUserGroupRequest;
import fr.bankwiz.openapi.model.GroupCreationRequest;
import fr.bankwiz.openapi.model.GroupDTO;
import fr.bankwiz.openapi.model.GroupUpdateRequest;
import fr.bankwiz.openapi.model.UpdateUserGroupRequest;
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
@Tag(name = "Group", description = "API endpoints for managing group information")
public interface GroupApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * POST /group/{groupId}/user : Add a user to the group
     *
     * @param groupId  (required)
     * @param addUserGroupRequest  (required)
     * @return User added successfully (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "addUserToGroup",
        summary = "Add a user to the group",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "User added successfully", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.POST,
        value = "/group/{groupId}/user",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<GroupDTO> addUserToGroup(
        @Min(1) @Parameter(name = "groupId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("groupId") Integer groupId,
        @Parameter(name = "AddUserGroupRequest", description = "", required = true) @Valid @RequestBody AddUserGroupRequest addUserGroupRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] }";
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
     * @return Group created successfully (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "createGroup",
        summary = "Create a group",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Group created successfully", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.POST,
        value = "/group",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<GroupDTO> createGroup(
        @Parameter(name = "GroupCreationRequest", description = "", required = true) @Valid @RequestBody GroupCreationRequest groupCreationRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * DELETE /group/{groupId} : Delete a group
     *
     * @param groupId  (required)
     * @return Group deleted successfully (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "deleteGroup",
        summary = "Delete a group",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Group deleted successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.DELETE,
        value = "/group/{groupId}"
    )
    default ResponseEntity<Void> deleteGroup(
        @Min(1) @Parameter(name = "groupId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("groupId") Integer groupId
    ) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /group/{groupId} : Get group information
     *
     * @param groupId  (required)
     * @return Successfully retrieved group information (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getGroup",
        summary = "Get group information",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved group information", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/group/{groupId}",
        produces = { "application/json" }
    )
    default ResponseEntity<GroupDTO> getGroup(
        @Min(1) @Parameter(name = "groupId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("groupId") Integer groupId
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /group/groups : Get my groups
     *
     * @return Successfully retrieved the list of groups (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getGroups",
        summary = "Get my groups",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the list of groups", content = {
                @Content(mediaType = "application/json", array = @ArraySchema(schema = @Schema(implementation = GroupDTO.class)))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/group/groups",
        produces = { "application/json" }
    )
    default ResponseEntity<List<GroupDTO>> getGroups(
        
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "[ { \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] }, { \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] } ]";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * DELETE /group/{groupId}/user/{userId} : Remove user from a group
     *
     * @param groupId  (required)
     * @param userId  (required)
     * @return User removed successfully (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "removeUserFromGroup",
        summary = "Remove user from a group",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "User removed successfully", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.DELETE,
        value = "/group/{groupId}/user/{userId}",
        produces = { "application/json" }
    )
    default ResponseEntity<GroupDTO> removeUserFromGroup(
        @Min(1) @Parameter(name = "groupId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("groupId") Integer groupId,
        @Min(1) @Parameter(name = "userId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("userId") Integer userId
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * PUT /group/{groupId} : Update group information
     *
     * @param groupId  (required)
     * @param groupUpdateRequest  (required)
     * @return Group information updated successfully (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "updateGroup",
        summary = "Update group information",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Group information updated successfully", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.PUT,
        value = "/group/{groupId}",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<GroupDTO> updateGroup(
        @Min(1) @Parameter(name = "groupId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("groupId") Integer groupId,
        @Parameter(name = "GroupUpdateRequest", description = "", required = true) @Valid @RequestBody GroupUpdateRequest groupUpdateRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * PUT /group/{groupId}/user/{userId} : Update user in a group
     *
     * @param groupId  (required)
     * @param userId  (required)
     * @param updateUserGroupRequest  (required)
     * @return User updated successfully (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "updateUserInGroup",
        summary = "Update user in a group",
        tags = { "Group" },
        responses = {
            @ApiResponse(responseCode = "200", description = "User updated successfully", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = GroupDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "bearerAuth")
        }
    )
    @RequestMapping(
        method = RequestMethod.PUT,
        value = "/group/{groupId}/user/{userId}",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<GroupDTO> updateUserInGroup(
        @Min(1) @Parameter(name = "groupId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("groupId") Integer groupId,
        @Min(1) @Parameter(name = "userId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("userId") Integer userId,
        @Parameter(name = "UpdateUserGroupRequest", description = "", required = true) @Valid @RequestBody UpdateUserGroupRequest updateUserGroupRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"groupName\" : \"groupName\", \"groupId\" : 0, \"users\" : [ { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } }, { \"user\" : { \"firstName\" : \"John\", \"lastName\" : \"Doe\", \"userId\" : 0, \"email\" : \"johndoe@example.com\" } } ] }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

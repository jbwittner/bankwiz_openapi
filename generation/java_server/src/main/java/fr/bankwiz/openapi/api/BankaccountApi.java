/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.2.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package fr.bankwiz.openapi.api;

import fr.bankwiz.openapi.model.BankAccountCreationRequest;
import fr.bankwiz.openapi.model.BankAccountIndexDTO;
import fr.bankwiz.openapi.model.BankAccountUpdateRequest;
import fr.bankwiz.openapi.model.GroupBankAccountIndexDTO;
import java.util.UUID;
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
@Tag(name = "BankAccountService", description = "API endpoints for managing bank account")
public interface BankaccountApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * POST /bankaccount : Create a bank account
     *
     * @param bankAccountCreationRequest  (required)
     * @return Bank account created (status code 201)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "createBankAccount",
        summary = "Create a bank account",
        tags = { "BankAccountService" },
        responses = {
            @ApiResponse(responseCode = "201", description = "Bank account created", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = BankAccountIndexDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.POST,
        value = "/bankaccount",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    
    default ResponseEntity<BankAccountIndexDTO> createBankAccount(
        @Parameter(name = "BankAccountCreationRequest", description = "", required = true) @Valid @RequestBody BankAccountCreationRequest bankAccountCreationRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"bankAccountName\" : \"bankAccountName\", \"bankAccountId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"decimalBaseAmount\" : 0 }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * DELETE /bankaccount/{id} : Delete a bank account
     *
     * @param id Bank account ID (required)
     * @return Bank account deleted (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "deleteBankAccount",
        summary = "Delete a bank account",
        tags = { "BankAccountService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Bank account deleted"),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.DELETE,
        value = "/bankaccount/{id}"
    )
    
    default ResponseEntity<Void> deleteBankAccount(
        @Parameter(name = "id", description = "Bank account ID", required = true, in = ParameterIn.PATH) @PathVariable("id") UUID id
    ) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /bankaccount/bankaccounts : Get all bank account
     *
     * @return Bank account created successfully (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "getAllBankAccount",
        summary = "Get all bank account",
        tags = { "BankAccountService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Bank account created successfully", content = {
                @Content(mediaType = "application/json", array = @ArraySchema(schema = @Schema(implementation = GroupBankAccountIndexDTO.class)))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/bankaccount/bankaccounts",
        produces = { "application/json" }
    )
    
    default ResponseEntity<List<GroupBankAccountIndexDTO>> getAllBankAccount(
        
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "[ { \"groupeIndex\" : { \"groupName\" : \"groupName\", \"groupId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\" }, \"bankAccountIndexList\" : [ { \"bankAccountName\" : \"bankAccountName\", \"bankAccountId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"decimalBaseAmount\" : 0 }, { \"bankAccountName\" : \"bankAccountName\", \"bankAccountId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"decimalBaseAmount\" : 0 } ] }, { \"groupeIndex\" : { \"groupName\" : \"groupName\", \"groupId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\" }, \"bankAccountIndexList\" : [ { \"bankAccountName\" : \"bankAccountName\", \"bankAccountId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"decimalBaseAmount\" : 0 }, { \"bankAccountName\" : \"bankAccountName\", \"bankAccountId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"decimalBaseAmount\" : 0 } ] } ]";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * PUT /bankaccount/{id} : Update a bank account
     *
     * @param id Bank account ID (required)
     * @param bankAccountUpdateRequest  (required)
     * @return Bank account updated (status code 200)
     *         or Invalid request. Please check the provided data. (status code 400)
     */
    @Operation(
        operationId = "updateBankAccount",
        summary = "Update a bank account",
        tags = { "BankAccountService" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Bank account updated", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = BankAccountIndexDTO.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request. Please check the provided data.")
        },
        security = {
            @SecurityRequirement(name = "oauth2", scopes={ "openid", "profile", "email" })
        }
    )
    @RequestMapping(
        method = RequestMethod.PUT,
        value = "/bankaccount/{id}",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    
    default ResponseEntity<BankAccountIndexDTO> updateBankAccount(
        @Parameter(name = "id", description = "Bank account ID", required = true, in = ParameterIn.PATH) @PathVariable("id") UUID id,
        @Parameter(name = "BankAccountUpdateRequest", description = "", required = true) @Valid @RequestBody BankAccountUpdateRequest bankAccountUpdateRequest
    ) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"bankAccountName\" : \"bankAccountName\", \"bankAccountId\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\", \"decimalBaseAmount\" : 0 }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}

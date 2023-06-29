package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import fr.bankwiz.openapi.model.BankAccountIndexDTO;
import fr.bankwiz.openapi.model.BankOperationIndexDTO;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * BankOperationDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankOperationDTO {

  private BankAccountIndexDTO accountIndexDTO;

  private BankOperationIndexDTO accountLineIndexDTO;

  public BankOperationDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankOperationDTO(BankAccountIndexDTO accountIndexDTO, BankOperationIndexDTO accountLineIndexDTO) {
    this.accountIndexDTO = accountIndexDTO;
    this.accountLineIndexDTO = accountLineIndexDTO;
  }

  public BankOperationDTO accountIndexDTO(BankAccountIndexDTO accountIndexDTO) {
    this.accountIndexDTO = accountIndexDTO;
    return this;
  }

  /**
   * Get accountIndexDTO
   * @return accountIndexDTO
  */
  @NotNull @Valid 
  @Schema(name = "accountIndexDTO", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accountIndexDTO")
  public BankAccountIndexDTO getAccountIndexDTO() {
    return accountIndexDTO;
  }

  public void setAccountIndexDTO(BankAccountIndexDTO accountIndexDTO) {
    this.accountIndexDTO = accountIndexDTO;
  }

  public BankOperationDTO accountLineIndexDTO(BankOperationIndexDTO accountLineIndexDTO) {
    this.accountLineIndexDTO = accountLineIndexDTO;
    return this;
  }

  /**
   * Get accountLineIndexDTO
   * @return accountLineIndexDTO
  */
  @NotNull @Valid 
  @Schema(name = "accountLineIndexDTO", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accountLineIndexDTO")
  public BankOperationIndexDTO getAccountLineIndexDTO() {
    return accountLineIndexDTO;
  }

  public void setAccountLineIndexDTO(BankOperationIndexDTO accountLineIndexDTO) {
    this.accountLineIndexDTO = accountLineIndexDTO;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankOperationDTO bankOperationDTO = (BankOperationDTO) o;
    return Objects.equals(this.accountIndexDTO, bankOperationDTO.accountIndexDTO) &&
        Objects.equals(this.accountLineIndexDTO, bankOperationDTO.accountLineIndexDTO);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountIndexDTO, accountLineIndexDTO);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankOperationDTO {\n");
    sb.append("    accountIndexDTO: ").append(toIndentedString(accountIndexDTO)).append("\n");
    sb.append("    accountLineIndexDTO: ").append(toIndentedString(accountLineIndexDTO)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}


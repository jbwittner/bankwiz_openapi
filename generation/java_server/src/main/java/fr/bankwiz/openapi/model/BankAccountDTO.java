package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import fr.bankwiz.openapi.model.BankAccountIndexDTO;
import fr.bankwiz.openapi.model.GroupIndexDTO;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * BankAccountDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankAccountDTO {

  private GroupIndexDTO groupIndexDTO;

  private BankAccountIndexDTO accountIndexDTO;

  public BankAccountDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankAccountDTO(GroupIndexDTO groupIndexDTO, BankAccountIndexDTO accountIndexDTO) {
    this.groupIndexDTO = groupIndexDTO;
    this.accountIndexDTO = accountIndexDTO;
  }

  public BankAccountDTO groupIndexDTO(GroupIndexDTO groupIndexDTO) {
    this.groupIndexDTO = groupIndexDTO;
    return this;
  }

  /**
   * Get groupIndexDTO
   * @return groupIndexDTO
  */
  @NotNull @Valid 
  @Schema(name = "groupIndexDTO", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("groupIndexDTO")
  public GroupIndexDTO getGroupIndexDTO() {
    return groupIndexDTO;
  }

  public void setGroupIndexDTO(GroupIndexDTO groupIndexDTO) {
    this.groupIndexDTO = groupIndexDTO;
  }

  public BankAccountDTO accountIndexDTO(BankAccountIndexDTO accountIndexDTO) {
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

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankAccountDTO bankAccountDTO = (BankAccountDTO) o;
    return Objects.equals(this.groupIndexDTO, bankAccountDTO.groupIndexDTO) &&
        Objects.equals(this.accountIndexDTO, bankAccountDTO.accountIndexDTO);
  }

  @Override
  public int hashCode() {
    return Objects.hash(groupIndexDTO, accountIndexDTO);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountDTO {\n");
    sb.append("    groupIndexDTO: ").append(toIndentedString(groupIndexDTO)).append("\n");
    sb.append("    accountIndexDTO: ").append(toIndentedString(accountIndexDTO)).append("\n");
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


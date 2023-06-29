package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import fr.bankwiz.openapi.model.BankAccountIndexDTO;
import fr.bankwiz.openapi.model.GroupIndexDTO;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * BankAccountGroupDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankAccountGroupDTO {

  private GroupIndexDTO groupIndexDTO;

  @Valid
  private List<@Valid BankAccountIndexDTO> accountIndexDTOs = new ArrayList<>();

  public BankAccountGroupDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankAccountGroupDTO(GroupIndexDTO groupIndexDTO, List<@Valid BankAccountIndexDTO> accountIndexDTOs) {
    this.groupIndexDTO = groupIndexDTO;
    this.accountIndexDTOs = accountIndexDTOs;
  }

  public BankAccountGroupDTO groupIndexDTO(GroupIndexDTO groupIndexDTO) {
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

  public BankAccountGroupDTO accountIndexDTOs(List<@Valid BankAccountIndexDTO> accountIndexDTOs) {
    this.accountIndexDTOs = accountIndexDTOs;
    return this;
  }

  public BankAccountGroupDTO addAccountIndexDTOsItem(BankAccountIndexDTO accountIndexDTOsItem) {
    if (this.accountIndexDTOs == null) {
      this.accountIndexDTOs = new ArrayList<>();
    }
    this.accountIndexDTOs.add(accountIndexDTOsItem);
    return this;
  }

  /**
   * Get accountIndexDTOs
   * @return accountIndexDTOs
  */
  @NotNull @Valid 
  @Schema(name = "accountIndexDTOs", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accountIndexDTOs")
  public List<@Valid BankAccountIndexDTO> getAccountIndexDTOs() {
    return accountIndexDTOs;
  }

  public void setAccountIndexDTOs(List<@Valid BankAccountIndexDTO> accountIndexDTOs) {
    this.accountIndexDTOs = accountIndexDTOs;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankAccountGroupDTO bankAccountGroupDTO = (BankAccountGroupDTO) o;
    return Objects.equals(this.groupIndexDTO, bankAccountGroupDTO.groupIndexDTO) &&
        Objects.equals(this.accountIndexDTOs, bankAccountGroupDTO.accountIndexDTOs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(groupIndexDTO, accountIndexDTOs);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountGroupDTO {\n");
    sb.append("    groupIndexDTO: ").append(toIndentedString(groupIndexDTO)).append("\n");
    sb.append("    accountIndexDTOs: ").append(toIndentedString(accountIndexDTOs)).append("\n");
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


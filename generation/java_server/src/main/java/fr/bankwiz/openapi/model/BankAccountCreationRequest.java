package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * BankAccountCreationRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankAccountCreationRequest {

  private Integer groupId;

  private String accountName;

  private Integer baseAmountDecimal;

  public BankAccountCreationRequest() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankAccountCreationRequest(Integer groupId, String accountName, Integer baseAmountDecimal) {
    this.groupId = groupId;
    this.accountName = accountName;
    this.baseAmountDecimal = baseAmountDecimal;
  }

  public BankAccountCreationRequest groupId(Integer groupId) {
    this.groupId = groupId;
    return this;
  }

  /**
   * Get groupId
   * @return groupId
  */
  @NotNull 
  @Schema(name = "groupId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("groupId")
  public Integer getGroupId() {
    return groupId;
  }

  public void setGroupId(Integer groupId) {
    this.groupId = groupId;
  }

  public BankAccountCreationRequest accountName(String accountName) {
    this.accountName = accountName;
    return this;
  }

  /**
   * Get accountName
   * @return accountName
  */
  @NotNull 
  @Schema(name = "accountName", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accountName")
  public String getAccountName() {
    return accountName;
  }

  public void setAccountName(String accountName) {
    this.accountName = accountName;
  }

  public BankAccountCreationRequest baseAmountDecimal(Integer baseAmountDecimal) {
    this.baseAmountDecimal = baseAmountDecimal;
    return this;
  }

  /**
   * Get baseAmountDecimal
   * @return baseAmountDecimal
  */
  @NotNull 
  @Schema(name = "baseAmountDecimal", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("baseAmountDecimal")
  public Integer getBaseAmountDecimal() {
    return baseAmountDecimal;
  }

  public void setBaseAmountDecimal(Integer baseAmountDecimal) {
    this.baseAmountDecimal = baseAmountDecimal;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankAccountCreationRequest bankAccountCreationRequest = (BankAccountCreationRequest) o;
    return Objects.equals(this.groupId, bankAccountCreationRequest.groupId) &&
        Objects.equals(this.accountName, bankAccountCreationRequest.accountName) &&
        Objects.equals(this.baseAmountDecimal, bankAccountCreationRequest.baseAmountDecimal);
  }

  @Override
  public int hashCode() {
    return Objects.hash(groupId, accountName, baseAmountDecimal);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountCreationRequest {\n");
    sb.append("    groupId: ").append(toIndentedString(groupId)).append("\n");
    sb.append("    accountName: ").append(toIndentedString(accountName)).append("\n");
    sb.append("    baseAmountDecimal: ").append(toIndentedString(baseAmountDecimal)).append("\n");
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


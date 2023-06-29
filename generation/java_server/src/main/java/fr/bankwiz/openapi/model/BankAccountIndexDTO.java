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
 * BankAccountIndexDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankAccountIndexDTO {

  private Integer accountId;

  private String accountName;

  private Integer baseAmountDecimal;

  public BankAccountIndexDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankAccountIndexDTO(Integer accountId, String accountName, Integer baseAmountDecimal) {
    this.accountId = accountId;
    this.accountName = accountName;
    this.baseAmountDecimal = baseAmountDecimal;
  }

  public BankAccountIndexDTO accountId(Integer accountId) {
    this.accountId = accountId;
    return this;
  }

  /**
   * Get accountId
   * @return accountId
  */
  @NotNull 
  @Schema(name = "accountId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accountId")
  public Integer getAccountId() {
    return accountId;
  }

  public void setAccountId(Integer accountId) {
    this.accountId = accountId;
  }

  public BankAccountIndexDTO accountName(String accountName) {
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

  public BankAccountIndexDTO baseAmountDecimal(Integer baseAmountDecimal) {
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
    BankAccountIndexDTO bankAccountIndexDTO = (BankAccountIndexDTO) o;
    return Objects.equals(this.accountId, bankAccountIndexDTO.accountId) &&
        Objects.equals(this.accountName, bankAccountIndexDTO.accountName) &&
        Objects.equals(this.baseAmountDecimal, bankAccountIndexDTO.baseAmountDecimal);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, accountName, baseAmountDecimal);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountIndexDTO {\n");
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
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


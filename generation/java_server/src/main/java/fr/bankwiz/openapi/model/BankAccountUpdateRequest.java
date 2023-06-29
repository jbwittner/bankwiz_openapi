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
 * BankAccountUpdateRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankAccountUpdateRequest {

  private String accountName;

  private Integer baseAmountDecimal;

  public BankAccountUpdateRequest accountName(String accountName) {
    this.accountName = accountName;
    return this;
  }

  /**
   * Get accountName
   * @return accountName
  */
  
  @Schema(name = "accountName", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("accountName")
  public String getAccountName() {
    return accountName;
  }

  public void setAccountName(String accountName) {
    this.accountName = accountName;
  }

  public BankAccountUpdateRequest baseAmountDecimal(Integer baseAmountDecimal) {
    this.baseAmountDecimal = baseAmountDecimal;
    return this;
  }

  /**
   * Get baseAmountDecimal
   * @return baseAmountDecimal
  */
  
  @Schema(name = "baseAmountDecimal", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
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
    BankAccountUpdateRequest bankAccountUpdateRequest = (BankAccountUpdateRequest) o;
    return Objects.equals(this.accountName, bankAccountUpdateRequest.accountName) &&
        Objects.equals(this.baseAmountDecimal, bankAccountUpdateRequest.baseAmountDecimal);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountName, baseAmountDecimal);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountUpdateRequest {\n");
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


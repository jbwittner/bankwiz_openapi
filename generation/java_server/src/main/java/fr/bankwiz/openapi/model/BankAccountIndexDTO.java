package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.util.UUID;
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

  private String bankAccountName;

  private UUID bankAccountId;

  private Integer decimalBaseAmount;

  public BankAccountIndexDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankAccountIndexDTO(String bankAccountName, UUID bankAccountId, Integer decimalBaseAmount) {
    this.bankAccountName = bankAccountName;
    this.bankAccountId = bankAccountId;
    this.decimalBaseAmount = decimalBaseAmount;
  }

  public BankAccountIndexDTO bankAccountName(String bankAccountName) {
    this.bankAccountName = bankAccountName;
    return this;
  }

  /**
   * Get bankAccountName
   * @return bankAccountName
  */
  @NotNull 
  @Schema(name = "bankAccountName", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("bankAccountName")
  public String getBankAccountName() {
    return bankAccountName;
  }

  public void setBankAccountName(String bankAccountName) {
    this.bankAccountName = bankAccountName;
  }

  public BankAccountIndexDTO bankAccountId(UUID bankAccountId) {
    this.bankAccountId = bankAccountId;
    return this;
  }

  /**
   * Get bankAccountId
   * @return bankAccountId
  */
  @NotNull @Valid 
  @Schema(name = "bankAccountId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("bankAccountId")
  public UUID getBankAccountId() {
    return bankAccountId;
  }

  public void setBankAccountId(UUID bankAccountId) {
    this.bankAccountId = bankAccountId;
  }

  public BankAccountIndexDTO decimalBaseAmount(Integer decimalBaseAmount) {
    this.decimalBaseAmount = decimalBaseAmount;
    return this;
  }

  /**
   * Get decimalBaseAmount
   * @return decimalBaseAmount
  */
  @NotNull 
  @Schema(name = "decimalBaseAmount", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("decimalBaseAmount")
  public Integer getDecimalBaseAmount() {
    return decimalBaseAmount;
  }

  public void setDecimalBaseAmount(Integer decimalBaseAmount) {
    this.decimalBaseAmount = decimalBaseAmount;
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
    return Objects.equals(this.bankAccountName, bankAccountIndexDTO.bankAccountName) &&
        Objects.equals(this.bankAccountId, bankAccountIndexDTO.bankAccountId) &&
        Objects.equals(this.decimalBaseAmount, bankAccountIndexDTO.decimalBaseAmount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bankAccountName, bankAccountId, decimalBaseAmount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankAccountIndexDTO {\n");
    sb.append("    bankAccountName: ").append(toIndentedString(bankAccountName)).append("\n");
    sb.append("    bankAccountId: ").append(toIndentedString(bankAccountId)).append("\n");
    sb.append("    decimalBaseAmount: ").append(toIndentedString(decimalBaseAmount)).append("\n");
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


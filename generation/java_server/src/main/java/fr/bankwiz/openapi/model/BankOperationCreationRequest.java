package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.time.LocalDate;
import org.springframework.format.annotation.DateTimeFormat;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * BankOperationCreationRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankOperationCreationRequest {

  private Integer accountId;

  private Integer lineAmountDecimal;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  private LocalDate dateAmount;

  public BankOperationCreationRequest() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankOperationCreationRequest(Integer accountId, Integer lineAmountDecimal, LocalDate dateAmount) {
    this.accountId = accountId;
    this.lineAmountDecimal = lineAmountDecimal;
    this.dateAmount = dateAmount;
  }

  public BankOperationCreationRequest accountId(Integer accountId) {
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

  public BankOperationCreationRequest lineAmountDecimal(Integer lineAmountDecimal) {
    this.lineAmountDecimal = lineAmountDecimal;
    return this;
  }

  /**
   * Get lineAmountDecimal
   * @return lineAmountDecimal
  */
  @NotNull 
  @Schema(name = "lineAmountDecimal", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("lineAmountDecimal")
  public Integer getLineAmountDecimal() {
    return lineAmountDecimal;
  }

  public void setLineAmountDecimal(Integer lineAmountDecimal) {
    this.lineAmountDecimal = lineAmountDecimal;
  }

  public BankOperationCreationRequest dateAmount(LocalDate dateAmount) {
    this.dateAmount = dateAmount;
    return this;
  }

  /**
   * Get dateAmount
   * @return dateAmount
  */
  @NotNull @Valid 
  @Schema(name = "dateAmount", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("dateAmount")
  public LocalDate getDateAmount() {
    return dateAmount;
  }

  public void setDateAmount(LocalDate dateAmount) {
    this.dateAmount = dateAmount;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankOperationCreationRequest bankOperationCreationRequest = (BankOperationCreationRequest) o;
    return Objects.equals(this.accountId, bankOperationCreationRequest.accountId) &&
        Objects.equals(this.lineAmountDecimal, bankOperationCreationRequest.lineAmountDecimal) &&
        Objects.equals(this.dateAmount, bankOperationCreationRequest.dateAmount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, lineAmountDecimal, dateAmount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankOperationCreationRequest {\n");
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    lineAmountDecimal: ").append(toIndentedString(lineAmountDecimal)).append("\n");
    sb.append("    dateAmount: ").append(toIndentedString(dateAmount)).append("\n");
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


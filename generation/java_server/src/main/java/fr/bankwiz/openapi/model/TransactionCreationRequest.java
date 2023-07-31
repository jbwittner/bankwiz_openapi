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
 * TransactionCreationRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class TransactionCreationRequest {

  private Integer accountId;

  private Integer amountInCents;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  private LocalDate date;

  public TransactionCreationRequest() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public TransactionCreationRequest(Integer accountId, Integer amountInCents, LocalDate date) {
    this.accountId = accountId;
    this.amountInCents = amountInCents;
    this.date = date;
  }

  public TransactionCreationRequest accountId(Integer accountId) {
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

  public TransactionCreationRequest amountInCents(Integer amountInCents) {
    this.amountInCents = amountInCents;
    return this;
  }

  /**
   * Get amountInCents
   * @return amountInCents
  */
  @NotNull 
  @Schema(name = "amountInCents", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("amountInCents")
  public Integer getAmountInCents() {
    return amountInCents;
  }

  public void setAmountInCents(Integer amountInCents) {
    this.amountInCents = amountInCents;
  }

  public TransactionCreationRequest date(LocalDate date) {
    this.date = date;
    return this;
  }

  /**
   * Get date
   * @return date
  */
  @NotNull @Valid 
  @Schema(name = "date", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("date")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransactionCreationRequest transactionCreationRequest = (TransactionCreationRequest) o;
    return Objects.equals(this.accountId, transactionCreationRequest.accountId) &&
        Objects.equals(this.amountInCents, transactionCreationRequest.amountInCents) &&
        Objects.equals(this.date, transactionCreationRequest.date);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, amountInCents, date);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransactionCreationRequest {\n");
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    amountInCents: ").append(toIndentedString(amountInCents)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
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


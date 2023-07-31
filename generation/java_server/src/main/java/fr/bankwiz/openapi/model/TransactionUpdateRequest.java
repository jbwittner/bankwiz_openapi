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
 * TransactionUpdateRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class TransactionUpdateRequest {

  private Integer amountInCents;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  private LocalDate date;

  public TransactionUpdateRequest amountInCents(Integer amountInCents) {
    this.amountInCents = amountInCents;
    return this;
  }

  /**
   * Get amountInCents
   * @return amountInCents
  */
  
  @Schema(name = "amountInCents", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("amountInCents")
  public Integer getAmountInCents() {
    return amountInCents;
  }

  public void setAmountInCents(Integer amountInCents) {
    this.amountInCents = amountInCents;
  }

  public TransactionUpdateRequest date(LocalDate date) {
    this.date = date;
    return this;
  }

  /**
   * Get date
   * @return date
  */
  @Valid 
  @Schema(name = "date", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
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
    TransactionUpdateRequest transactionUpdateRequest = (TransactionUpdateRequest) o;
    return Objects.equals(this.amountInCents, transactionUpdateRequest.amountInCents) &&
        Objects.equals(this.date, transactionUpdateRequest.date);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amountInCents, date);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransactionUpdateRequest {\n");
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


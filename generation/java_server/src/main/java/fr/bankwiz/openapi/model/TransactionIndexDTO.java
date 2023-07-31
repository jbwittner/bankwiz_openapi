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
 * TransactionIndexDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class TransactionIndexDTO {

  private Integer transactionId;

  private Integer amountInCents;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  private LocalDate date;

  public TransactionIndexDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public TransactionIndexDTO(Integer transactionId, Integer amountInCents, LocalDate date) {
    this.transactionId = transactionId;
    this.amountInCents = amountInCents;
    this.date = date;
  }

  public TransactionIndexDTO transactionId(Integer transactionId) {
    this.transactionId = transactionId;
    return this;
  }

  /**
   * Get transactionId
   * @return transactionId
  */
  @NotNull 
  @Schema(name = "transactionId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("transactionId")
  public Integer getTransactionId() {
    return transactionId;
  }

  public void setTransactionId(Integer transactionId) {
    this.transactionId = transactionId;
  }

  public TransactionIndexDTO amountInCents(Integer amountInCents) {
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

  public TransactionIndexDTO date(LocalDate date) {
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
    TransactionIndexDTO transactionIndexDTO = (TransactionIndexDTO) o;
    return Objects.equals(this.transactionId, transactionIndexDTO.transactionId) &&
        Objects.equals(this.amountInCents, transactionIndexDTO.amountInCents) &&
        Objects.equals(this.date, transactionIndexDTO.date);
  }

  @Override
  public int hashCode() {
    return Objects.hash(transactionId, amountInCents, date);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransactionIndexDTO {\n");
    sb.append("    transactionId: ").append(toIndentedString(transactionId)).append("\n");
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


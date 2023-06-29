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
 * BankOperationUpdateRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankOperationUpdateRequest {

  private Integer lineAmountDecimal;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  private LocalDate dateAmount;

  public BankOperationUpdateRequest lineAmountDecimal(Integer lineAmountDecimal) {
    this.lineAmountDecimal = lineAmountDecimal;
    return this;
  }

  /**
   * Get lineAmountDecimal
   * @return lineAmountDecimal
  */
  
  @Schema(name = "lineAmountDecimal", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("lineAmountDecimal")
  public Integer getLineAmountDecimal() {
    return lineAmountDecimal;
  }

  public void setLineAmountDecimal(Integer lineAmountDecimal) {
    this.lineAmountDecimal = lineAmountDecimal;
  }

  public BankOperationUpdateRequest dateAmount(LocalDate dateAmount) {
    this.dateAmount = dateAmount;
    return this;
  }

  /**
   * Get dateAmount
   * @return dateAmount
  */
  @Valid 
  @Schema(name = "dateAmount", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
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
    BankOperationUpdateRequest bankOperationUpdateRequest = (BankOperationUpdateRequest) o;
    return Objects.equals(this.lineAmountDecimal, bankOperationUpdateRequest.lineAmountDecimal) &&
        Objects.equals(this.dateAmount, bankOperationUpdateRequest.dateAmount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(lineAmountDecimal, dateAmount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankOperationUpdateRequest {\n");
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


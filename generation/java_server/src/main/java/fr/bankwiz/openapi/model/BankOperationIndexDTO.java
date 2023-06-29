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
 * BankOperationIndexDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class BankOperationIndexDTO {

  private Integer accountLineId;

  private Integer lineAmountDecimal;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
  private LocalDate dateAmount;

  public BankOperationIndexDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BankOperationIndexDTO(Integer accountLineId, Integer lineAmountDecimal, LocalDate dateAmount) {
    this.accountLineId = accountLineId;
    this.lineAmountDecimal = lineAmountDecimal;
    this.dateAmount = dateAmount;
  }

  public BankOperationIndexDTO accountLineId(Integer accountLineId) {
    this.accountLineId = accountLineId;
    return this;
  }

  /**
   * Get accountLineId
   * @return accountLineId
  */
  @NotNull 
  @Schema(name = "accountLineId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accountLineId")
  public Integer getAccountLineId() {
    return accountLineId;
  }

  public void setAccountLineId(Integer accountLineId) {
    this.accountLineId = accountLineId;
  }

  public BankOperationIndexDTO lineAmountDecimal(Integer lineAmountDecimal) {
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

  public BankOperationIndexDTO dateAmount(LocalDate dateAmount) {
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
    BankOperationIndexDTO bankOperationIndexDTO = (BankOperationIndexDTO) o;
    return Objects.equals(this.accountLineId, bankOperationIndexDTO.accountLineId) &&
        Objects.equals(this.lineAmountDecimal, bankOperationIndexDTO.lineAmountDecimal) &&
        Objects.equals(this.dateAmount, bankOperationIndexDTO.dateAmount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountLineId, lineAmountDecimal, dateAmount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankOperationIndexDTO {\n");
    sb.append("    accountLineId: ").append(toIndentedString(accountLineId)).append("\n");
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


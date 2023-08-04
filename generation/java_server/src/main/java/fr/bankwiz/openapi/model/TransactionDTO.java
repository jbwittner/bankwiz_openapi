package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import fr.bankwiz.openapi.model.BankAccountIndexDTO;
import fr.bankwiz.openapi.model.TransactionIndexDTO;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * TransactionDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class TransactionDTO {

  private BankAccountIndexDTO accountIndexDTO;

  private TransactionIndexDTO transactionIndexDTO;

  public TransactionDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public TransactionDTO(BankAccountIndexDTO accountIndexDTO, TransactionIndexDTO transactionIndexDTO) {
    this.accountIndexDTO = accountIndexDTO;
    this.transactionIndexDTO = transactionIndexDTO;
  }

  public TransactionDTO accountIndexDTO(BankAccountIndexDTO accountIndexDTO) {
    this.accountIndexDTO = accountIndexDTO;
    return this;
  }

  /**
   * Get accountIndexDTO
   * @return accountIndexDTO
  */
  @NotNull @Valid 
  @Schema(name = "accountIndexDTO", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accountIndexDTO")
  public BankAccountIndexDTO getAccountIndexDTO() {
    return accountIndexDTO;
  }

  public void setAccountIndexDTO(BankAccountIndexDTO accountIndexDTO) {
    this.accountIndexDTO = accountIndexDTO;
  }

  public TransactionDTO transactionIndexDTO(TransactionIndexDTO transactionIndexDTO) {
    this.transactionIndexDTO = transactionIndexDTO;
    return this;
  }

  /**
   * Get transactionIndexDTO
   * @return transactionIndexDTO
  */
  @NotNull @Valid 
  @Schema(name = "transactionIndexDTO", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("transactionIndexDTO")
  public TransactionIndexDTO getTransactionIndexDTO() {
    return transactionIndexDTO;
  }

  public void setTransactionIndexDTO(TransactionIndexDTO transactionIndexDTO) {
    this.transactionIndexDTO = transactionIndexDTO;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransactionDTO transactionDTO = (TransactionDTO) o;
    return Objects.equals(this.accountIndexDTO, transactionDTO.accountIndexDTO) &&
        Objects.equals(this.transactionIndexDTO, transactionDTO.transactionIndexDTO);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountIndexDTO, transactionIndexDTO);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransactionDTO {\n");
    sb.append("    accountIndexDTO: ").append(toIndentedString(accountIndexDTO)).append("\n");
    sb.append("    transactionIndexDTO: ").append(toIndentedString(transactionIndexDTO)).append("\n");
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


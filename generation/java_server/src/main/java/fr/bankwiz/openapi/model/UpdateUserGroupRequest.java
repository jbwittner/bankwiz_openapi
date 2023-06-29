package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import fr.bankwiz.openapi.model.GroupAuthorizationEnum;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * UpdateUserGroupRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class UpdateUserGroupRequest {

  private GroupAuthorizationEnum authorization;

  public UpdateUserGroupRequest authorization(GroupAuthorizationEnum authorization) {
    this.authorization = authorization;
    return this;
  }

  /**
   * Get authorization
   * @return authorization
  */
  @Valid 
  @Schema(name = "authorization", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("authorization")
  public GroupAuthorizationEnum getAuthorization() {
    return authorization;
  }

  public void setAuthorization(GroupAuthorizationEnum authorization) {
    this.authorization = authorization;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateUserGroupRequest updateUserGroupRequest = (UpdateUserGroupRequest) o;
    return Objects.equals(this.authorization, updateUserGroupRequest.authorization);
  }

  @Override
  public int hashCode() {
    return Objects.hash(authorization);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateUserGroupRequest {\n");
    sb.append("    authorization: ").append(toIndentedString(authorization)).append("\n");
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


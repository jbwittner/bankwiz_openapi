package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import fr.bankwiz.openapi.model.GroupAuthorizationEnum;
import fr.bankwiz.openapi.model.UserDTO;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * UserGroupDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class UserGroupDTO {

  private UserDTO user;

  private GroupAuthorizationEnum authorization;

  public UserGroupDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public UserGroupDTO(UserDTO user, GroupAuthorizationEnum authorization) {
    this.user = user;
    this.authorization = authorization;
  }

  public UserGroupDTO user(UserDTO user) {
    this.user = user;
    return this;
  }

  /**
   * Get user
   * @return user
  */
  @NotNull @Valid 
  @Schema(name = "user", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("user")
  public UserDTO getUser() {
    return user;
  }

  public void setUser(UserDTO user) {
    this.user = user;
  }

  public UserGroupDTO authorization(GroupAuthorizationEnum authorization) {
    this.authorization = authorization;
    return this;
  }

  /**
   * Get authorization
   * @return authorization
  */
  @NotNull @Valid 
  @Schema(name = "authorization", requiredMode = Schema.RequiredMode.REQUIRED)
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
    UserGroupDTO userGroupDTO = (UserGroupDTO) o;
    return Objects.equals(this.user, userGroupDTO.user) &&
        Objects.equals(this.authorization, userGroupDTO.authorization);
  }

  @Override
  public int hashCode() {
    return Objects.hash(user, authorization);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserGroupDTO {\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
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


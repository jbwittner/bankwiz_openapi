package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import fr.bankwiz.openapi.model.UserGroupDTO;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * GroupDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class GroupDTO {

  private UUID groupId;

  private String groupName;

  @Valid
  private List<@Valid UserGroupDTO> users = new ArrayList<>();

  public GroupDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public GroupDTO(UUID groupId, String groupName, List<@Valid UserGroupDTO> users) {
    this.groupId = groupId;
    this.groupName = groupName;
    this.users = users;
  }

  public GroupDTO groupId(UUID groupId) {
    this.groupId = groupId;
    return this;
  }

  /**
   * Get groupId
   * @return groupId
  */
  @NotNull @Valid 
  @Schema(name = "groupId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("groupId")
  public UUID getGroupId() {
    return groupId;
  }

  public void setGroupId(UUID groupId) {
    this.groupId = groupId;
  }

  public GroupDTO groupName(String groupName) {
    this.groupName = groupName;
    return this;
  }

  /**
   * Get groupName
   * @return groupName
  */
  @NotNull 
  @Schema(name = "groupName", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("groupName")
  public String getGroupName() {
    return groupName;
  }

  public void setGroupName(String groupName) {
    this.groupName = groupName;
  }

  public GroupDTO users(List<@Valid UserGroupDTO> users) {
    this.users = users;
    return this;
  }

  public GroupDTO addUsersItem(UserGroupDTO usersItem) {
    if (this.users == null) {
      this.users = new ArrayList<>();
    }
    this.users.add(usersItem);
    return this;
  }

  /**
   * Get users
   * @return users
  */
  @NotNull @Valid 
  @Schema(name = "users", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("users")
  public List<@Valid UserGroupDTO> getUsers() {
    return users;
  }

  public void setUsers(List<@Valid UserGroupDTO> users) {
    this.users = users;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GroupDTO groupDTO = (GroupDTO) o;
    return Objects.equals(this.groupId, groupDTO.groupId) &&
        Objects.equals(this.groupName, groupDTO.groupName) &&
        Objects.equals(this.users, groupDTO.users);
  }

  @Override
  public int hashCode() {
    return Objects.hash(groupId, groupName, users);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupDTO {\n");
    sb.append("    groupId: ").append(toIndentedString(groupId)).append("\n");
    sb.append("    groupName: ").append(toIndentedString(groupName)).append("\n");
    sb.append("    users: ").append(toIndentedString(users)).append("\n");
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


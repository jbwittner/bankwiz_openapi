package fr.bankwiz.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * GroupIndexDTO
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class GroupIndexDTO {

  private Integer groupId;

  private String groupName;

  public GroupIndexDTO() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public GroupIndexDTO(Integer groupId, String groupName) {
    this.groupId = groupId;
    this.groupName = groupName;
  }

  public GroupIndexDTO groupId(Integer groupId) {
    this.groupId = groupId;
    return this;
  }

  /**
   * Get groupId
   * @return groupId
  */
  @NotNull 
  @Schema(name = "groupId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("groupId")
  public Integer getGroupId() {
    return groupId;
  }

  public void setGroupId(Integer groupId) {
    this.groupId = groupId;
  }

  public GroupIndexDTO groupName(String groupName) {
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

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GroupIndexDTO groupIndexDTO = (GroupIndexDTO) o;
    return Objects.equals(this.groupId, groupIndexDTO.groupId) &&
        Objects.equals(this.groupName, groupIndexDTO.groupName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(groupId, groupName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupIndexDTO {\n");
    sb.append("    groupId: ").append(toIndentedString(groupId)).append("\n");
    sb.append("    groupName: ").append(toIndentedString(groupName)).append("\n");
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


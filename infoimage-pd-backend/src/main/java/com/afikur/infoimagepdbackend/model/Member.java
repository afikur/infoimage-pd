package com.afikur.infoimagepdbackend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "members")
@Getter @Setter @NoArgsConstructor
public class Member {
    @Id
    private String id;

    @Indexed(unique = true)
    private String name;

    private String imageUrl;

    private String designation;
}
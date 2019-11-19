package com.afikur.infoimagepdbackend.repository;

import com.afikur.infoimagepdbackend.model.Member;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends MongoRepository<Member, Long> {

}

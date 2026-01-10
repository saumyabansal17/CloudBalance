package com.saumya.cloudbalance.repository;

import com.saumya.cloudbalance.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
//
//    @Query(Select a.uid, a.count(uid) from user u join account a groupBy(a.uid))
//    UserDto countAccount();
}
